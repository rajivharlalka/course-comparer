import React, { useState } from "react";
import Select from "react-select";
import "./Branch.css";
import dep from "./../data/dep";
import branch from "./../data/dep-branch";
import course from './../data/course';

const Branch = (props) => {
  const [branches, updateBranches] = useState([]);
//   const [Value, setValue] = useState("Select dep and Course")

  var departments = dep.department.map((e) => {
    return { label: e, value: e };
  });

  function updateBranch(e) {
    var br = branch[e].map((val) => {
      return { label: val, value: val };
    });
    updateBranches(br);
    console.log(branches);
  }

  function handleDepChange(e) {
    updateBranch(e.value);
    console.log(e.value);
  }

  function handleCourseChange(e){
    // setValue((course[e.value]).toString);
    console.log(course[e.value]);
  }

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
        <Select options={branches} className='dropdown' onChange={(e)=> handleCourseChange(e)}></Select>
        <br />
        <button onClick={props.submit}>Submit</button>
      </form>
      <div className='courseDisplay'>Add dept and course</div>
    </div>
  );
};

export default Branch;
