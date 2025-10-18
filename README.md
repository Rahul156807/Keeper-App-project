# Keeper App

## Overview
Keeper App is a simple React note-taking application built with Create React App. It allows users to add and delete notes, demonstrating React hooks (`useState`), component composition, and basic UI state management. Material UI icons are used for a modern look.

## Features
- Add notes with a title and content
- Delete notes
- Responsive note card layout
- Material UI icons for actions

## Tech Stack
- React (v19)
- Create React App (react-scripts)
- Material UI icons

## Project Structure
- `public/` — static HTML and assets
- `src/` — React source files
  - `index.js` — app bootstrap
  - `style.css` — app styles
  - `components/` — React components (App, Header, Footer, Note, CreateArea)

## How to Run Locally (Windows PowerShell)
1. Install dependencies:
   ```powershell
   npm install
   ```
2. Start the development server:
   ```powershell
   npm start
   ```
3. Open http://localhost:3000 in your browser.

## Recommendations
- Use stable unique IDs for notes instead of array indexes as React keys.
- Add `onSubmit={e => e.preventDefault()}` to the note form to avoid accidental form submissions.
- Add ARIA labels to icon-only buttons for accessibility.
- Persist notes in `localStorage` to survive page reloads.

## How to Push to GitHub
1. Create a new repository on GitHub and copy the repository URL (HTTPS or SSH).
2. From the project root in PowerShell run:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit - keeper app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
   If a remote named `origin` already exists, update it with:
   ```powershell
   git remote set-url origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

## Optional Improvements
- Add unique IDs to notes and persist to `localStorage`
- Improve accessibility and add unit tests
- Migrate the project to Vite for faster development

---
If you want, I can help implement any of these improvements or troubleshoot issues!
