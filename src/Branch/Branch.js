import React from 'react';
import Select from 'react-select';
import './Branch.css'

const Branch = (props) => {

    var departments = [
        {value : 'Dep1', label : 'Dep1'},
        {value : 'Dep2', label : 'Dep2'},
        {value : 'Dep3', label : 'Dep3'}
    ];

    var branches = [
        {value : 'Branch1', label : 'Branch1'},
        {value : 'Branch2', label : 'Branch2'},
        {value : 'Branch3', label : 'Branch3'}
    ];

    return (
        <div className="Branch">
            <form>
                <label>Select Department : </label>
                <Select options={departments} className="dropdown">Select Department : </Select>
                <br/>
                <label> Select Branch : </label>
                <Select options={branches} className="dropdown"></Select>
                <br/>
                <button onClick={props.submit}>Submit</button>
            </form>
            <div className="courseDisplay">Something goes here</div>
        </div>
    )
}

export default Branch;