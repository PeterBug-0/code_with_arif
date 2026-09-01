# Contributing Guide

This repository is used to track backend development learning, assignments, and code reviews.

The goal is to practice both backend development and a real-world Git collaboration workflow.

## Branch Rules

Do not push directly to `main`.

For every assignment or task:

1. Make sure your local `main` branch is up to date.

```bash
git checkout main
git pull origin main
```

2. Create a new branch for the assignment.

```bash
git checkout -b assignment/task-name
```

Examples:

```bash
git checkout -b assignment/node-basics
git checkout -b assignment/rest-api
git checkout -b assignment/express-routing
```

3. Complete the assignment on that branch.

4. Stage your changes.

```bash
git add .
```

5. Commit your work with a meaningful message.

```bash
git commit -m "Complete Node.js basics assignment"
```

Avoid vague commit messages such as:

```text
update
changes
work
done
```

Prefer descriptive messages such as:

```text
Add user registration endpoint
Implement request validation
Handle missing users with 404 response
Fix authentication middleware
```

6. Push your branch to GitHub.

```bash
git push -u origin assignment/task-name
```

7. Open a Pull Request from your branch into `main`.

Example:

```text
assignment/rest-api → main
```

Do not merge your own Pull Request.

The mentor will review the code and either:

* approve and merge it, or
* request changes.

## Responding to Code Review

If changes are requested, make the corrections on the same branch.

Then:

```bash
git add .
git commit -m "Address code review feedback"
git push
```

The Pull Request will automatically update with the new commit.

Do not create another Pull Request for the same assignment.

## Before Submitting an Assignment

Make sure:

* The code runs successfully.
* The assignment requirements are completed.
* There are no unnecessary debug logs.
* Variable and function names are clear.
* The code is reasonably formatted.
* Any required dependencies are documented.
* Sensitive information such as passwords, API keys, or `.env` files are not committed.
* You have tested the main functionality yourself.

## Pull Request Description

Every Pull Request should include a short description using this format:

```text
What I built:
Briefly explain what you implemented.

What I learned:
Mention the main concepts you practiced.

Challenges:
Mention anything you found difficult.

How to test:
Explain how the reviewer can run or test the assignment.
```

Example:

```text
What I built:
A basic Express API for managing users.

What I learned:
Express routing, HTTP methods, status codes, and middleware.

Challenges:
I initially struggled with passing control between middleware functions.

How to test:
Run npm install, then npm run dev.
Test GET /users and POST /users.
```

## After a Pull Request Is Merged

Once the mentor merges the Pull Request:

```bash
git checkout main
git pull origin main
```

You can then delete the old local branch:

```bash
git branch -d assignment/task-name
```

For the next assignment, create a fresh branch from the updated `main`.

## Standard Workflow

```text
main
  ↓
create assignment branch
  ↓
write code
  ↓
commit changes
  ↓
push branch
  ↓
open Pull Request
  ↓
code review
  ↓
make corrections if required
  ↓
approval
  ↓
merge into main
```

## Important Rule

The `main` branch represents completed and reviewed work.

Always use a separate branch for assignments and submit your work through a Pull Request.
