import React, { useCallback, useMemo, useState } from "react";
import QuestionRow from "./QuestionRow";
import "./QuestionTable.css";

function QuestionTable({ data }) {
  const [activeExample, setActiveExample] = useState(null);
  const [expandedAnswers, setExpandedAnswers] = useState(() => new Set());

  const toggleAnswer = useCallback((questionKey) => {
    setExpandedAnswers((current) => {
      const next = new Set(current);

      if (next.has(questionKey)) {
        next.delete(questionKey);
      } else {
        next.add(questionKey);
      }

      return next;
    });
  }, []);

  const openExample = useCallback((item) => setActiveExample(item), []);
  const closeExample = useCallback(() => setActiveExample(null), []);

  const rows = useMemo(
    () =>
      (data || []).map((item, index) => {
        const questionKey = `${item.category}-${item.question}-${index}`;
        return (
          <QuestionRow
            key={questionKey}
            item={item}
            index={index}
            questionKey={questionKey}
            isExpanded={expandedAnswers.has(questionKey)}
            onToggle={toggleAnswer}
            onOpenExample={openExample}
          />
        );
      }),
    [data, expandedAnswers, openExample, toggleAnswer]
  );

  if (!data || data.length === 0) {
    return <div className="no-data">No Question Found</div>;
  }

  return (
    <div className="table-wrapper">
      <table>
        <tbody>{rows}</tbody>
      </table>

      {activeExample && (
        <div className="example-modal-overlay" onClick={closeExample}>
          <div className="example-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-modal" onClick={closeExample}>
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
