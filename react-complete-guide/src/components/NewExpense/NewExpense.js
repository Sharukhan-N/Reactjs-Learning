import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";
import Card from "../UI/Card";

const NewExpense = () => {
    return (<Card className="form_card_expenses">
        <h1>Add New Expense</h1>
        <ExpenseForm></ExpenseForm>
    </Card>)
}


export default NewExpense;