import React, { memo, useMemo } from "react";

const QuestionRow = memo(function QuestionRow({
  item,
  index,
  questionKey,
  isExpanded,
  onToggle,
  onOpenExample,
}) {
  const answer = useMemo(() => item.answer ?? {}, [item.answer]);
  const points = useMemo(
    () => (Array.isArray(answer.points) ? answer.points : []),
    [answer.points]
  );
  const comparison = useMemo(
    () => (Array.isArray(answer.comparison) ? answer.comparison : []),
    [answer.comparison]
  );
  const answerId = `answer-${index}`;

  return (
    <>
      <tr className="question-row">
        <td className="serial-no">{index + 1}</td>
        <td colSpan="2" className="question-cell">
          <button
            type="button"
            className="question-cell-content question-toggle"
            aria-expanded={isExpanded}
            aria-controls={answerId}
            onClick={() => onToggle(questionKey)}
          >
            <span>{item.question}</span>
            {item.category && <span className="question-label">{item.category}</span>}
          </button>
        </td>
      </tr>

      {isExpanded && (
        <tr className="answer-row" id={answerId}>
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
                  {points.map((point, pointIndex) => {
                    if (typeof point === "string") {
                      return <li key={`${questionKey}-point-${pointIndex}`}>{point}</li>;
                    }

                    if (point && typeof point === "object") {
                      return (
                        <li key={`${questionKey}-point-${pointIndex}`} className="point-object-item">
                          {point.feature && <div className="point-feature">{point.feature}</div>}
                          {point.description && (
                            <div className="point-description">{point.description}</div>
                          )}
                          {point.example && <div className="point-example">{point.example}</div>}
                        </li>
                      );
                    }

                    return <li key={`${questionKey}-point-${pointIndex}`}>{String(point)}</li>;
                  })}
                </ol>
              </div>
            )}

            <button type="button" className="example-btn" onClick={() => onOpenExample(item)}>
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
                    {comparison.map((row, rowIndex) => (
                      <tr key={`${questionKey}-comparison-${rowIndex}`}>
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
      )}
    </>
  );
});

export default QuestionRow;
