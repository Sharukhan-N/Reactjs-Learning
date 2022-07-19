import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../UI/Card";

const ExpenseItem = (props) => {


    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated");
    }


    return (
        <Card className="card_expense_item">
            <div className="card__body">
                <span className="tag tag-blue">{props.tag}</span>
                <h3>{props.date.toDateString()}</h3>
                <span className="tag_end tag-black" onClick={clickHandler}>Edit</span>
                <h4>{title}</h4>
                <ExpenseAmount amount={props.amount}></ExpenseAmount>
            </div>
        </Card>
    );
}


export default ExpenseItem;