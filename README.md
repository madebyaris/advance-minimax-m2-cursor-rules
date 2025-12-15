<div align="center">

# 🚀 Advanced MiniMax M2 Cursor Rules

[![Stars](https://img.shields.io/github/stars/madebyaris/advance-minimax-m2-cursor-rules?style=flat-square)](https://github.com/madebyaris/advance-minimax-m2-cursor-rules/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Cursor 2.2](https://img.shields.io/badge/Cursor-2.2-blue?style=flat-square)](https://cursor.com)
[![MiniMax M2](https://img.shields.io/badge/MiniMax-M2-purple?style=flat-square)](https://platform.minimax.io)

**Agentic-first Cursor rules that transform simple prompts into production-ready code**

[Quick Start](#-quick-start) • [Features](#-features) • [Rules](#-rules) • [Contributing](#-contributing)

</div>

---

## ✨ Features

- **🧠 Agentic Workflow** — Plan → Clarify → Reason → Act → Reflect
- **❓ Clarify-First** — AI asks targeted questions before coding
- **💭 Preserved Thinking** — Maintains reasoning context across conversations
- **🛠️ Full Cursor 2.2 Support** — All tools documented and optimized
- **🔍 MiniMax MCP** — `web_search` + `understand_image` integration
- **🌐 Multi-Language** — Web, Python, Rust, Go, Swift, Flutter, DevOps

---

## 🚀 Quick Start

### 1. Clone & Copy

```bash
git clone https://github.com/madebyaris/advance-minimax-m2-cursor-rules.git
cp -r advance-minimax-m2-cursor-rules/.cursor/rules/ your-project/.cursor/rules/
```

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

## 📁 Rules

### Core (Always Active)

| Rule | Purpose |
|------|---------|
| `minimax-m2-core.mdc` | Agentic behavior & thinking preservation |
| `cursor-tools-mastery.mdc` | Cursor 2.2 tools reference |
| `clarify-first-prompting.mdc` | Ambiguity detection & questions |
| `minimax-mcp-tools.mdc` | MiniMax MCP integration |
| `language-agnostic.mdc` | SOLID, patterns, clean code |

### Language-Specific (Auto-Activate)

| Rule | Files |
|------|-------|
| `web-development.mdc` | `*.js`, `*.ts`, `*.tsx`, `*.vue` |
| `python-development.mdc` | `*.py`, `requirements.txt` |
| `rust-development.mdc` | `*.rs`, `Cargo.toml` |
| `go-development.mdc` | `*.go`, `go.mod` |
| `swift-development.mdc` | `*.swift` |
| `flutter-development.mdc` | `*.dart`, `pubspec.yaml` |
| `devops-infrastructure.mdc` | `Dockerfile`, `*.tf`, `*.yaml` |

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

## 🤝 Contributing

1. ⭐ Star this repo
2. 🍴 Fork & create a branch
3. 📝 Follow existing rule format
4. 🔄 Submit a PR

---

## 📚 References

- [MiniMax M2 Docs](https://platform.minimax.io/docs/guides/text-ai-coding-tools)
- [MiniMax Coding Plan MCP](https://github.com/MiniMax-AI/MiniMax-Coding-Plan-MCP)
- [Cursor Rules Docs](https://cursor.com/docs/context/rules)

---

<div align="center">

**Made with ❤️ by [Aris Setiawan](https://github.com/madebyaris)**

</div>
