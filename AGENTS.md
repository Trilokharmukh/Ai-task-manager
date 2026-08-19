# AGENTS.md

## Project

AI Task Manager.

A simple task-management application built with Next.js,
TypeScript and Tailwind CSS.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Playwright

## Rules

- Use TypeScript.
- Do not introduce unnecessary dependencies.
- Keep components small and focused.
- Do not modify architecture without updating architecture.md.
- Every user-facing feature must have an end-to-end test.
- Run typecheck, lint and tests before declaring a task complete.
- Never mark a task complete without verification.

## Workflow

Before changing code:

1. Read this file.
2. Read architecture.md.
3. Read progress.md.
4. Read the relevant task from tasks.json.
5. Inspect existing implementation.

After changing code:

1. Run typecheck.
2. Run lint.
3. Run tests.
4. Run relevant Playwright tests.
5. Fix failures.
6. Update progress.md.
7. Update tasks.json.
8. Commit the change.

## Important

Do not claim that a feature works based only on reading the code.
Verify it.