// App.js

import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import "./App.css";
import jsonFiles from "./data/jsonFiles";

function App() {
  const [selectedFile, setSelectedFile] =
    useState("all");

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
      {/* HEADER */}

      <div className="header-section">
        <h1>
          Frontend Interview Questions
        </h1>

        <p>
          React.js • JavaScript • Next.js •
          CSS • Node.js
        </p>
      </div>

      {/* FILTER SECTION */}

      <div className="top-section">
        <div className="filter-section">
          {/* DROPDOWN */}

          <select
            value={selectedFile}
            onChange={(e) =>
              setSelectedFile(
                e.target.value
              )
            }
            className="dropdown"
          >
            <option value="all">All</option>

            <option value="react">
              React.json
            </option>

            <option value="javascript">
              Javascript.json
            </option>

            <option value="nextjs">
              Nextjs.json
            </option>

            <option value="css">
              CSS.json
            </option>

            <option value="node">
              Node.json
            </option>
          </select>

          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search question or answer..."
            className="search-box"
            value={searchText}
            onChange={(e) =>
              setSearchText(
                e.target.value
              )
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

      <div className="table-wrapper">
        <table>
          <tbody>
            {filteredData.map(
              (item, index) => (
                <React.Fragment
                  key={index}
                >
                  {/* QUESTION */}

                  <tr className="question-row">
                    <td className="serial-no">
                      {index + 1}
                    </td>

                    <td
                      colSpan="2"
                      className="question-cell"
                    >
                      {item.question}
                    </td>
                  </tr>

                  {/* ANSWER */}

                  <tr className="answer-row">
                    <td></td>

                    <td
                      colSpan="2"
                      className="answer-cell"
                    >
                      {/* DEFINITION */}

                      {item.answer
                        ?.definition && (
                        <div className="definition-box">
                          <h3>
                            Definition
                          </h3>

                          <p>
                            {
                              item.answer
                                .definition
                            }
                          </p>
                        </div>
                      )}

                      {/* POINTS */}

                      {item.answer
                        ?.points &&
                        item.answer
                          .points.length >
                          0 && (
                          <div className="points-box">
                            <h3>
                              Important
                              Points
                            </h3>

                            <ol>
                              {item.answer.points.map(
                                (
                                  point,
                                  idx
                                ) => (
                                  <li
                                    key={
                                      idx
                                    }
                                  >
                                    {
                                      point
                                    }
                                  </li>
                                )
                              )}
                            </ol>
                          </div>
                        )}

                      {/* COMPARISON */}

                      {item.answer
                        ?.comparison &&
                        item.answer
                          .comparison
                          .length >
                          0 && (
                          <div className="comparison-section">
                            <h3>
                              Differences
                              Table
                            </h3>

                            <table className="comparison-table">
                              <thead>
                                <tr>
                                  <th>
                                    Feature
                                  </th>

                                  <th>
                                    {
                                      item
                                        .answer
                                        .comparisonTitle1
                                    }
                                  </th>

                                  <th>
                                    {
                                      item
                                        .answer
                                        .comparisonTitle2
                                    }
                                  </th>
                                </tr>
                              </thead>

                              <tbody>
                                {item.answer.comparison.map(
                                  (
                                    row,
                                    idx
                                  ) => (
                                    <tr
                                      key={
                                        idx
                                      }
                                    >
                                      <td>
                                        {
                                          row.feature
                                        }
                                      </td>

                                      <td>
                                        {
                                          row.first
                                        }
                                      </td>

                                      <td>
                                        {
                                          row.second
                                        }
                                      </td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </table>
                          </div>
                        )}
                    </td>
                  </tr>
                </React.Fragment>
              )
            )}
          </tbody>
        </table>

        {/* NO DATA */}

        {filteredData.length === 0 && (
          <div className="no-data">
            No Question Found
          </div>
        )}
      </div>
    </div>
  );
}

export default App;