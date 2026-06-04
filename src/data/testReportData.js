const testReportData = [
  {
    id: "TR-001",
    name: "Dropdown renders dynamic options",
    file: "src/components/Dropdown.jsx",
    status: "pass",
    log: "Rendered category options from jsonFiles and handled change events.",
  },
  {
    id: "TR-002",
    name: "SearchBar accepts text input",
    file: "src/components/SearchBar.jsx",
    status: "pass",
    log: "Search input updates state and filters questions correctly.",
  },
  {
    id: "TR-003",
    name: "QuestionTable shows question labels",
    file: "src/components/QuestionTable.jsx",
    status: "pass",
    log: "Displays category badges and answer details for each question.",
  },
  {
    id: "TR-004",
    name: "App toggles report page and theme",
    file: "src/App.js",
    status: "pass",
    log: "Main page and test report page can be switched using the toolbar buttons.",
  },
  {
    id: "TR-005",
    name: "jsonFiles exports categorized test data",
    file: "src/data/jsonFiles.js",
    status: "pass",
    log: "All category arrays and the combined all array are available with category metadata.",
  },
];

export default testReportData;
