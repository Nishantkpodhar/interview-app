import React, { useMemo } from "react";
import testReportData from "../data/testReportData";

function TestReport({ onBack }) {
  const summary = useMemo(() => {
    const total = testReportData.length;
    const passed = testReportData.filter((item) => item.status === "pass").length;
    const failed = total - passed;
    return { total, passed, failed };
  }, []);

  return (
    <div className="test-report-page">
      <div className="report-header">
        <div>
          <h1>Test Report</h1>
          <p>Track test case execution status and logs in one view.</p>
        </div>
        <button className="back-btn" onClick={onBack}>
          Back to App
        </button>
      </div>

      <div className="report-summary">
        <div className="summary-card">
          <strong>{summary.total}</strong>
          <span>Total Tests</span>
        </div>
        <div className="summary-card summary-pass">
          <strong>{summary.passed}</strong>
          <span>Passed</span>
        </div>
        <div className="summary-card summary-fail">
          <strong>{summary.failed}</strong>
          <span>Failed</span>
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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.file}</td>
                <td className={`status-badge ${item.status}`}>
                  {item.status.toUpperCase()}
                </td>
                <td>{item.log}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TestReport;
