# Interview App

A React-based interview question viewer for frontend topics. The app loads question and answer data from JSON files and supports category filtering, search, and theme toggling.

## Features

- Category filter: All, React, JavaScript, Next.js, CSS, Node.js
- Search across questions, answer definitions, answer points, and comparison rows
- Dark / light theme toggle
- Question list and answer display built from `src/data/*.json`

## Installation

1. Open a terminal in the project directory:

   ```bash
   cd interview-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Run locally

Start the development server:

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

The app reloads automatically when you save changes.

## Build for production

Create an optimized production build:

```bash
npm run build
```

The output is written to the `build` folder.

## Git commit and push

After editing files, save and run:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

If GitHub rejects the push because of email privacy, use your GitHub no-reply email and rewrite the commit author before pushing:

```bash
git config user.email "<your-github-username>@users.noreply.github.com"
git commit --amend --reset-author --no-edit
git push --force-with-lease origin main
```

## Notes

- This project uses Create React App and React 19.
- Data files are located in `src/data/` and aggregated in `src/data/jsonFiles.js`.
- Use `npm test` to run the built-in CRA test suite.
