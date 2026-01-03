#!/bin/bash
# Post-edit verification hook
# This script runs after the AI agent edits a file

# Read the JSON input from stdin
read -r INPUT

# Extract file path from JSON (requires jq)
FILE_PATH=$(echo "$INPUT" | jq -r '.file_path // empty')

if [ -z "$FILE_PATH" ]; then
  echo '{"status": "skip", "message": "No file path provided"}'
  exit 0
fi

# Get file extension
EXT="${FILE_PATH##*.}"

# Run appropriate linter based on file type
case "$EXT" in
  ts|tsx|js|jsx)
    if command -v npx &> /dev/null && [ -f "package.json" ]; then
      npx eslint --fix "$FILE_PATH" 2>&1 || true
      echo '{"status": "success", "message": "ESLint completed"}'
    else
      echo '{"status": "skip", "message": "ESLint not available"}'
    fi
    ;;
  py)
    if command -v ruff &> /dev/null; then
      ruff check --fix "$FILE_PATH" 2>&1 || true
      echo '{"status": "success", "message": "Ruff completed"}'
    elif command -v black &> /dev/null; then
      black "$FILE_PATH" 2>&1 || true
      echo '{"status": "success", "message": "Black completed"}'
    else
      echo '{"status": "skip", "message": "Python linter not available"}'
    fi
    ;;
  go)
    if command -v gofmt &> /dev/null; then
      gofmt -w "$FILE_PATH" 2>&1 || true
      echo '{"status": "success", "message": "gofmt completed"}'
    else
      echo '{"status": "skip", "message": "gofmt not available"}'
    fi
    ;;
  rs)
    if command -v rustfmt &> /dev/null; then
      rustfmt "$FILE_PATH" 2>&1 || true
      echo '{"status": "success", "message": "rustfmt completed"}'
    else
      echo '{"status": "skip", "message": "rustfmt not available"}'
    fi
    ;;
  *)
    echo '{"status": "skip", "message": "No linter for this file type"}'
    ;;
esac
