<div align="center">

# Advanced MiniMax M2.1 Cursor Rules

[![Stars](https://img.shields.io/github/stars/madebyaris/advance-minimax-m2-cursor-rules?style=flat-square)](https://github.com/madebyaris/advance-minimax-m2-cursor-rules/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Cursor 2.4+](https://img.shields.io/badge/Cursor-2.4%2B-blue?style=flat-square)](https://cursor.com)
[![MiniMax M2.1](https://img.shields.io/badge/MiniMax-M2.1-purple?style=flat-square)](https://platform.minimax.io)

**Agentic-first Cursor rules that transform simple prompts into production-ready, verified code**

*Now emulating **Claude Opus 4.6 Max** — adaptive thinking, adversarial self-review, and proportional effort*

[Quick Start](#-quick-start) | [AGENTS.md](#-agentsmd-for-other-ides--clis) | [Features](#-features) | [Rules](#-rules) | [Contributing](#-contributing)

</div>

---

## Features

- **Opus 4.6 Max Reasoning** — Adaptive effort, adversarial self-review, intellectual honesty, and strategic laziness
- **Adaptive Thinking** — Scales reasoning depth to problem complexity (Instant/Light/Deep/Exhaustive)
- **Adversarial Self-Review** — AI challenges its own solutions before presenting them: "What would break this?"
- **Native Subagents (2.4)** — Custom subagents for validation, debugging, and specialized work
- **Agent Skills (2.4)** — Portable knowledge packages with scripts and progressive loading
- **CLI-First Development** — Always use framework CLIs, never create config files manually
- **Version Verification** — Web search for current package versions before using
- **Intellectual Honesty** — Three-tier certainty (Certain/Likely/Uncertain) instead of hallucinated confidence
- **Strategic Laziness** — Minimum correct change, no over-engineering
- **Compaction** — Context compression for sustained productivity over long sessions
- **Full Cursor 2.4 Support** — Subagents, skills, hooks, and all tools documented and optimized
- **MiniMax MCP** — `web_search` + `understand_image` integration
- **Multi-Language** — Web, Python, Rust, Go, Swift, Flutter, DevOps
- **Syntax Trap Prevention** — Common mistakes documented per language
- **AGENTS.md** — Portable version for other IDEs and CLI tools

---

## Philosophy

These rules are designed to make AI code generation **actually work** by emulating how the best coding models think.

### Opus 4.6 Max Mode

Based on [Claude Opus 4.6](https://anthropic.com/news/claude-opus-4-6) behavioral patterns:

> "The model brings more focus to the most challenging parts of a task without being told to, moves quickly through the more straightforward parts, handles ambiguous problems with better judgment, and stays productive over longer sessions."

Key behaviors:

- **Adaptive effort**: A typo fix gets instant treatment. An architecture redesign gets exhaustive analysis.
- **Self-critical**: Before presenting a solution, mentally attack it — edge cases, assumptions, simpler alternatives.
- **Intellectually honest**: "I'm not certain about this API — let me check" instead of hallucinating confidence.
- **Strategically lazy**: Make the minimum correct change. Don't refactor what wasn't asked for.
- **Verification-first**: "Done" means verified (builds, lints, tests), not just implemented.

### The Golden Rule: Verify Before You Act

```
1. CALIBRATE — How complex is this? Match effort to complexity.
2. CHECK     — What exists? What versions? What CLIs?
3. ACT       — Make the change using proper tools.
4. REVIEW    — What would break? What did I miss?
5. VALIDATE  — Build, lint, test. Did it actually work?
```

### What This Prevents

| Bad Practice | What Rules Enforce |
|-------------|-------------------|
| Manually creating `package.json` | Use `npm init` or `npx create-next-app` |
| Manually creating `pubspec.yaml` | Use `flutter create` |
| Manually creating `Cargo.toml` | Use `cargo new` |
| Manually creating `.xcodeproj` | **NEVER** — use Xcode only |
| Skipping `npm install` | Always run after setup |
| Using outdated package versions | Web search for current versions |
| Charts without container heights | Explicit Chart.js guidelines |
| Over-engineering simple fixes | Adaptive effort levels prevent this |
| Hallucinating API knowledge | Intellectual honesty protocol |

---

## Quick Start

### For Cursor Users

```bash
git clone https://github.com/madebyaris/advance-minimax-m2-cursor-rules.git
cp -r advance-minimax-m2-cursor-rules/.cursor your-project/.cursor
```

### For Other IDEs/CLIs

Copy [`AGENTS.md`](AGENTS.md) to your repo root or use as system prompt. See [AGENTS.md section](#-agentsmd-for-other-ides--clis) for details.

### 2. Configure MiniMax MCP

Add to Cursor Settings > MCP:

```json
{
  "mcpServers": {
    "MiniMax": {
      "command": "uvx",
      "args": ["minimax-coding-plan-mcp"],
      "env": {
        "MINIMAX_API_KEY": "<YOUR_API_KEY>",
        "MINIMAX_MCP_BASE_PATH": "<OUTPUT_DIR>",
        "MINIMAX_API_HOST": "https://api.minimax.io"
      }
    }
  }
}
```

> Get your API key at [platform.minimax.io](https://platform.minimax.io)

### 3. Restart Cursor

---

## AGENTS.md (For Other IDEs & CLIs)

Not using Cursor? The [`AGENTS.md`](AGENTS.md) file contains the same Opus 4.6 Max patterns in a portable, IDE-agnostic format.

### Use With

- **OpenAI Codex / ChatGPT** — Copy as custom instructions
- **GitHub Copilot Chat** — Add to system prompt
- **Claude** (in other IDEs) — Use as context
- **Cline / Aider / Continue** — Place in repo root
- **Any CLI coding assistant** — Include in prompts

### What's Included

- Opus 4.6 Max behavioral patterns (adaptive effort, self-review, honesty)
- Effort-scaled workflow (Instant/Light/Deep/Exhaustive)
- Adversarial self-review protocol
- CLI-first development patterns
- Version checking protocol
- Self-correction loop for error recovery
- EPIC-based task decomposition
- Code reading strategy
- Communication style guidelines

---

## Rules, Subagents, and Skills

### Core Rules (Always Active)

| Rule | Purpose |
|------|---------|
| `minimax-m2-core.mdc` | Opus 4.6 Max reasoning, adaptive effort, adversarial self-review, self-correction, compaction |
| `cursor-agent-orchestration.mdc` | Cursor 2.4 subagents, skills, parallel workflows, EPIC todos, hooks |

### Custom Subagents (`.cursor/agents/`)

| Subagent | Purpose | Invocation |
|----------|---------|------------|
| `verifier.md` | Validates completed work, catches incomplete implementations | `/verifier` |
| `debugger.md` | Deep error investigation, root cause analysis | `/debugger` |

### Agent-Requestable Rules (Loaded on Demand)

These rules are **not always loaded** — the agent requests them when relevant:

| Rule | Purpose | Triggered By |
|------|---------|--------------|
| `minimax-m2-verification.mdc` | Pre/post verification protocols | Code generation tasks |
| `minimax-mcp-tools.mdc` | MiniMax MCP + version checking | Web search, image analysis |
| `cursor-tools-mastery.mdc` | Cursor 2.4 tools reference | Complex tool usage |
| `clarify-first-prompting.mdc` | Check first, then ask questions | Ambiguous requests |

### Language-Specific (Auto-Activate)

| Rule | Files | Key Features |
|------|-------|--------------|
| `web-development.mdc` | `*.js`, `*.ts`, `*.tsx`, `*.vue` | Next.js CLI, shadcn CLI, Chart.js containers |
| `python-development.mdc` | `*.py`, `requirements.txt` | venv requirement, uv/pip, common traps |
| `rust-development.mdc` | `*.rs`, `Cargo.toml` | cargo new/add, ownership traps |
| `go-development.mdc` | `*.go`, `go.mod` | go mod init, error handling patterns |
| `swift-development.mdc` | `*.swift` | **Xcode project warning**, Swift Package CLI |
| `flutter-development.mdc` | `*.dart`, `pubspec.yaml` | flutter create/pub add, dispose patterns |
| `mobile-cross-platform.mdc` | Cross-platform projects | Framework CLIs, platform differences |
| `devops-infrastructure.mdc` | `Dockerfile`, `*.tf`, `*.yaml` | Dry-run validation, version pinning |

---

## Cursor 2.4 + Opus 4.6 Enhancements

### Adaptive Thinking (NEW)
The core behavioral upgrade. AI now calibrates effort to task complexity:
- **Instant**: Fix a typo — just do it, lint, done
- **Light**: Add a function — brief scan, implement, verify
- **Deep**: Build a feature — investigate, plan, implement, self-review, verify
- **Exhaustive**: Redesign architecture — full investigation, EPIC todos, incremental implementation

### Adversarial Self-Review (NEW)
Before presenting solutions, the AI attacks its own work:
- What would break this?
- What edge case am I missing?
- Is there a simpler way?
- Am I solving the right problem?

### Intellectual Honesty (NEW)
Three-tier certainty replaces fake confidence scores:
- **Certain**: Verified knowledge — proceed confidently
- **Likely**: Best understanding — proceed and verify
- **Uncertain**: Possibly stale — search first or flag to user

### Strategic Laziness (NEW)
Prevents over-engineering:
- Make the minimum correct change
- Don't create EPIC todos for a typo fix
- Don't web search versions for existing dependencies
- Don't read 20 files to fix a one-line bug

### Context Compaction (NEW)
For long tasks, the AI compresses its context to stay productive:
- Build codebase "spine" (entry points, data flow, conventions)
- Track essential state between phases
- Release detailed contents no longer needed

### Native Subagents
Cursor 2.4 native subagents with isolated context windows:
- **Built-in**: `explore` (codebase search), `bash` (shell commands), `browser` (web automation)
- **Custom**: `verifier` and `debugger` in `.cursor/agents/`

### Agent Skills System
Portable knowledge packages:
- Location: `.cursor/skills/<name>/SKILL.md`
- Supports scripts, references, and assets
- Invoke with `/skill-name` or auto-discovery

### Self-Correction Loop
Replaces the rigid RALPH template with genuine reasoning:
- Form hypothesis about error cause
- Test the smallest thing that distinguishes hypotheses
- Update beliefs based on evidence
- After 3-4 failures: auto-escalate to web search

### Cursor Hooks Integration
`.cursor/hooks.json` with `stop` hook for iterative improvement loops. Agent keeps working until verification goals are met.

---

## Key Improvements in v2.1

### 1. CLI-First Development

Every language rule now includes:
- **Pre-development checks**: Verify CLI availability
- **Project creation commands**: Never manually create generated files
- **Dependency management**: Use CLI to add packages

### 2. Version Verification Protocol

```
Before using any NEW package:
1. web_search("[package] latest version [current month year]")
2. If unclear, use Context7: get-library-docs
3. Verify compatibility with project stack
```

### 3. Syntax Trap Prevention

Each language rule documents common mistakes:

**Go:**
```go
// WRONG: Range loop variable capture
for _, item := range items {
    go func() { process(item) }()  // Bug!
}
```

**Python:**
```python
# WRONG: Mutable default argument
def append_to(item, target=[]):  # Bug!
```

**Rust:**
```rust
// WRONG: Using unwrap in production
let value = some_option.unwrap();  // Panics!
```

### 4. Post-Edit Verification

Every language rule includes verification commands:
```bash
# After changes, ALWAYS run:
npm run build        # Web
flutter analyze      # Flutter
cargo check          # Rust
go build ./...       # Go
python -m py_compile # Python
```

---

## Optional: Context7 MCP

Get up-to-date library documentation directly in your workflow:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
```

**Tools provided:**
- `resolve-library-id` — Find library IDs (e.g., "react" -> `/facebook/react`)
- `get-library-docs` — Fetch current API docs, examples, and guides

---

## Critical Warnings

These rules explicitly prevent common AI code generation failures:

### Never Manually Create These Files

| File Type | Reason | Use Instead |
|-----------|--------|-------------|
| `*.xcodeproj/*` | Complex binary-like format | Xcode IDE |
| `project.pbxproj` | UUID references, will corrupt | Xcode only |
| `package.json` | Missing scripts/config | `npm init` |
| `go.mod` | Missing checksums | `go mod init` |
| `Cargo.toml` | Missing metadata | `cargo new` |
| `pubspec.yaml` | Missing flutter config | `flutter create` |

### Always Verify After Actions

```bash
# After creating any project
cd project && [package-manager] install && [build-command]

# Examples:
npm install && npm run build
flutter pub get && flutter analyze
cargo build && cargo test
go build ./... && go test ./...
```

---

## Contributing

1. Star this repo
2. Fork & create a branch
3. Follow existing rule format
4. Test with real projects
5. Submit a PR

---

## References

- [Claude Opus 4.6 Announcement](https://anthropic.com/news/claude-opus-4-6)
- [MiniMax M2.1 Docs](https://platform.minimax.io/docs/guides/text-ai-coding-tools)
- [MiniMax Coding Plan MCP](https://github.com/MiniMax-AI/MiniMax-Coding-Plan-MCP)
- [Cursor Rules Docs](https://cursor.com/docs/context/rules)
- [Context7 MCP](https://github.com/upstash/context7-mcp)

---

<div align="center">

**Made with care by [Aris Setiawan](https://github.com/madebyaris)**

*Rules optimized for production-quality code generation with Opus 4.6 Max behavioral patterns*

</div>
