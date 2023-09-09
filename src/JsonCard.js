import React from "react";

const JsonCard = ({ jsonData }) => {
  // Use this to display without Null values
  // const keyValueArray = Object.entries(jsonData);
  // Use the below to eliminate null entries
  const keyValueArray = Object.entries(jsonData).filter(([key, value]) => {
    return value !== null && value !== "";
  });
  // You can add your own CSS styles for the card and table here
  const cardStyles = {
    border: "1px solid #ccc",
    padding: "16px",
    margin: "16px",
    borderRadius: "4px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  };

  const tableStyles = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "16px",
  };

  const thStyles = {
    backgroundColor: "#f2f2f2",
    padding: "8px",
    textAlign: "left",
  };

  const tdStyles = {
    border: "1px solid #ddd",
    padding: "8px",
  };

  return (
    <div style={cardStyles}>
      <h2>JSON Data</h2>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={thStyles}>Key</th>
            <th style={thStyles}>Value</th>
          </tr>
        </thead>
        <tbody>
          {keyValueArray.map(([key, value], index) => (
            <tr key={index}>
              <td style={tdStyles}>{key}</td>
              <td style={tdStyles}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JsonCard;
