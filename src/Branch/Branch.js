import React, { useState } from "react";
import Select from "react-select";
import "./Branch.css";
import dep from "./../data/dep";
import branch from "./../data/dep-branch";
import course from "./../data/course";

const Branch = (props) => {
  const [branches, updateBranches] = useState([]);
  const [Text, setText] = useState({ text: "Select dep and Course" });

  var departments = dep.department.map((e) => {
    return { label: e, value: e };
  });

  function updateBranch(e) {
    var br = branch[e].map((val) => {
      return { label: val, value: val };
    });
    updateBranches(br);
    // console.log(branches);
  }

  function handleDepChange(e) {
    updateBranch(e.value);
    // console.log(e.value);
  }

  function handleCourseChange(e) {
    setText(course[e.value]);
  }
  
  var semdata;
  function getSemData() {
    var entity = Object.keys(Text);
    semdata = entity.map((e) => {
      return Text[e];
    });
  }
  getSemData();

  return (
    <div className='Branch'>
      <form>
        <label>Select Department : </label>
        <Select
          options={departments}
          className='dropdown'
          onChange={(e) => handleDepChange(e)}
        >
          Select Department :{" "}
        </Select>
        <br />
        <label> Select Branch : </label>
        <Select
          options={branches}
          className='dropdown'
          onChange={(e) => handleCourseChange(e)}
        ></Select>
        <br />
        <button onClick={props.submit}>Submit</button>
      </form>
      <div className='courseDisplay'>
        {console.log(semdata)}
      </div>
    </div>
  );
};

export default Branch;
