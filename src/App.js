// App.js

import React, {
  useCallback,
  useMemo,
  useState,
} from "react";

import "./App.css";
import jsonFiles from "./data/jsonFiles";
import Dropdown from "./components/Dropdown";
import SearchBar from "./components/SearchBar";
import QuestionTable from "./components/QuestionTable";
import TestReport from "./components/TestReport";

function App() {
  const [selectedFile, setSelectedFile] = useState("all");
  const [showReport, setShowReport] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [darkTheme, setDarkTheme] = useState(true);

  const dropdownOptions = useMemo(
    () =>
      Object.keys(jsonFiles).map((key) => ({
        value: key,
        label:
          key === "all"
            ? "All"
            : `${key[0].toUpperCase()}${key.slice(1)}.json`,
      })),
    []
  );

  const tableData = useMemo(
    () => jsonFiles[selectedFile] || [],
    [selectedFile]
  );

  const normalizedSearchText = useMemo(
    () => searchText.trim().toLowerCase(),
    [searchText]
  );

  const filteredData = useMemo(() => {
    if (!normalizedSearchText) {
      return tableData;
    }

    return tableData.filter((item) => {
      const search = normalizedSearchText;
      const questionMatch = item.question
        ?.toLowerCase()
        .includes(search);
      const definitionMatch =
        item.answer?.definition
          ?.toLowerCase()
          .includes(search);
      const pointsMatch =
        item.answer?.points?.some((point) =>
          point.toLowerCase().includes(search)
        );
      const comparisonMatch =
        item.answer?.comparison?.some((row) =>
          Object.values(row).some((value) =>
            String(value).toLowerCase().includes(search)
          )
        );

      return (
        questionMatch ||
        definitionMatch ||
        pointsMatch ||
        comparisonMatch
      );
    });
  }, [normalizedSearchText, tableData]);

  const handleReportToggle = useCallback(
    () => setShowReport((current) => !current),
    []
  );

  const handleSelectedFileChange = useCallback(
    (event) => setSelectedFile(event.target.value),
    []
  );

  const handleSearchTextChange = useCallback(
    (event) => setSearchText(event.target.value),
    []
  );

  const handleThemeToggle = useCallback(
    () => setDarkTheme((current) => !current),
    []
  );

  return (
    <div className={`app-container ${darkTheme ? "dark" : "light"}`}>
      {showReport ? (
        <TestReport onBack={handleReportToggle} />
      ) : (
        <>
          <div className="header-section">
            <div>
              <h1>Frontend Interview Questions</h1>
              <p>React.js • JavaScript • Next.js • CSS • Node.js</p>
            </div>

            <button className="report-btn" onClick={handleReportToggle}>
              View Test Report
            </button>
          </div>

          <div className="top-section">
            <div className="filter-section">
              <Dropdown
                options={dropdownOptions}
                selectedFile={selectedFile}
                onChange={handleSelectedFileChange}
              />

              <SearchBar
                searchText={searchText}
                onChange={handleSearchTextChange}
              />
            </div>

            <button className="theme-btn" onClick={handleThemeToggle}>
              {darkTheme ? "☀ Light" : "🌙 Dark"}
            </button>
          </div>

          <QuestionTable data={filteredData} />
        </>
      )}
    </div>
  );
}

export default App;
