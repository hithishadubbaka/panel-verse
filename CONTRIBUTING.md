# Contributing to PanelVerse

Thanks for helping build PanelVerse! This guide explains how to set up the project locally and how we work with branches and pull requests.

---

## Table of Contents

* [Fork & Clone](#fork--clone)
* [Frontend (Vite + React + Tailwind v4)](#frontend-vite--react--tailwind-v4)
* [Backend (FastAPI)](#backend-fastapi)
* [Branching & Pull Requests](#branching--pull-requests)
* [Common Issues](#common-issues)

---

## Fork & Clone

1. **Fork** this repo to your GitHub account.
2. **Clone** your fork:

   ```bash
   git clone https://github.com/<your-username>/panel-verse.git
   cd panel-verse
   ```
3. (Recommended) Add the upstream remote:

   ```bash
   git remote add upstream https://github.com/kevin8999/panel-verse.git
   ```

---

## Frontend (Vite + React + Tailwind v4)

> The frontend lives in `my-app/`.

1. Install dependencies:

   ```bash
   cd my-app
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

   Vite prints a URL like `http://localhost:5173`.
   If the port is taken:

   ```bash
   npm run dev -- --port 5173
   ```

3. Tailwind v4 is already configured:

   * `postcss.config.cjs`

     ```js
     module.exports = {
       plugins: { '@tailwindcss/postcss': {}, autoprefixer: {} },
     };
     ```
   * `src/index.css` (first line)

     ```css
     @import "tailwindcss/index.css";
     ```

> **Windows PowerShell note**: if you see “running scripts is disabled”, either use **Command Prompt** or run:
>
> ```powershell
> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
> ```

---

## Backend (FastAPI)

> Only needed if you’re working on backend APIs. If you’re frontend-only, you can skip this.

1. From the repo root:

   ```bash
   python -m venv .venv
   ```
2. Activate the venv:

   * **Windows**:

     ```bash
     .venv\Scripts\activate
     ```
   * **macOS/Linux**:

     ```bash
     source .venv/bin/activate
     ```
3. Install backend requirements:

   ```bash
   pip install -r requirements.txt
   ```
4. Run the backend (example):

   ```bash
   uvicorn app.main:app --reload
   ```

   The API will be available at `http://localhost:8000` (adjust if different).

---

## Branching & Pull Requests

1. Create a feature branch from `main`:

   ```bash
   git checkout -b feature/<short-description>
   ```

2. Do your work, then commit:

   ```bash
   git add .
   git commit -m "Describe the change briefly"
   ```

3. Push and open a PR:

   ```bash
   git push -u origin feature/<short-description>
   ```

4. Open a Pull Request to **`main`** on GitHub and include:

   * What changed (screenshots for UI)
   * How to test
   * Any known issues or follow-ups

5. Keep your branch up to date:

   ```bash
   git fetch upstream
   git switch main
   git pull upstream main
   git switch feature/<short-description>
   git merge main   # or: git rebase main
   ```

---

## Common Issues

* **Blank/unstyled page**
  Ensure you’re running from `panel-verse/my-app`:

  ```bash
  cd panel-verse/my-app
  npm run dev
  ```

  And that `src/main.jsx` imports the CSS:

  ```js
  import './index.css';
  ```

* **PowerShell blocks npm**
  Use Command Prompt or:

  ```powershell
  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
  ```

* **Tailwind PostCSS plugin error (v4)**
  Install the v4 plugin:

  ```bash
  npm i -D @tailwindcss/postcss
  ```

  Confirm `postcss.config.cjs` uses:

  ```js
  module.exports = { plugins: { '@tailwindcss/postcss': {}, autoprefixer: {} } };
  ```

* **Port already in use**
  Stop other dev servers (Ctrl+C), or:

  ```bash
  npm run dev -- --port 5173
  ```

---

##
