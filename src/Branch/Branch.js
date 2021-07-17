import React, { useState } from "react";
import Select from "react-select";
import { Table } from "react-bootstrap";

import "./Branch.css";
import dep from "./../data/dep";
import branch from "./../data/dep-branch";
import course from "./../data/course";

const Branch = (props) => {
  const [branches, setBranches] = useState([]);
  const [semesters, setSemesters] = useState({});
  const [courses, setCourses] = useState([]);

  const departments = dep.department.map((e) => {
    return { label: e, value: e };
  });

  function handleDepChange(e) {
    setBranches(branch[e.value].map((val) => ({ label: val, value: val })));
  }

  function handleBranchChange(e) {
    setSemesters(course[e.value]);
  }

  function handleSemesterChange(e) {
    setCourses(semesters[e.value]);
  }

  return (
    <div className="Branch">
      <form>
        <label>Select Department : </label>
        <Select
          options={departments}
          className="dropdown"
          onChange={(e) => handleDepChange(e)}
        >
          Select Department :{" "}
        </Select>
        <br />
        <label> Select Branch : </label>
        <Select
          options={branches}
          className="dropdown"
          onChange={(e) => handleBranchChange(e)}
        ></Select>
        <br />
        <label> Select Semester : </label>
        <Select
          options={Object.keys(semesters).map((val) => ({
            label: val,
            value: val,
          }))}
          className="dropdown"
          onChange={(e) => handleSemesterChange(e)}
        ></Select>
        <br />
      </form>
      <div className="courseDisplay">
        <Table striped bordered hover style={{fontSize: "0.9em"}}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Code</th>
              <th>Name</th>
              <th>L-T-P</th>
              <th>Credits</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((val, idx) => (
              <tr key={idx}>
                <td>{val.type || "---"}</td>
                <td>{val.code || "---"}</td>
                <td>{val.name || "---"}</td>
                <td>{val.ltp || "---"}</td>
                <td>{val.credits || "---"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Branch;
