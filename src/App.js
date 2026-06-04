// App.js

import React, {
  useEffect,
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
  const [selectedFile, setSelectedFile] =
    useState("all");
  const [showReport, setShowReport] = useState(false);

  const [searchText, setSearchText] =
    useState("");

  const [tableData, setTableData] = useState(
    []
  );

  const [darkTheme, setDarkTheme] =
    useState(true);

  useEffect(() => {
    setTableData(jsonFiles[selectedFile]);
  }, [selectedFile]);

  // SEARCH FILTER
  const dropdownOptions = Object.keys(jsonFiles).map((key) => ({
    value: key,
    label:
      key === "all"
        ? "All"
        : `${key[0].toUpperCase()}${key.slice(1)}.json`,
  }));

  const filteredData = useMemo(() => {
    return tableData.filter((item) => {
      const search = searchText.toLowerCase();

      const questionMatch = item.question
        ?.toLowerCase()
        .includes(search);

      const definitionMatch =
        item.answer?.definition
          ?.toLowerCase()
          .includes(search);

      const pointsMatch =
        item.answer?.points?.some((point) =>
          point
            .toLowerCase()
            .includes(search)
        );

      const comparisonMatch =
        item.answer?.comparison?.some((row) =>
          Object.values(row).some((value) =>
            value
              .toLowerCase()
              .includes(search)
          )
        );

      return (
        questionMatch ||
        definitionMatch ||
        pointsMatch ||
        comparisonMatch
      );
    });
  }, [searchText, tableData]);

  return (
    <div
      className={`app-container ${
        darkTheme ? "dark" : "light"
      }`}
    >
      {showReport ? (
        <TestReport onBack={() => setShowReport(false)} />
      ) : (
        <>
          {/* HEADER */}

          <div className="header-section">
            <div>
              <h1>
                Frontend Interview Questions
              </h1>
              <p>
                React.js • JavaScript • Next.js •
                CSS • Node.js
              </p>
            </div>

            <button
              className="report-btn"
              onClick={() => setShowReport(true)}
            >
              View Test Report
            </button>
          </div>

      {/* FILTER SECTION */}

      <div className="top-section">
        <div className="filter-section">
          <Dropdown
            options={dropdownOptions}
            selectedFile={selectedFile}
            onChange={(e) =>
              setSelectedFile(e.target.value)
            }
          />

          <SearchBar
            searchText={searchText}
            onChange={(e) =>
              setSearchText(e.target.value)
            }
          />
        </div>

        {/* THEME BUTTON */}

        <button
          className="theme-btn"
          onClick={() =>
            setDarkTheme(!darkTheme)
          }
        >
          {darkTheme
            ? "☀ Light"
            : "🌙 Dark"}
        </button>
      </div>

      {/* TABLE */}

      <QuestionTable data={filteredData} />
    </>
      )}
    </div>
  );
}

export default App;