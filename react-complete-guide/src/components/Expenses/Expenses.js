import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import React, { useState } from 'react';

const Expenses = (props) => {

    const [defaultFilterValue, setDefaultFilterValue] = useState('2022');

    const filterChangeHandler = (seletedFilter) => {
        setDefaultFilterValue((prevFilter) => seletedFilter);
    }

    return (
        <Card className="card_expenses">
            <h1>Expenses</h1>
            <ExpenseFilter defaultFilterValue={defaultFilterValue} onChangeFilter={filterChangeHandler}></ExpenseFilter>
            {props.expenses.filter((expense) => { return expense.date.getFullYear() === Number(defaultFilterValue) })
                .map((expense) => (<ExpenseItem key={expense.id} title={expense.title} date={expense.date} tag={expense.tag} amount={expense.amount}></ExpenseItem>))}
        </Card >
    );
}

export default Expenses;

