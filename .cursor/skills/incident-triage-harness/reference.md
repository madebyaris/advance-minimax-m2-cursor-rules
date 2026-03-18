# Incident Triage Harness Reference

This file supports `SKILL.md` with deeper examples, checklists, and prompt patterns.

## Typical Failure Shapes

### 1. Deployment Regression

Signals:

- incident starts right after deploy
- one route or job fails consistently
- stack traces point into recently changed code

Good next checks:

- inspect deploy diff
- compare failing and previous behavior
- verify whether config or env assumptions changed

### 2. Missing Migration Or Schema Drift

Signals:

- queries fail after deploy
- one table or index is suddenly slow or missing
- app code expects fields or indexes not present in the DB

Good next checks:

- verify migration history
- inspect schema or index presence
- confirm whether app code and DB version diverged

### 3. Integration Breakage

Signals:

- upstream or downstream API errors
- auth tokens fail unexpectedly
- only one external dependency path is broken

Good next checks:

- inspect recent dependency or config changes
- compare successful vs failing requests
- verify credentials, base URLs, or rate-limit behavior

## Prompt Pattern

Use this shape when asking a subagent or structuring your own reasoning:

```text
Incident:
[short symptom summary]

Known evidence:
- [log or metric]
- [deployment clue]
- [user-visible impact]

Return:
1. top 2-3 hypotheses
2. the strongest next check for each
3. the smallest safe mitigation if impact is ongoing
4. what would prove the root cause
```

## Safe Mitigation Checklist

Before recommending mitigation:

- does it reduce harm without widening scope?
- can it be rolled back quickly?
- does it avoid destructive data changes?
- can you verify it with the current runtime?

## Reporting Template

```text
Symptom:
Blast radius:
Current best hypothesis:
Evidence:
Mitigation:
Verification:
Remaining unknowns:
```

## Anti-Patterns

- editing code before confirming the symptom
- broad refactors during an active incident
- treating one suspicious log line as proof
- claiming a fix when only a mitigation was verified
- hiding uncertainty when the root cause is still incomplete
