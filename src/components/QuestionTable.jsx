import React from "react";

function QuestionTable({ data }) {
  if (!data || data.length === 0) {
    return <div className="no-data">No Question Found</div>;
  }

  return (
    <div className="table-wrapper">
      <table>
        <tbody>
          {data.map((item, index) => {
            const questionKey = `${item.category}-${item.question}-${index}`;

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
                    {item.answer?.definition && (
                      <div className="definition-box">
                        <h3>Definition</h3>
                        <p>{item.answer.definition}</p>
                      </div>
                    )}

                    {item.answer?.points?.length > 0 && (
                      <div className="points-box">
                        <h3>Important Points</h3>
                        <ol>
                          {item.answer.points.map((point, idx) => (
                            <li key={`${questionKey}-point-${idx}`}>
                              {point}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {item.answer?.comparison?.length > 0 && (
                      <div className="comparison-section">
                        <h3>Differences Table</h3>
                        <table className="comparison-table">
                          <thead>
                            <tr>
                              <th>Feature</th>
                              <th>{item.answer.comparisonTitle1}</th>
                              <th>{item.answer.comparisonTitle2}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.answer.comparison.map((row, idx) => (
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
    </div>
  );
}

export default React.memo(QuestionTable);
