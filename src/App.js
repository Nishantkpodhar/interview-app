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
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import LastProject from "./components/LastProject/LastProject";

function App() {
  const [selectedFile, setSelectedFile] = useState("all");
  const [showReport, setShowReport] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [darkTheme, setDarkTheme] = useState(true);
  const [showComparisonOnly, setShowComparisonOnly] = useState(false);
  const [activeSection, setActiveSection] = useState("questions");

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
    const search = normalizedSearchText;
    const comparisonFilter = (item) =>
      item.answer?.comparison?.length > 0;

    const normalizedData = showComparisonOnly
      ? tableData.filter(comparisonFilter)
      : tableData;

    if (!search) {
      return normalizedData;
    }

    return normalizedData.filter((item) => {
      const questionMatch = item.question
        ?.toLowerCase()
        .includes(search);

      return questionMatch;
    });
  }, [normalizedSearchText, tableData, showComparisonOnly]);

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

  const handleComparisonToggle = useCallback(
    () => setShowComparisonOnly((current) => !current),
    []
  );

  const handleThemeToggle = useCallback(
    () => setDarkTheme((current) => !current),
    []
  );

  const handleSectionChange = useCallback(
    (section) => setActiveSection(section),
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

          <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />

          {activeSection === "intro" ? (
            <Introduction />
          ) : activeSection === "project" ? (
            <LastProject />
          ) : (
            <>
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

                  <button
                    type="button"
                    className={`filter-btn ${showComparisonOnly ? "active" : ""}`}
                    onClick={handleComparisonToggle}
                  >
                    Difference Between
                  </button>
                </div>

                <button className="theme-btn" onClick={handleThemeToggle}>
                  {darkTheme ? "☀ Light" : "🌙 Dark"}
                </button>
              </div>

              <QuestionTable data={filteredData} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
