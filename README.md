<div align="center">

# MiniMax M2.5 Cursor Rules

[![Stars](https://img.shields.io/github/stars/madebyaris/advance-minimax-m2-cursor-rules?style=flat-square)](https://github.com/madebyaris/advance-minimax-m2-cursor-rules/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Cursor 2.4+](https://img.shields.io/badge/Cursor-2.4%2B-blue?style=flat-square)](https://cursor.com)
[![MiniMax M2.5](https://img.shields.io/badge/MiniMax-M2.5-purple?style=flat-square)](https://platform.minimax.io)
[![Any Model](https://img.shields.io/badge/Compatible-Any%20Model-green?style=flat-square)](#model-compatibility)

**MiniMax M2.5 agentic-first Cursor rules that transform simple prompts into production-ready, verified code**

*Built for **MiniMax M2.5**, compatible with **any model** — Claude, GPT, Gemini, Codex. Emulates **Opus 4.6 Max** behavioral patterns.*

[Quick Start](#-quick-start) | [Model Compatibility](#-model-compatibility) | [AGENTS.md](#-agentsmd-for-other-ides--clis) | [Features](#-features) | [Rules](#-rules) | [Contributing](#-contributing)

</div>

---

## Features

- **Action-First Protocol** — Tools before text. Read before edit. Verify before deliver. No philosophical essays.
- **Model-Agnostic** — Works with Claude, GPT, MiniMax, Gemini, Codex, or any model Cursor supports
- **Opus 4.6 Max Reasoning** — Adaptive effort, adversarial self-review, intellectual honesty, strategic laziness
- **Adaptive Thinking** — Scales reasoning depth to problem complexity (Instant / Light / Deep / Exhaustive)
- **StrReplace Safety** — Detailed protocol preventing the #1 editing failure for non-native models
- **No Hardcoded Versions** — Always verified via WebSearch at query time, never stale
- **Native Subagents (2.4)** — Custom subagents for validation, debugging, and specialized work
- **Agent Skills (2.4)** — Portable knowledge packages with scripts and progressive loading
- **CLI-First Development** — Always use framework CLIs, never create config files manually
- **Intellectual Honesty** — Three-tier certainty (Certain / Likely / Uncertain) instead of hallucinated confidence
- **Strategic Laziness** — Minimum correct change, no over-engineering
- **Compaction** — Context compression for sustained productivity over long sessions
- **Full Cursor 2.4 Support** — Subagents, skills, hooks, and all tools documented
- **Multi-Language** — Web, Python, Rust, Go, Swift, Flutter, DevOps
- **Syntax Trap Prevention** — Common mistakes documented per language
- **AGENTS.md** — Portable version for other IDEs and CLI tools

---

## Model Compatibility

These rules are built for **MiniMax M2.5** harnessed to Cursor, but designed to work with **any model** — Claude, GPT, Gemini, Codex.

### The Problem

When Cursor uses non-Anthropic models (MiniMax M2.5, GPT, Gemini, etc.), the system prompt and tool definitions are delivered differently — as concatenated text rather than native API parameters. This causes non-native models to:

1. **Generate text instead of using tools** — the #1 failure mode
2. **Fail StrReplace** — by guessing at file contents instead of reading first
3. **Hallucinate versions** — instead of verifying via WebSearch
4. **Over-plan** — creating lengthy plans instead of acting

### How These Rules Fix It

| Problem | Solution |
|---------|----------|
| Text-first behavior | **First Action Rule** at the top of core rules — "tool calls before text output" |
| StrReplace failures | **StrReplace Safety Protocol** — mandatory Read-before-Edit workflow |
| Version hallucination | **No hardcoded versions** — always verify via WebSearch with current date |
| Context overload | Only 1 rule is `alwaysApply` (~250 lines). Everything else loads on-demand |
| Model-specific quirks | Dedicated `model-compatibility.mdc` explaining Cursor's prompt architecture |

### Supported Models

| Model | Status | Notes |
|-------|--------|-------|
| **MiniMax M2.5** | **Primary** | Built and optimized for this model |
| MiniMax M2.1 | Tested | Full compatibility |
| Claude (Opus, Sonnet) | Native | Best tool integration — Cursor's native model |
| GPT-4o / GPT-5.x | Compatible | Follow model-compatibility rules |
| Gemini | Compatible | Follow model-compatibility rules |
| Codex | Compatible | Follow model-compatibility rules |

---

## Philosophy

These rules make AI code generation **actually work** by emulating how the best coding models think.

### Opus 4.6 Max Mode

Based on [Claude Opus 4.6](https://anthropic.com/news/claude-opus-4-6) behavioral patterns:

> "The model brings more focus to the most challenging parts of a task without being told to, moves quickly through the more straightforward parts, handles ambiguous problems with better judgment, and stays productive over longer sessions."

Key behaviors:

- **Action-first**: Use tools BEFORE generating text. Read files before analyzing them.
- **Adaptive effort**: A typo fix gets instant treatment. An architecture redesign gets exhaustive analysis.
- **Self-critical**: Before presenting a solution, mentally attack it — edge cases, assumptions, simpler alternatives.
- **Intellectually honest**: "I'm not certain about this API — let me check" instead of hallucinating confidence.
- **Strategically lazy**: Make the minimum correct change. Don't refactor what wasn't asked for.
- **Verification-first**: "Done" means verified (builds, lints, tests), not just implemented.

### The Golden Rule: Act First, Verify Always

```
1. CALIBRATE — How complex is this? Match effort to complexity.
2. READ      — What exists? Use tools to check, not training data.
3. ACT       — Make the change using proper tools.
4. REVIEW    — What would break? What did I miss?
5. VALIDATE  — Build, lint, test. Did it actually work?
```

### What This Prevents

| Bad Practice | What Rules Enforce |
|-------------|-------------------|
| Writing essays instead of using tools | First Action Rule — tool calls before text |
| Guessing at file contents | StrReplace Safety — always Read before Edit |
| Hardcoding package versions | Version protocol — always WebSearch with current date |
| Manually creating `package.json` | Use `npm init` or `npx create-next-app` |
| Manually creating `.xcodeproj` | **NEVER** — use Xcode only |
| Over-engineering simple fixes | Adaptive effort levels prevent this |
| Hallucinating API knowledge | Intellectual honesty protocol |

---

## Quick Start

### For Cursor Users

```bash
git clone https://github.com/madebyaris/advance-minimax-m2-cursor-rules.git
cp -r advance-minimax-m2-cursor-rules/.cursor your-project/.cursor
```

The core rule (`minimax-m2-core.mdc`) is `alwaysApply: true` — it activates immediately. All other rules load on-demand based on file types or agent request.

### For Other IDEs/CLIs

Copy [`AGENTS.md`](AGENTS.md) to your repo root or use as system prompt. See [AGENTS.md section](#-agentsmd-for-other-ides--clis) for details.

### Optional: MiniMax MCP

Add to Cursor Settings > MCP for web search and image analysis:

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

---

## AGENTS.md (For Other IDEs & CLIs)

Not using Cursor? The [`AGENTS.md`](AGENTS.md) file contains the same Opus 4.6 Max patterns in a portable, IDE-agnostic, model-agnostic format.

### Use With

- **OpenAI Codex / ChatGPT** — Copy as custom instructions
- **GitHub Copilot Chat** — Add to system prompt
- **Claude** (in other IDEs) — Use as context
- **Cline / Aider / Continue** — Place in repo root
- **Any CLI coding assistant** — Include in prompts

### What's Included

- Action-first protocol (tools before text)
- Model compatibility guidance
- Opus 4.6 Max behavioral patterns (adaptive effort, self-review, honesty)
- Effort-scaled workflow (Instant / Light / Deep / Exhaustive)
- Adversarial self-review protocol
- CLI-first development patterns
- Version checking protocol (no hardcoded versions)
- Self-correction loop for error recovery
- EPIC-based task decomposition
- Code reading strategy
- Communication style guidelines

---

## Rules, Subagents, and Skills

### Core Rule (Always Active)

| Rule | Purpose | Lines |
|------|---------|-------|
| `minimax-m2-core.mdc` | Action-first protocol, StrReplace safety, model compatibility, adaptive effort, adversarial self-review | ~250 |

> Only **one** rule is `alwaysApply: true` — keeping context overhead minimal for all models.

### Custom Subagents (`.cursor/agents/`)

| Subagent | Purpose | Invocation |
|----------|---------|------------|
| `verifier.md` | Validates completed work, catches incomplete implementations | `/verifier` |
| `debugger.md` | Deep error investigation, root cause analysis | `/debugger` |

### Agent-Requestable Rules (Loaded on Demand)

These rules are **not always loaded** — the agent requests them when relevant:

| Rule | Purpose | Triggered By |
|------|---------|--------------|
| `cursor-agent-orchestration.mdc` | Subagents, skills, parallel workflows, EPIC todos, hooks | Complex multi-step tasks |
| `minimax-m2-verification.mdc` | StrReplace safety, pre/post verification protocols | Code generation tasks |
| `minimax-mcp-tools.mdc` | MCP integration + version checking | Web search, image analysis |
| `cursor-tools-mastery.mdc` | Cursor 2.4 tools reference | Complex tool usage |
| `clarify-first-prompting.mdc` | Check first, then ask questions | Ambiguous requests |
| `model-compatibility.mdc` | Non-Claude model guidance, prompt architecture | Non-native model issues |

### Language-Specific (Auto-Activate by Glob)

| Rule | Files | Key Features |
|------|-------|--------------|
| `web-development.mdc` | `*.js`, `*.ts`, `*.tsx`, `*.vue` | CLI-first setup, Chart.js containers |
| `python-development.mdc` | `*.py`, `requirements.txt` | venv requirement, uv/pip, common traps |
| `rust-development.mdc` | `*.rs`, `Cargo.toml` | cargo new/add, ownership traps |
| `go-development.mdc` | `*.go`, `go.mod` | go mod init, error handling patterns |
| `swift-development.mdc` | `*.swift` | **Xcode project warning**, Swift Package CLI |
| `flutter-development.mdc` | `*.dart`, `pubspec.yaml` | flutter create/pub add, dispose patterns |
| `mobile-cross-platform.mdc` | Cross-platform projects | Framework CLIs, platform differences |
| `devops-infrastructure.mdc` | `Dockerfile`, `*.tf`, `*.yaml` | Dry-run validation, version pinning |
| `3d-graphics.mdc` | 3D/WebGL projects | Three.js, React Three Fiber, performance |
| `design-systems.mdc` | UI/design projects | Design tokens, shadcn/ui, Tailwind |

---

## Key Design Decisions

### Why Only 1 Always-Apply Rule?

Previous versions had 2 `alwaysApply` rules totaling ~1500 lines. Non-native models (MiniMax, GPT) struggled with this context overhead — they spent capacity parsing instructions instead of executing tasks.

Now: **1 rule, ~250 lines**, containing only the most critical behaviors. Everything else loads on-demand.

### Why No Hardcoded Versions?

M2.5's previous rules hardcoded "Next.js 16.1.6, React 19.2.4, Tailwind 4.1.18." These go stale in weeks. The new approach:

```
BEFORE (stale in weeks):
  "Current: Next.js 16.1.6"

AFTER (always accurate):
  WebSearch(search_term="Next.js latest stable [current month] [current year]")
```

### Why the StrReplace Safety Protocol?

The #1 editing failure for non-native models is calling `StrReplace` without reading the file first, causing `old_string` mismatches. The protocol is simple:

```
1. Read(path="file.ts")           ← always read first
2. Copy exact text from output    ← don't guess
3. StrReplace(old_string=...)     ← exact match guaranteed
4. ReadLints(paths=["file.ts"])   ← verify
```

### Why the First Action Rule?

Non-native models default to generating text instead of using tools. The First Action Rule at the top of the core rule file addresses this:

> "When you receive a user message, ACT FIRST. Tool calls before text output. NEVER write a paragraph explaining what you'll do — just do it."

---

## Cursor 2.4 Features

> **Version note**: These rules target Cursor 2.4+. If using a newer Cursor version, verify feature availability (subagents, skills, hooks) via Cursor docs — APIs may evolve.

### Adaptive Thinking
AI calibrates effort to task complexity:
- **Instant**: Fix a typo — just do it, lint, done
- **Light**: Add a function — brief scan, implement, verify
- **Deep**: Build a feature — investigate, plan, implement, self-review, verify
- **Exhaustive**: Redesign architecture — full investigation, EPIC todos, incremental implementation

### Adversarial Self-Review
Before presenting solutions, the AI attacks its own work:
- What would break this?
- What edge case am I missing?
- Is there a simpler way?
- Am I solving the right problem?

### Native Subagents
Cursor 2.4 native subagents with isolated context windows:
- **Built-in**: `explore` (codebase search), `bash` (shell commands), `browser` (web automation)
- **Custom**: `verifier` and `debugger` in `.cursor/agents/`

### Agent Skills System
Portable knowledge packages:
- Location: `.cursor/skills/<name>/SKILL.md`
- Supports scripts, references, and assets
- Invoke with `/skill-name` or auto-discovery

### Cursor Hooks Integration
`.cursor/hooks.json` with `stop` hook for iterative improvement loops. Agent keeps working until verification goals are met.

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
4. Test with real projects — ideally with multiple models (Claude + one non-Claude)
5. Submit a PR

---

## References

- [MiniMax Platform](https://platform.minimax.io)
- [MiniMax Coding Plan MCP](https://github.com/MiniMax-AI/MiniMax-Coding-Plan-MCP)
- [Claude Opus 4.6 Announcement](https://anthropic.com/news/claude-opus-4-6)
- [Cursor Rules Docs](https://cursor.com/docs/context/rules)
- [Context7 MCP](https://github.com/upstash/context7-mcp)

---

<div align="center">

**Made with care by [Aris Setiawan](https://github.com/madebyaris) at [MiniMax](https://minimax.io)**

*MiniMax M2.5 rules for production-quality code generation with Opus 4.6 behavioral patterns*

</div>
