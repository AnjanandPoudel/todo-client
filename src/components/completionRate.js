import React from 'react';
import "../css/table.css"

const CompletionTable = ({ items }) => {
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Day</th>
          <th>Completion Rate in Percentage</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.createdAt}>
            <td>{item.createdDay}</td>
            <td>{item.completionRatePercentage} %</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompletionTable;
