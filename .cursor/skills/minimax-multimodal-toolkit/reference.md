# MiniMax Multimodal Toolkit Reference

Use this file only when the task needs deeper routing, implementation detail, or output discipline beyond `SKILL.md`.

## Route Details

### 1. Direct Asset Generation

Use this route when the user explicitly wants an image or other single artifact and the current runtime already exposes a direct generation tool.

Prefer this when:

- the user asks for a one-off asset
- no reusable app integration is required
- the output only needs to exist, not become part of a coded pipeline

Do not force a MiniMax API implementation when a direct tool already satisfies the request.

### 2. MiniMax API Integration

Use this route when:

- the user explicitly mentions MiniMax
- the product needs image, video, TTS, voice, or music generation inside application code
- the user wants reproducible local scripts or API examples
- direct tools cannot satisfy the requested medium

Before implementing:

1. check the current docs or platform references when version-sensitive
2. inspect existing env handling in the repo
3. identify the smallest successful request the integration can prove

### 3. Media Processing

Use this route when generated or user-provided files need:

- format conversion
- concatenation
- trimming
- frame extraction
- audio extraction
- normalization

Prefer local, deterministic tooling over re-generating media.

## Output Discipline

Use a predictable project-local output directory such as:

```text
minimax-output/
  images/
  video/
  audio/
  tmp/
```

Rules:

- create the output directory before generation or processing
- keep temp outputs under `tmp/`
- name files descriptively with a timestamp or task slug
- do not write generated artifacts into the skill directory

## Auth and Configuration

When MiniMax API access is required:

- read credentials from environment variables
- do not paste secrets into code, logs, or chat
- if host or key configuration is missing, stop and ask only for that missing setup

Common configuration shape:

```text
MINIMAX_API_KEY=...
MINIMAX_API_HOST=...
```

If the current docs or environment use different names, follow the current authoritative source rather than this example.

## Verification Patterns

### Generated asset

Verify:

- the tool returned a concrete artifact, or
- the file exists at the expected path

### Media processing

Verify:

- output file exists
- output extension and container match the request
- duration or dimensions are reasonable for the requested task when easy to check

### App integration

Verify:

- one focused request succeeds
- the returned artifact URL, bytes, or metadata are wired into the app correctly
- UI claims are checked at the user surface

## Prompt and Request Shaping

When helping the user craft media requests:

- ask for medium, tone, format, and length only if they materially affect the result
- keep prompts concrete: subject, composition, style, pacing, voice, or mood
- avoid vague defaults such as "make it nice" without extracting one or two meaningful constraints

## Anti-Patterns

- building a whole media subsystem before proving one request
- hardcoding keys in examples
- claiming generated output without checking the artifact
- inventing local scripts that the repo does not contain
- using API integration when a direct generation tool is the simpler honest path
