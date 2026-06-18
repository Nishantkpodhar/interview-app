import React, { useState } from "react";
import "./QuestionTable.css";

function QuestionTable({ data }) {
  const [activeExample, setActiveExample] = useState(null);

  if (!data || data.length === 0) {
    return <div className="no-data">No Question Found</div>;
  }

  return (
    <div className="table-wrapper">
      <table>
        <tbody>
          {data.map((item, index) => {
            const questionKey = `${item.category}-${item.question}-${index}`;
            const answer = item.answer ?? {};
            const points = Array.isArray(answer.points) ? answer.points : [];
            const comparison = Array.isArray(answer.comparison) ? answer.comparison : [];

            return (
              <React.Fragment key={questionKey}>
                <tr className="question-row">
                  <td className="serial-no">{index + 1}</td>
                  <td colSpan="2" className="question-cell">
                    <div className="question-cell-content">
                      <span>{item.question}</span>
                      {item.category && (
                        <span className="question-label">
                          {item.category}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>

                <tr className="answer-row">
                  <td />
                  <td colSpan="2" className="answer-cell">
                    {answer.definition && (
                      <div className="definition-box">
                        <h3>Definition</h3>
                        <p>{answer.definition}</p>
                      </div>
                    )}

                    {points.length > 0 && (
                      <div className="points-box">
                        <h3>Important Points</h3>
                        <ol>
                          {points.map((point, idx) => {
                            if (typeof point === "string") {
                              return (
                                <li key={`${questionKey}-point-${idx}`}>
                                  {point}
                                </li>
                              );
                            }

                            if (point && typeof point === "object") {
                              return (
                                <li key={`${questionKey}-point-${idx}`} className="point-object-item">
                                  {point.feature && (
                                    <div className="point-feature">
                                      {point.feature}
                                    </div>
                                  )}
                                  {point.description && (
                                    <div className="point-description">
                                      {point.description}
                                    </div>
                                  )}
                                  {point.example && (
                                    <div className="point-example">
                                      {point.example}
                                    </div>
                                  )}
                                </li>
                              );
                            }

                            return (
                              <li key={`${questionKey}-point-${idx}`}>
                                {String(point)}
                              </li>
                            );
                          })}
                        </ol>
                      </div>
                    )}

                    <button
                      type="button"
                      className="example-btn"
                      onClick={() => setActiveExample(item)}
                    >
                      Example
                    </button>

                    {comparison.length > 0 && (
                      <div className="comparison-section">
                        <h3>Differences Table</h3>
                        <table className="comparison-table">
                          <thead>
                            <tr>
                              <th>Feature</th>
                              <th>{answer.comparisonTitle1}</th>
                              <th>{answer.comparisonTitle2}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {comparison.map((row, idx) => (
                              <tr key={`${questionKey}-comparison-${idx}`}>
                                <td>{row.feature}</td>
                                <td>{row.first}</td>
                                <td>{row.second}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      {activeExample && (
        <div className="example-modal-overlay" onClick={() => setActiveExample(null)}>
          <div className="example-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="close-modal"
              onClick={() => setActiveExample(null)}
            >
              ×
            </button>
            <div className="example-modal-content">
              <h2>Example for: {activeExample.question}</h2>
              {activeExample.answer?.example ? (
                <div className="example-section">
                  <h3>Example</h3>
                  <p>{activeExample.answer.example}</p>
                </div>
              ) : (
                <div className="example-section">
                  <h3>Example</h3>
                  <p>No example available for this question.</p>
                </div>
              )}

              {activeExample.answer?.syntax ? (
                <div className="example-section">
                  <h3>Syntax</h3>
                  <pre>{activeExample.answer.syntax}</pre>
                </div>
              ) : (
                <div className="example-section">
                  <h3>Syntax</h3>
                  <p>No syntax available for this question.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(QuestionTable);
