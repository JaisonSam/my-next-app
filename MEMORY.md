# Project & Environment Memory

This document stores the persistent memory of this development setup, user preferences, and project infrastructure for future pair-programming sessions.

---

## 👤 User Profile & Communication Guidelines
* **Role**: Product Architect & Creative Director (Zero coding background / Non-developer).
* **Communication Style**:
  * Always explain technical concepts in **plain, layman English** using real-world analogies (e.g., house construction, restaurant, cars).
  * Avoid dry developer jargon without immediate explanation.
  * Proactively execute setup, terminal commands, builds, and git workflows for the user instead of asking them to manually write code or run complex commands.

---

## 💻 Mac Machine Setup & Installed Toolchain
* **Hardware**: Apple Silicon (`arm64`), macOS Sequoia.
* **Package Manager**: Homebrew (`/opt/homebrew/bin/brew`).
* **Runtimes & Package Managers**:
  * **Node.js**: `v26.13.0` & **npm**: `11.20.0`
  * **Bun**: `1.4.4` (used for fast package installation and local dev server)
  * **pnpm**: `12.18.0`
  * **Python**: `uv` (`0.13.7`) with managed Python 3.12
* **Version Control**: Git `2.56.0` & GitHub CLI (`gh 2.103.3`)
* **Code Editor**: Visual Studio Code (`/Applications/Visual Studio Code.app`) with Tailwind CSS, ESLint, and Prettier extensions.

---

## 🌐 Connected Accounts & Cloud Infrastructure
* **GitHub**:
  * Username: `JaisonSam`
  * Project Repository: [https://github.com/JaisonSam/my-next-app](https://github.com/JaisonSam/my-next-app)
  * Default Branch: `main`
* **Vercel**:
  * Team: `jaisonsams-projects` (Hobby Plan)
  * Live Production Website: [https://my-next-app-nu-pearl.vercel.app](https://my-next-app-nu-pearl.vercel.app)
  * Project Dashboard: [Inspect on Vercel](https://vercel.com/jaisonsams-projects/my-next-app)

---

## 🏗️ Application Architecture (`my-next-app`)
* **Framework**: Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript.
* **Folder Structure**:
  * `app/page.tsx`: Frontend home page & UI components.
  * `app/globals.css`: Tailwind styling rules and dark mode theme.
  * `app/api/.../route.ts`: Backend API endpoints (e.g., `app/api/hello/route.ts`).
  * `public/`: Media assets, logos, and images.
* **Development Workflow**:
  * Start local dev server: `bun run dev` (view at `http://localhost:3000`).
  * Deploy updates live: `git commit -am "..." && git push` or `vercel --prod`.
