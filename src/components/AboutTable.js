import React from "react";
import "./AboutTable.css";

function AboutTable() {
  return (
    <div>
      <table>
        <tr>
          <td>HTML & CSS</td>
          <td className="td2">Serverless</td>
          <td className="td3">Scrum</td>
        </tr>
        <tr>
          <td>Programming</td>
          <td className="td2">Restful API</td>
          <td className="td3">Test-Driven Dev</td>
        </tr>
        <tr>
          <td>Database</td>
          <td className="td2">Javascript</td>
          <td className="td3">Software Testing</td>
        </tr>
        <tr>
          <td>Git & Github</td>
          <td className="td2">Single Page App</td>
          <td className="td3">UX/UI Designer</td>
        </tr>
      </table>
    </div>
  );
}

export default AboutTable;
