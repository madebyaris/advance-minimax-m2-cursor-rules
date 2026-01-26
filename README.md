<div align="center">

# 🚀 Advanced MiniMax M2.1 Cursor Rules

[![Stars](https://img.shields.io/github/stars/madebyaris/advance-minimax-m2-cursor-rules?style=flat-square)](https://github.com/madebyaris/advance-minimax-m2-cursor-rules/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Cursor 2.4+](https://img.shields.io/badge/Cursor-2.4%2B-blue?style=flat-square)](https://cursor.com)
[![MiniMax M2.1](https://img.shields.io/badge/MiniMax-M2.1-purple?style=flat-square)](https://platform.minimax.io)

**Agentic-first Cursor rules that transform simple prompts into production-ready, verified code**

[Quick Start](#-quick-start) • [AGENTS.md](#-agentsmd-for-other-ides--clis) • [Features](#-features) • [Rules](#-rules) • [Contributing](#-contributing)

</div>

---

## ✨ Features

- **🧠 Agentic-First Workflow** — Verify → Plan → Act → Validate (like Opus 4.5)
- **🤖 Native Subagents (2.4)** — Custom subagents for validation, debugging, and specialized work
- **📦 Agent Skills (2.4)** — Portable knowledge packages with scripts and progressive loading
- **✅ CLI-First Development** — Always use framework CLIs, never create config files manually
- **🔍 Version Verification** — Web search for current package versions before using
- **❓ Clarify-First Prompting** — AI checks context first, then asks targeted questions
- **⚡ GPT-5.2 Extra High Mode** — Autonomous, concise, tool-first execution with minimal questions
- **💭 Preserved Thinking** — Maintains reasoning context across conversations
- **🛠️ Full Cursor 2.4 Support** — Subagents, skills, and all tools documented and optimized
- **🔌 MiniMax MCP** — `web_search` + `understand_image` integration
- **🌐 Multi-Language** — Web, Python, Rust, Go, Swift, Flutter, DevOps
- **⚠️ Syntax Trap Prevention** — Common mistakes documented per language
- **📄 AGENTS.md** — Portable version for other IDEs and CLI tools

---

## 🎯 Philosophy

These rules are designed to make AI code generation **actually work** by enforcing real development practices:

### GPT-5.2 Extra High Mode (Autonomy + Concision)

This mode keeps the Opus 4.5 workflow internally but tunes behavior for coding speed and clarity:

- **Autonomous by default**: proceed without asking unless a decision affects security, data integrity, or core architecture
- **Concise updates**: progress notes are 1–2 sentences, high-signal only
- **Tool-first**: prefer targeted tool calls and parallel reads
- **Verification-first**: done means verified, not just implemented

### The Golden Rule: Verify Before You Act

```
1. CHECK  — What exists? What's the current state?
2. VERIFY — What versions? What CLIs are available?
3. ACT    — Make the change using proper tools
4. VALIDATE — Did it work? Any errors?
```

### What This Prevents

| ❌ Bad Practice | ✅ What Rules Enforce |
|-----------------|----------------------|
| Manually creating `package.json` | Use `npm init` or `npx create-next-app` |
| Manually creating `pubspec.yaml` | Use `flutter create` |
| Manually creating `Cargo.toml` | Use `cargo new` |
| Manually creating `.xcodeproj` | **NEVER** - use Xcode only |
| Skipping `npm install` | Always run after setup |
| Using outdated package versions | Web search for current versions |
| Charts without container heights | Explicit Chart.js guidelines |

---

## 🚀 Quick Start

### For Cursor Users

```bash
git clone https://github.com/madebyaris/advance-minimax-m2-cursor-rules.git
cp -r advance-minimax-m2-cursor-rules/.cursor your-project/.cursor
```

### For Other IDEs/CLIs

Copy [`AGENTS.md`](AGENTS.md) to your repo root or use as system prompt. See [AGENTS.md section](#-agentsmd-for-other-ides--clis) for details.

### 2. Configure MiniMax MCP

Add to Cursor Settings → MCP:

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

## 📄 AGENTS.md (For Other IDEs & CLIs)

Not using Cursor? The [`AGENTS.md`](AGENTS.md) file contains the same MiniMax M2.1 patterns in a portable, IDE-agnostic format.

### Use With

- **OpenAI Codex / ChatGPT** — Copy as custom instructions
- **GitHub Copilot Chat** — Add to system prompt
- **Claude** (in other IDEs) — Use as context
- **Cline / Aider / Continue** — Place in repo root
- **Any CLI coding assistant** — Include in prompts

### What's Included

- Core agentic workflow (INVESTIGATE → PLAN → EXECUTE → VERIFY)
- CLI-first development patterns
- Version checking protocol
- RALPH loop for error recovery
- EPIC-based task decomposition
- Communication style guidelines

---

## 📁 Rules, Subagents, and Skills

### Core Rules (Always Active)

| Rule | Purpose |
|------|---------|
| `minimax-m2-core.mdc` | Agentic behavior, Opus 4.5-style thinking, GPT-5.2 Extra High mode, RALPH loop |
| `cursor-agent-orchestration.mdc` | Cursor 2.4 subagents, skills, parallel workflows, EPIC todos, hooks |

### Custom Subagents (`.cursor/agents/`)

| Subagent | Purpose | Invocation |
|----------|---------|------------|
| `verifier.md` | Validates completed work, catches incomplete implementations | `/verifier` |
| `debugger.md` | Deep error investigation, root cause analysis | `/debugger` |

### Agent-Requestable Rules (Loaded on Demand)

These rules are **not always loaded** - the agent requests them when relevant, saving context window:

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

## 🆕 Cursor 2.4 Enhancements

### Native Subagents
Cursor 2.4 introduces native subagents with isolated context windows:
- **Built-in**: `explore` (codebase search), `bash` (shell commands), `browser` (web automation)
- **Custom**: Define your own in `.cursor/agents/` (includes `verifier` and `debugger`)

### Agent Skills System
Skills are the new way to package domain knowledge:
- Location: `.cursor/skills/<name>/SKILL.md`
- Supports scripts, references, and assets
- Invoke with `/skill-name` or auto-discovery
- Migrate existing rules with `/migrate-to-skills`

### Issue #3: Date-Aware Searches
All web searches now **extract the current date first** and use concrete values, never placeholders.

### Issue #4: Auto Web-Search on Persistent Errors
After 4 failed attempts with the same error, the AI automatically searches the web for community solutions.

### Issue #5: No Template Placeholders
Searches use actual values like `"Next.js 15 stable January 2026"` instead of `"{framework} {version} {date}"`.

### Issue #6: EPIC-Based Task Decomposition
Complex tasks use hierarchical todos:
```
EPIC0: Prerequisites (deps, config, setup)
EPIC1: Feature A
  EPIC1.1: Sub-task A.1
  EPIC1.2: Sub-task A.2
EPIC2: Feature B
  ...
```

### Verifier Subagent Pattern
The `/verifier` subagent validates completed work - addresses the common issue where AI marks tasks done but implementations are incomplete.

### Cursor Hooks Integration
Includes `.cursor/hooks.json` with `stop` hook for **long-running agent loops** (RALPH pattern). Agent iterates until verification goals are met (tests pass, build succeeds). Based on [Cursor agent best practices](https://cursor.com/blog/agent-best-practices#example-long-running-agent-loop).

### RALPH Loop (Self-Correction)
Implements Reinforcement Learning with AI Preferences - the agent learns from failures within a session:
```
ATTEMPT → EVALUATE (0-10) → REFLECT → LEARN → RETRY
```
After 4 failed attempts, automatically escalates to web search for community solutions.

### Context Window Optimization
- **Native subagents** have isolated context (explore, bash, browser)
- **2 always-applied rules** vs previous 6 rules
- **Skills load progressively** - only when needed
- **Custom subagents** for specialized work without bloating main context

### Opus 4.5-Style Enhancements
- **Confidence Scoring**: Rate confidence (0-100%) before risky operations
- **Hypothesis Testing**: Form explicit hypotheses, test, update beliefs
- **Backtracking Protocol**: When stuck, explicitly backtrack and try alternatives
- **Session Memory**: Track successful patterns within conversation

---

## 🔧 Key Improvements in v2.1

### 1. CLI-First Development

Every language rule now includes:
- **Pre-development checks**: Verify CLI availability with `--version`
- **Project creation commands**: Never manually create generated files
- **Dependency management**: Use CLI to add packages, not manual editing

### 2. Version Verification Protocol

```
Before using ANY package:
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

## 🔌 Optional: Context7 MCP

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
- `resolve-library-id` — Find library IDs (e.g., "react" → `/facebook/react`)
- `get-library-docs` — Fetch current API docs, examples, and guides

---

## ⚠️ Critical Warnings

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

## 🤝 Contributing

1. ⭐ Star this repo
2. 🍴 Fork & create a branch
3. 📝 Follow existing rule format
4. 🧪 Test with real projects
5. 🔄 Submit a PR

---

## 📚 References

- [MiniMax M2.1 Docs](https://platform.minimax.io/docs/guides/text-ai-coding-tools)
- [MiniMax Coding Plan MCP](https://github.com/MiniMax-AI/MiniMax-Coding-Plan-MCP)
- [Cursor Rules Docs](https://cursor.com/docs/context/rules)
- [Context7 MCP](https://github.com/upstash/context7-mcp)

---

<div align="center">

**Made with ❤️ by [Aris Setiawan](https://github.com/madebyaris)**

*Rules optimized for production-quality code generation*

</div>
