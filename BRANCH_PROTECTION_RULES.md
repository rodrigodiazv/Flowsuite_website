# Branch Protection Rules for Flowsuite Website

This document outlines the branch protection rules applied to the `main` branch of the `rodrigodiazv/Flowsuite_website` repository.

## Protection Rules

1. **Require pull request reviews before merging**  
   Minimum of 1 approval required before merging pull requests.

2. **Require status checks to pass**  
   Ensure all CI/CD status checks pass before merging.

3. **Require branches to be up to date before merging**  
   Branch must be up to date with `main` before merging.

4. **Restrict direct pushes to main branch**  
   Direct pushing to the `main` branch is restricted.

5. **Require signed commits**  
   All commits must be signed.

6. **Dismiss stale pull request approvals**  
   Approvals will be dismissed when new commits are pushed to the pull request.

7. **Restrict force pushes**  
   Force pushes are not allowed on the `main` branch.

## Implementation Date
This ruleset was implemented on **2026-04-09**.