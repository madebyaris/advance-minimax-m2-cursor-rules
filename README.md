<div align="center">

# 🚀 Advanced MiniMax M2.1 Cursor Rules

[![Stars](https://img.shields.io/github/stars/madebyaris/advance-minimax-m2-cursor-rules?style=flat-square)](https://github.com/madebyaris/advance-minimax-m2-cursor-rules/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Cursor 2.2](https://img.shields.io/badge/Cursor-2.2-blue?style=flat-square)](https://cursor.com)
[![MiniMax M2.1](https://img.shields.io/badge/MiniMax-M2.1-purple?style=flat-square)](https://platform.minimax.io)

**Agentic-first Cursor rules that transform simple prompts into production-ready, verified code**

[Quick Start](#-quick-start) • [Features](#-features) • [Rules](#-rules) • [Philosophy](#-philosophy) • [Contributing](#-contributing)

</div>

---

## ✨ Features

- **🧠 Agentic-First Workflow** — Verify → Plan → Act → Validate (like Opus 4.5)
- **✅ CLI-First Development** — Always use framework CLIs, never create config files manually
- **🔍 Version Verification** — Web search for current package versions before using
- **❓ Clarify-First Prompting** — AI checks context first, then asks targeted questions
- **💭 Preserved Thinking** — Maintains reasoning context across conversations
- **🛠️ Full Cursor 2.2 Support** — All tools documented and optimized
- **🔌 MiniMax MCP** — `web_search` + `understand_image` integration
- **🌐 Multi-Language** — Web, Python, Rust, Go, Swift, Flutter, DevOps
- **⚠️ Syntax Trap Prevention** — Common mistakes documented per language

---

## 🎯 Philosophy

These rules are designed to make AI code generation **actually work** by enforcing real development practices:

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
| `minimax-m2-core.mdc` | Agentic behavior, Opus 4.5-style thinking |
| `minimax-m2-verification.mdc` | Pre/post verification protocols |
| `minimax-mcp-tools.mdc` | MiniMax MCP + version checking |
| `cursor-tools-mastery.mdc` | Cursor 2.2 tools + "What NEVER to Do" |
| `clarify-first-prompting.mdc` | Check first, then ask questions |
| `language-agnostic.mdc` | SOLID, patterns, CLI-first principles |

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
