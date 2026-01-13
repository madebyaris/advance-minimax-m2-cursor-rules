#!/usr/bin/env node
/**
 * Cursor stop-hook: RALPH-style long-running agent loop
 * 
 * Implements iterative improvement pattern - agent keeps working until
 * verification goals are met (tests pass, build succeeds, etc.)
 * 
 * Based on: https://cursor.com/blog/agent-best-practices#example-long-running-agent-loop
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Read hook input from stdin
let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => {
  input += chunk;
});
process.stdin.on('end', () => {
  try {
    const hookInput = JSON.parse(input);
    const result = processHook(hookInput);
    console.log(JSON.stringify(result));
    process.exit(0);
  } catch (error) {
    console.error(JSON.stringify({ error: error.message }));
    process.exit(1);
  }
});

/**
 * Process the stop hook input
 * @param {Object} input - Hook input from Cursor
 * @param {string} input.status - "completed" | "aborted" | "error"
 * @param {number} input.loop_count - Current iteration count
 * @param {string} input.conversation_id - Conversation identifier
 * @returns {Object} - Empty {} to stop, or { followup_message: string } to continue
 */
function processHook(input) {
  const { status, loop_count = 0 } = input;
  
  // Load config if exists
  const config = loadConfig();
  const MAX_ITERATIONS = config.maxIterations || 5;
  
  // Stop if agent was aborted/errored or max iterations reached
  if (status !== 'completed' || loop_count >= MAX_ITERATIONS) {
    return {};
  }
  
  // Check if verification goals are met
  const goalCheck = checkGoals(config);
  
  if (goalCheck.success) {
    // Goals met - stop the loop
    return {};
  }
  
  // Goals not met - continue with followup message
  return {
    followup_message: goalCheck.message || `Continue working on the task. Iteration ${loop_count + 1}/${MAX_ITERATIONS}. ${goalCheck.details || ''}`
  };
}

/**
 * Load optional configuration from .cursor/grind.json
 */
function loadConfig() {
  const configPath = path.join(process.cwd(), '.cursor', 'grind.json');
  if (fs.existsSync(configPath)) {
    try {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    } catch (error) {
      // Invalid JSON - use defaults
    }
  }
  return {
    maxIterations: 5,
    commands: [],
    stopOnSuccess: true
  };
}

/**
 * Check verification goals (tests, build, lint, etc.)
 * @param {Object} config - Configuration object
 * @returns {Object} - { success: boolean, message?: string, details?: string }
 */
function checkGoals(config) {
  const workspaceRoot = process.cwd();
  
  // Check for package.json (Node.js project)
  const packageJsonPath = path.join(workspaceRoot, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const scripts = packageJson.scripts || {};
      
      // Priority: test > lint > build
      if (scripts.test) {
        return runCommand('npm test', 'Tests');
      } else if (scripts.lint) {
        return runCommand('npm run lint', 'Linter');
      } else if (scripts.build) {
        return runCommand('npm run build', 'Build');
      }
    } catch (error) {
      // Invalid package.json - continue to other checks
    }
  }
  
  // Check for custom commands in config
  if (config.commands && config.commands.length > 0) {
    for (const cmd of config.commands) {
      const result = runCommand(cmd, cmd);
      if (!result.success) {
        return result; // Return first failure
      }
    }
    // All custom commands passed
    return { success: true };
  }
  
  // No specific goals found - stop the loop (don't keep asking the same thing)
  // The agent should have already verified during its task
  return { success: true };
}

/**
 * Run a command and check if it succeeds
 * @param {string} command - Command to run
 * @param {string} label - Label for the command (for error messages)
 * @returns {Object} - { success: boolean, message?: string, details?: string }
 */
function runCommand(command, label) {
  try {
    execSync(command, {
      stdio: 'pipe',
      cwd: process.cwd(),
      timeout: 60000 // 60 second timeout
    });
    return { success: true };
  } catch (error) {
    const errorOutput = error.stdout?.toString() || error.stderr?.toString() || error.message;
    return {
      success: false,
      message: `${label} failed. Fix the errors and continue.`,
      details: errorOutput.substring(0, 500) // Limit details length
    };
  }
}
