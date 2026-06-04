# Interview App

A small React application that displays frontend interview questions by topic. The app is data-driven (JSON files) and includes dynamic filtering, search, comparison-mode, theming, and a test-report view.

## Quick Start

Install dependencies and run locally:

```bash
npm install
npm start
```

Open http://localhost:3000

Run tests:

```bash
npm test
```

Build production bundle:

```bash
npm run build
```

## Dynamic features (how they work)

- Topic dropdown: options are derived from `src/data/jsonFiles.js`. Add a JSON file under `src/data/` and export it in `jsonFiles.js` to expose a new topic.
- Search: searches only the question text (controlled by `App` state `searchText`) and filters the `tableData` computed from selected topic.
- Difference Between toggle: when active, `App` restricts the source set to items with `answer.comparison` before applying search. This produces a comparison-only list.
- Theme toggle: toggles the CSS theme class on the root `.app-container` between `dark` and `light`.
- Test Report: shows data from `src/data/testReportData.js` (stats + table). This is a UI-only report for demonstration.

## Component layout

Each component is contained in a folder under `src/components/` with the pattern:

- `index.jsx` — component entry
- `*.css` — styles for the component
- `*.test.jsx` — component tests (when present)

Current components:

- `src/components/Dropdown/` — topic selector
- `src/components/SearchBar/` — search input
- `src/components/QuestionTable/` — list renderer for questions and answers
- `src/components/TestReport/` — test report page

This structure makes components portable and their styles local to the component.

## Data format

Each question item in the JSON files follows this shape (examples in `src/data/react.json`):

```json
{
   "question": "What is React?",
   "answer": {
      "definition": "React.js is...",
      "points": ["..."],
      "comparisonTitle1": "HTML",
      "comparisonTitle2": "React",
      "comparison": [ { "feature": "Event Naming", "first": "lowercase", "second": "camelCase" } ]
   }
}
```

Add new items by editing the specific topic JSON file. Each item should include a `question` string; `answer` can have `definition`, `points`, or `comparison` (for difference tables).

## Tests

- Component tests are colocated under each component folder.
- `npm test` runs all tests — tests were updated to reference components' `index.jsx` exports after the refactor.

## Maintenance tips

- To add a component: create a new folder under `src/components/<ComponentName>/` with `index.jsx`, `<ComponentName>.css`, and preferably a `<ComponentName>.test.jsx`.
- Keep data in `src/data/` and update `src/data/jsonFiles.js` to include new topic exports.

## Where to look in the code

- App root: `src/App.js`
- Data aggregation: `src/data/jsonFiles.js`
- Example data: `src/data/react.json`, `src/data/javascript.json`, etc.
- Components: `src/components/*/index.jsx`

## Next improvements (optional)

- Add Storybook for visual testing of components.
- Add CI to run `npm test` on PRs.
- Add a small admin UI or script to add questions safely to JSON files.

---

If you want I can:

- Add STORYBOOK configuration.
- Add CONTRIBUTING and CHANGELOG templates.
- Create a small script to validate JSON entries before commit.
