// App.js

import React, {
  useCallback,
  useMemo,
  useState,
} from "react";

import "./App.css";
import jsonFiles, {
  categoryOptionsByTechnology,
  technologyOptions,
} from "./data/jsonFiles";
import Dropdown from "./components/Dropdown";
import SearchBar from "./components/SearchBar";
import QuestionTable from "./components/QuestionTable";
import TestReport from "./components/TestReport";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import LastProject from "./components/LastProject/LastProject";

function App() {
  const [selectedFile, setSelectedFile] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showReport, setShowReport] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [darkTheme, setDarkTheme] = useState(true);
  const [showComparisonOnly, setShowComparisonOnly] = useState(false);
  const [activeSection, setActiveSection] = useState("questions");

  const categoryDropdownOptions = useMemo(
    () =>
      selectedFile === "all"
        ? [{ value: "all", label: "Select a technology first" }]
        : [
            { value: "all", label: "All Categories" },
            ...(categoryOptionsByTechnology[selectedFile] || []),
          ],
    [selectedFile]
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

    const categoryData =
      selectedCategory === "all"
        ? tableData
        : tableData.filter((item) => item.category === selectedCategory);

    const normalizedData = showComparisonOnly
      ? categoryData.filter(comparisonFilter)
      : categoryData;

    if (!search) {
      return normalizedData;
    }

    return normalizedData.filter((item) => {
      const questionMatch = item.question
        ?.toLowerCase()
        .includes(search);

      return questionMatch;
    });
  }, [normalizedSearchText, selectedCategory, tableData, showComparisonOnly]);

  const handleReportToggle = useCallback(
    () => setShowReport((current) => !current),
    []
  );

  const handleSelectedFileChange = useCallback(
    (event) => {
      setSelectedFile(event.target.value);
      setSelectedCategory("all");
    },
    []
  );

  const handleCategoryChange = useCallback(
    (event) => setSelectedCategory(event.target.value),
    []
  );

  const handleSearchTextChange = useCallback(
    (event) => setSearchText(event.target.value),
    []
  );

  const handleSearchClear = useCallback(() => setSearchText(""), []);

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

            </div>

          </div>

          <div className="app-layout">
            <aside className="sidebar" aria-label="Interview sections">
              <Navigation
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
              />
              <button className="report-btn" onClick={handleReportToggle}>
                View Test Report
              </button>
              <div className="sidebar-animation" aria-hidden="true">
                <span className="sidebar-orbit orbit-one" />
                <span className="sidebar-orbit orbit-two" />
                <span className="sidebar-spark spark-one" />
                <span className="sidebar-spark spark-two" />
              </div>
            </aside>

            <main className="main-content">
              {activeSection === "intro" ? (
                <Introduction />
              ) : activeSection === "project" ? (
                <LastProject />
              ) : (
                <>
                  <div className="top-section">
                    <div className="filter-section">
                      <Dropdown
                        ariaLabel="Technology"
                        options={technologyOptions}
                        selectedFile={selectedFile}
                        onChange={handleSelectedFileChange}
                      />

                      <Dropdown
                        ariaLabel="Question category"
                        disabled={selectedFile === "all"}
                        options={categoryDropdownOptions}
                        selectedFile={selectedCategory}
                        onChange={handleCategoryChange}
                      />

                      <SearchBar
                        searchText={searchText}
                        onChange={handleSearchTextChange}
                        onClear={handleSearchClear}
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
            </main>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
