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
                <option value="2020" >2020</option>
                <option value="2019" >2019</option>
                <option value="2018" >2018</option>
            </select>
        </div>
    );
}


export default ExpenseFilter;