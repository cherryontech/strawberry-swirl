# 🤝 Contributing

Please take a moment to read this guide before making contributions. For installation instructions, see our [README.md](README.md) file.

## 🧩 How to Contribute

1. **Pick a Story Card** - Choose a Jira story card to work on.
2. **Branch off `main`** - Create a new branch for your work.
3. **Keep it clean** - Run both `npm run lint` and `npm run format` before committing.
4. **Open a Pull Request (PR)** - Describe your changes clearly and link any related story cards using the PR Template.

## 🔄 Pull Request Process

1. Make sure your branch:
    - Passes lint checks (`npm run lint`)
    - Is formatted with Prettier (`npm run format`)
    - Builds successfully with no errors (`npm run build`)
2. Update documentation (e.g. `README.md`) if your changes affect affect setup, usage, or behavior.
3. At least **2 developers** must review and approve your PR before merging..
4. Once approved, you may merge your PR into `main`.

## 🧪 How to Test Your Contribution

Every pull request automatically triggers a **Netlify Deploy Preview**, which lets you test your changes in a live environment before merging.

To test your contribution:

1. **Open a Pull Request (PR)** with your changes.
2. Once the Netlify build completes (this may take a few minutes), go to your PR page on GitHub.
3. In the **Checks** section, find: `netlify/strawberry-swirl/deploy-preview — Deploy Preview ready!`
4. Click **Details** to open the live preview link.
5. Navigate to the relevant page (or area you modified) and verify your changes appear and function as expected.
