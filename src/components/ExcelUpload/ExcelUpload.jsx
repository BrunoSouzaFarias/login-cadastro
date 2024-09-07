import React, { useState } from "react";
import { ExcelRenderer } from "react-excel-renderer";
import "./ExcelUpload.css";

function ExcelUpload() {
  const [rows, setRows] = useState([]);

  const handleFileUpload = (event) => {
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        setRows(resp.rows);
      }
    });
  };

  return (
    <div className="excel-upload">
      <input type="file" onChange={handleFileUpload} />
      {rows.length > 0 && (
        <table>
          <thead>
            <tr>
              {rows[0].map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <td key={colIndex}>{col}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExcelUpload;
