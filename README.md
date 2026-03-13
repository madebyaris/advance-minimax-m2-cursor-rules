<div align="center">

# MiniMax M2.5 Cursor Rules

[![Stars](https://img.shields.io/github/stars/madebyaris/advance-minimax-m2-cursor-rules?style=flat-square)](https://github.com/madebyaris/advance-minimax-m2-cursor-rules/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Cursor 2.6](https://img.shields.io/badge/Tested-Cursor%202.6-blue?style=flat-square)](https://cursor.com/changelog)
[![MiniMax M2.5](https://img.shields.io/badge/MiniMax-M2.5-purple?style=flat-square)](https://platform.minimax.io)
[![Any Model](https://img.shields.io/badge/Compatible-Any%20Model-green?style=flat-square)](#model-compatibility)

**MiniMax M2.5 rules that borrow strong GPT-5.4/Codex execution patterns**

*Built for **MiniMax M2.5**, refreshed for **Cursor 2.6**, and written to stay useful across model changes.*

[Quick Start](#quick-start) | [Architecture](#rule-architecture) | [Solver Loop](#solver-loop) | [AGENTSmd](#agentsmd-for-other-ides-and-clis)

</div>

---

## Why This Repo Exists

This repo keeps the identity and branding around **MiniMax M2.5**, but shifts the behavior toward what works well in modern coding agents:

- smaller always-on prompts
- stronger tool use
- clearer task framing
- better decomposition on hard problems
- more proportional verification

Instead of trying to make MiniMax "sound like" another provider, the rules teach it to copy the **visible external behavior** of a strong GPT/Codex-style coding agent.

## Model Compatibility

The rules are designed to survive model changes:

- the core rule stays short and durable
- runtime-specific guidance lives in requestable rules
- tool advice is written around whatever the current environment actually exposes
- version-sensitive claims are meant to be verified at runtime, not frozen into the rules

This makes the repo useful for MiniMax first, but still compatible with other Cursor-supported models.

## What Changed

This refactor removes most of the old prompt bloat:

- no more Opus-style identity anchoring in the core
- far less duplicated tool and verification doctrine
- no hardcoded month/year version examples in workflow rules
- no fake `<think>` or `<thinking>` scaffolding
- less "always run everything" language in domain-specific rules

## Solver Loop

The main thing this repo now tries to transfer into MiniMax M2.5 is a repeatable solver loop:

1. Define the outcome in operational terms.
2. Inspect the repo and runtime before deciding.
3. Find the spine: entry points, data flow, state boundaries, persistence, and user-visible behavior.
4. Build the smallest vertical slice that proves the feature works.
5. Verify at the surface where the user experiences the change.
6. Expand scope only after the core slice is working.

For app-building, this means:

- do not start with a pile of components
- resolve key flows and acceptance first
- prove one end-to-end slice early
- add polish and secondary features afterward

Example:

- For "build a task app", prioritize `create -> list -> complete -> persist -> reload`
- Delay filters, collaboration, settings, and animations until the core path works

## MoE Note

These rules do **not** assume you can directly control a model's internal MoE routing through persona text.

The controllable levers are:

- cleaner context
- better decomposition
- better tool routing
- better verification loops
- clearer definitions of done

If MiniMax performs better after a prompt rewrite, the likely reason is improved external problem structure, not magical direct access to hidden experts.

## Quick Start

### For Cursor

```bash
git clone https://github.com/madebyaris/advance-minimax-m2-cursor-rules.git
cp -r advance-minimax-m2-cursor-rules/.cursor your-project/.cursor
```

The always-on rule is `.cursor/rules/minimax-m2-core.mdc`. The rest of the rules are requestable and narrower by design.

### For Other IDEs and CLIs

Copy `AGENTS.md` into the repo root or use it as your agent instructions file.

## Rule Architecture

### Always-On Core

| File | Purpose |
|------|---------|
| `.cursor/rules/minimax-m2-core.mdc` | Minimal always-on behavior: tool-first execution, adaptive effort, solver-loop thinking, and verification-first delivery |

### Runtime Rules

| File | Purpose |
|------|---------|
| `.cursor/rules/model-compatibility.mdc` | Prompt hierarchy, tool discipline, and context control |
| `.cursor/rules/cursor-tools-mastery.mdc` | Current tool-selection patterns inside Cursor |
| `.cursor/rules/minimax-m2-verification.mdc` | Proportional verification guidance |
| `.cursor/rules/minimax-mcp-tools.mdc` | Current-doc, web, and MCP/plugin lookup guidance |
| `.cursor/rules/cursor-agent-orchestration.mdc` | Planning, subagents, and multi-step coordination |
| `.cursor/rules/clarify-first-prompting.mdc` | Ask only on real forks after inspecting first |

### Domain Rules

Language and platform rules now focus on domain-specific patterns rather than repeating the global workflow in every file.

## Design Principles

### Keep The Core Small

Large always-on prompts waste context and often reduce execution quality. The core rule should contain only durable behavior with high leverage.

### Prefer Capability Framing Over Persona Framing

Rules work better when they say:

- inspect first
- build the smallest proving slice
- verify before claiming success

They work worse when they spend lots of tokens on identity, status, or stylistic self-description.

### Trust The Current Environment

Cursor's tool surface changes. The rules should teach behavior that survives those changes instead of freezing old tool names or wrappers.

## AGENTS.md For Other IDEs and CLIs

`AGENTS.md` is the portable version of the core behavior. It is intentionally shorter now and focused on:

- action-first execution
- solver-loop thinking
- read-before-edit discipline
- proportional verification
- concise communication

## Warnings

Never manually fabricate:

- `.xcodeproj`
- `project.pbxproj`
- `.xcworkspace`
- complex `.sln` or similar IDE-managed project metadata

Use the relevant CLI or IDE instead, then let the agent work inside the real project.

## Contributing

1. Keep the always-on core small.
2. Put runtime details in requestable rules.
3. Add new rules only when they solve repeated mistakes.
4. Prefer concrete workflows over abstract philosophy.
5. Test the rules against real coding tasks, not just style preferences.

## References

- [Cursor Changelog](https://cursor.com/changelog)
- [Cursor Rules Docs](https://cursor.com/docs/context/rules)
- [Cursor Agent Best Practices](https://cursor.com/blog/agent-best-practices)
- [MiniMax Platform](https://platform.minimax.io)
- [OpenAI Codex Best Practices](https://developers.openai.com/codex/learn/best-practices/)
- [OpenAI Exec Plans](https://cookbook.openai.com/articles/codex_exec_plans)

---

<div align="center">

**Made with care by [Aris Setiawan](https://github.com/madebyaris) at [MiniMax](https://minimax.io)**

</div>
