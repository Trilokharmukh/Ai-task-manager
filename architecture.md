# Architecture

## Overview

AI Task Manager is a small Next.js application.

## Application structure

src/
  app/
  components/
  lib/

## Responsibilities

### app/

Routes and pages.

### components/

Reusable UI components.

### lib/

Application logic and utilities.

## Data

The first version stores tasks in browser localStorage.

## Testing

Playwright is used for user-facing end-to-end tests.

## Rules

Components should not contain unrelated business logic.

Task operations should be kept in a reusable module.

## Future

The localStorage implementation may later be replaced
with a backend/database without changing the UI contract.