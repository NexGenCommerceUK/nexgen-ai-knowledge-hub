# Apply Milestone 1

This patch is designed to be copied over the existing `nexgen-ai-knowledge-hub` working tree.

1. Create a branch:
   `git checkout -b feat/saas-foundation`
2. Copy the patch files into the repository root, overwriting matching files.
3. Delete the old `lib/openai.ts` because the adapter now lives at `lib/ai/openai.ts`.
4. Run `npm install` so `package-lock.json` is updated with Vitest.
5. Run `npm run typecheck`, `npm run test`, and `npm run build`.
6. Run `npm run dev` and exercise success + validation-error flows.
7. Commit and push the branch.
8. Open a pull request into `main` and merge only after CI is green.
