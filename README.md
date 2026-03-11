<div align="center">

# MiniMax M2.5 Cursor Rules

[![Stars](https://img.shields.io/github/stars/madebyaris/advance-minimax-m2-cursor-rules?style=flat-square)](https://github.com/madebyaris/advance-minimax-m2-cursor-rules/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Cursor 2.6](https://img.shields.io/badge/Tested-Cursor%202.6-blue?style=flat-square)](https://cursor.com/changelog)
[![MiniMax M2.5](https://img.shields.io/badge/MiniMax-M2.5-purple?style=flat-square)](https://platform.minimax.io)
[![Any Model](https://img.shields.io/badge/Compatible-Any%20Model-green?style=flat-square)](#model-compatibility)

**MiniMax M2.5 agentic-first Cursor rules for grounded, verified code generation**

*Built for **MiniMax M2.5**, refreshed for **Cursor 2.6**, and designed to work with any model Cursor supports.*

[Quick Start](#-quick-start) | [Model Compatibility](#-model-compatibility) | [Rules](#-rules-subagents-and-skills) | [AGENTS.md](#-agentsmd-for-other-ides--clis) | [Contributing](#-contributing)

</div>

---

## Features

- **Action-first protocol**: inspect with tools before writing prose.
- **Tool-surface aware**: updated for modern Cursor direct tools such as `ReadFile`, `rg`, `ApplyPatch`, `Subagent`, direct browser tools, and direct MCP/plugin tools.
- **Model-agnostic**: designed for MiniMax, Claude, GPT, Gemini, Codex, and other Cursor-supported models.
- **Opus 4.6-style behavior**: adaptive effort, adversarial self-review, strategic laziness, and intellectual honesty.
- **No hardcoded versions**: package and framework versions are verified with current-date web search.
- **Read-before-edit discipline**: durable workflow even as Cursor changes its exact edit primitives.
- **Subagents, skills, and rules**: clearer separation between always-on behavior, reusable workflows, and specialist agents.
- **Portable fallback**: `AGENTS.md` carries the same behavior in non-Cursor environments.

---

## Model Compatibility

These rules are built for **MiniMax M2.5** inside Cursor, but they are intentionally written to survive model changes and runtime changes.

### Core idea

Cursor injects instructions, tool definitions, and context for supported models. The exact transport varies, but the important behavior is stable:

- follow the tool schema shown in the prompt
- use tools instead of guessing
- keep runtime-specific details in requestable rules
- keep always-on guidance short and durable

### Common failure modes these rules target

1. Writing explanations instead of using tools.
2. Guessing file contents instead of reading them.
3. Hardcoding stale package versions.
4. Over-planning simple work.
5. Treating verification as optional.

---

## Philosophy

These rules are built around one simple principle:

> **Act first, verify always.**

That means:

- read before you edit
- verify before you claim completion
- scale effort to task complexity
- say when you are uncertain
- prefer the smallest correct change

---

## Quick Start

### For Cursor Users

```bash
git clone https://github.com/madebyaris/advance-minimax-m2-cursor-rules.git
cp -r advance-minimax-m2-cursor-rules/.cursor your-project/.cursor
```

The core rule, `.cursor/rules/minimax-m2-core.mdc`, is `alwaysApply: true`. The rest of the rule set is loaded only when needed.

### For Other IDEs and CLIs

Copy [`AGENTS.md`](AGENTS.md) into your repo root or use it as a system prompt / instructions file.

---

## Rules, Subagents, and Skills

### Core Rule

| File | Purpose |
|------|---------|
| `.cursor/rules/minimax-m2-core.mdc` | Minimal always-on behavior: action-first execution, adaptive effort, read-before-edit, verification-first mindset |

### Requestable Runtime Rules

| File | Purpose |
|------|---------|
| `.cursor/rules/cursor-tools-mastery.mdc` | Current Cursor 2.6 tool categories and workflows |
| `.cursor/rules/cursor-agent-orchestration.mdc` | Subagents, decomposition, plans, and parallel workflows |
| `.cursor/rules/minimax-m2-verification.mdc` | Shell, browser, and verifier-based validation |
| `.cursor/rules/minimax-mcp-tools.mdc` | Web search, MCP, plugin tools, and resource-discovery guidance |
| `.cursor/rules/model-compatibility.mdc` | Prompt architecture and model-safe tool discipline |
| `.cursor/rules/clarify-first-prompting.mdc` | Ask only when the decision is a real fork |

### Custom Agents

| File | Purpose |
|------|---------|
| `.cursor/agents/verifier.md` | Skeptical validation after implementation |
| `.cursor/agents/debugger.md` | Root-cause analysis for errors and failures |

### Skills

Project skills live in `.cursor/skills/` and should be used for reusable procedures, not for always-on behavior.

---

## Cursor 2.6 Notes

This repo has been refreshed against Cursor 2.6-era behavior and tooling.

### What changed in this refresh

- stale 2.5 tool names were removed from the core and runtime docs
- old wrapper patterns like `call_mcp_tool(...)` were replaced with direct-tool guidance
- `Task(...)` guidance was replaced with `Subagent(...)`
- verification guidance now assumes shell, browser, and verifier-based checks rather than a dedicated lint-reader tool
- README and rule docs now distinguish durable behavior from volatile runtime details

### MCP Apps and Plugins

Cursor 2.6 added richer MCP App support and stronger plugin distribution patterns, including team/private marketplace workflows. This repo now treats plugin and MCP capabilities as direct tools when they are exposed in the prompt, rather than assuming older transport wrappers.

### Hooks

This repo includes `.cursor/hooks.json`, but no hooks are enabled by default. There is **not** a configured stop-hook loop out of the box.

---

## Optional MCP Setup

### MiniMax MCP

If you want MiniMax-backed external tools in addition to Cursor-native tooling, configure them in Cursor's MCP settings.

Example:

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

### Context7 MCP

Context7 remains a useful optional docs server when available, but the rules now treat it as optional and fall back cleanly to `WebSearch` and `WebFetch`.

---

## AGENTS.md For Other IDEs & CLIs

[`AGENTS.md`](AGENTS.md) is the portability layer for environments that do not understand Cursor rule files.

It carries:

- action-first behavior
- adaptive effort
- adversarial self-review
- version-checking discipline
- CLI-first setup guidance
- communication style guidance

Use it with Copilot, Codex, Claude in other IDEs, Cline, Aider, Continue, or any CLI coding assistant.

---

## Design Decisions

### Why only one always-apply rule?

Because large always-on rule payloads increase prompt overhead and reduce execution quality. The repo now keeps only the most durable behavior always active and pushes runtime-specific details into requestable rules.

### Why remove hardcoded tool names from the core rule?

Because Cursor's tool surface evolves. Durable guidance should say **read before edit** and **verify after changes**, not freeze a specific edit API forever.

### Why keep version checks dynamic?

Because rules that hardcode framework versions decay quickly. Current-date web verification ages much better.

---

## Critical Warnings

### Never manually create these files

| File Type | Use Instead |
|-----------|-------------|
| `*.xcodeproj/*` | Xcode |
| `project.pbxproj` | Xcode only |
| `*.xcworkspace/*` | Xcode |
| complex `.sln` / IDE metadata | the relevant IDE |

### Always verify after meaningful actions

Examples:

```bash
npm run build
npm test
flutter analyze
cargo check
go build ./...
pytest
```

Use the smallest useful verification step first, then expand when the task risk warrants it.

---

## Contributing

1. Fork the repo.
2. Make focused changes.
3. Prefer durable behavior in always-on rules and volatile details in requestable rules.
4. Test with real projects and more than one model when possible.
5. Submit a PR.

---

## References

- [Cursor Changelog](https://cursor.com/changelog)
- [Cursor Rules Docs](https://cursor.com/docs/context/rules)
- [MiniMax Platform](https://platform.minimax.io)
- [MiniMax Coding Plan MCP](https://github.com/MiniMax-AI/MiniMax-Coding-Plan-MCP)
- [Claude Opus 4.6 Announcement](https://anthropic.com/news/claude-opus-4-6)
- [Context7 MCP](https://github.com/upstash/context7-mcp)

---

<div align="center">

**Made with care by [Aris Setiawan](https://github.com/madebyaris) at [MiniMax](https://minimax.io)**

*MiniMax M2.5 rules for production-quality code generation with durable agentic behavior*

</div>
