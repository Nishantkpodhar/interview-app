import React, { useMemo } from "react";
import testReportData from "../../data/testReportData";
import "./TestReport.css";

function TestReport({ onBack }) {
  const summary = useMemo(() => {
    const total = testReportData.length;
    const passed = testReportData.filter((item) => item.status === "pass").length;
    const failed = total - passed;
    const passPercentage = total > 0 ? Math.round((passed / total) * 100) : 0;
    return { total, passed, failed, passPercentage };
  }, []);

  return (
    <div className="test-report-page">
      <div className="report-header">
        <div className="report-header-content">
          <h1>📊 Test Report</h1>
          <p>Track test case execution status and logs in one view.</p>
        </div>
        <button className="back-btn" onClick={onBack}>
          ← Back to App
        </button>
      </div>

      <div className="report-summary">
        <div className="summary-card summary-total">
          <div className="card-icon">📝</div>
          <strong>{summary.total}</strong>
          <span>Total Tests</span>
        </div>
        <div className="summary-card summary-pass">
          <div className="card-icon">✅</div>
          <strong>{summary.passed}</strong>
          <span>Passed</span>
          <div className="percentage-bar">
            <div className="percentage-fill pass-fill" style={{width: `${summary.passPercentage}%`}}></div>
          </div>
        </div>
        <div className="summary-card summary-fail">
          <div className="card-icon">❌</div>
          <strong>{summary.failed}</strong>
          <span>Failed</span>
          <div className="percentage-bar">
            <div className="percentage-fill fail-fill" style={{width: `${100 - summary.passPercentage}%`}}></div>
          </div>
        </div>
      </div>

      <div className="report-table-wrapper">
        <table className="report-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Test Case</th>
              <th>File</th>
              <th>Status</th>
              <th>Log</th>
            </tr>
          </thead>
          <tbody>
            {testReportData.map((item) => (
              <tr key={item.id} className={`table-row-${item.status}`}>
                <td className="table-id">
                  <span className="id-badge">{item.id}</span>
                </td>
                <td className="table-name">{item.name}</td>
                <td className="table-file">{item.file}</td>
                <td>
                  <span className={`status-badge ${item.status}`}>
                    {item.status === "pass" ? "✓" : "✕"} {item.status.toUpperCase()}
                  </span>
                </td>
                <td className="table-log">{item.log}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default React.memo(TestReport);
