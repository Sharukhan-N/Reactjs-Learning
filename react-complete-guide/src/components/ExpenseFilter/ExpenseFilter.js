import React from "react";
import "./ExpenseFilter.css"

const ExpenseFilter = (props) => {

    const searchFilter = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="filter">
            <label><h4>Filter</h4></label>
            <select value={props.defaultFilterValue} onChange={searchFilter}>
                <option value="2022">2022</option>
                <option value="green" >Green</option>
                <option value="blue" >Blue</option>
                <option value="yellow" >Yellow</option>
            </select>
        </div>
    );
}


export default ExpenseFilter;