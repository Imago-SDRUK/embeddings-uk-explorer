# 🌟 Contributing Guidelines

Thank you for your interest in contributing to this project! We welcome all kinds of contributions—code, documentation, ideas, and more. This guide will help you get started.

---

## 🚀 How to Contribute

1. **Fork this repository**  
   Click the **Fork** button at the top right of this page to create your own copy.

2. **Clone your fork**  
   Open your terminal and run:  
   ```bash
   git clone https://github.com/YOUR-USERNAME/Template.git
   cd Template
   ```

3. **Create a new branch**  
   Give your branch a descriptive name:  
   ```bash
   git checkout -b my-feature-branch
   ```

4. **Make your changes**  
   Add your code, documentation, or other contributions.

5. **Commit your changes**  
   ```bash
   git add .
   git commit -m "Describe your changes"
   ```

6. **Push to your fork**  
   ```bash
   git push origin my-feature-branch
   ```

7. **Open a Pull Request (PR)**  
   - Go to your fork on GitHub.
   - Click **Compare & pull request**.
   - Fill out the PR template and submit.

---

## 💡 Using Issue & PR Templates

- When reporting a bug or requesting a feature, please use the provided **issue templates** for clear and helpful reports.
- When submitting a pull request, fill out the **PR template** to describe your changes and link related issues.

---

## ✨ Acknowledging Contributors with All Contributors Bot

We celebrate all contributions! 🎉  
We use the [All Contributors Bot](https://allcontributors.org/) to recognize everyone’s work—code, docs, ideas, design, and more.

### How to Get Acknowledged

- After your PR is merged, comment on an issue or PR:
  ```
  @all-contributors please add @your-username for code, doc
  ```
  (Replace `@your-username` and the contribution types as appropriate.)

- The bot will open a PR to update the contributors table in the README.  
- Review and merge that PR to see your avatar and contributions appear!

### Contribution Types

See the [emoji key](https://allcontributors.org/docs/en/emoji-key) for all the ways you can be recognized.

---
## GitHub Access and Team Setup

We have completed the setup of GitHub access and team structures for the **IMAGO Project**.  
Each product team now has its own dedicated GitHub team, and all members have been assigned accordingly.

🔗 **Teams Directory:** [IMAGO GitHub Teams](https://github.com/orgs/Imago-SDRUK/teams)

---

## Team and Repository Structure
- Each **product team** has a corresponding **private repository**.  
- Teams are responsible for maintaining their own repositories.  
- When a repository is ready to be shared publicly, it will be made available for everyone.  

---

## Access Policy
- All organization members have access to both **public** and **private** repositories within the IMAGO Project.
---

## Offboarding Process
When a member leaves the **IMAGO Project**:
- Their membership will be converted to an **Outside Collaborator**.  
- They will retain access only to the **repositories (public or private)** they contributed to.  
- They will no longer be listed as a member of the organization.

---

## 🐛 Reporting Issues

- **Search** existing issues before opening a new one.
- Use the **bug** or **feature request** templates.
- Provide a clear title, description, and steps to reproduce (if applicable).
- Screenshots and error messages are helpful!

---

## 🔄 Resolving Merge Conflicts

Sometimes, your PR may have conflicts with the main branch. To resolve:

1. Fetch the latest changes:
   ```bash
   git checkout main
   git pull origin main
   git checkout my-feature-branch
   git merge main
   ```
2. Fix any conflicts in your files (look for `<<<<<<<`, `=======`, `>>>>>>>` markers).
3. Add and commit the resolved files:
   ```bash
   git add .
   git commit -m "Resolve merge conflicts"
   ```
4. Push your branch again:
   ```bash
   git push origin my-feature-branch
   ```

---

## 💬 Code of Conduct

Be respectful and considerate in all interactions.  
See our [Code of Conduct](CODE_OF_CONDUCT.md) for details.

---
  
We appreciate your contributions and support in building a vibrant community around this project. If you have any questions, feel free to reach out via issues or discussions.
