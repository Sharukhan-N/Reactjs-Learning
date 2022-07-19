import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";
import Card from "../UI/Card";

const NewExpense = (props) => {

    const onExpenseSubmitted = (expense) => {
        const updatedExpense = {
            ...expense,
            id: Math.random.toString()
        }
        props.onExpenseAdded(updatedExpense);
    }


    return (<Card className="form_card_expenses">
        <h1>Add New Expense</h1>
        <ExpenseForm onFormSubmit={onExpenseSubmitted}></ExpenseForm>
    </Card>)
}


export default NewExpense;