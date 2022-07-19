
import React from "react";
import "./ExpenseForm.css"
import Card from "../UI/Card";

const ExpenseForm = () => {
    return (
        <Card className="form_expense">
            <form className="form__body">
                <label><h4>Title</h4></label>
                <input type="text" />
                <label><h4>Type</h4></label>
                <input type="text" />
                <label><h4>Date</h4></label>
                <input type="date" min="2022-1-1" max="2022-12-31" />
                <label><h4>Amount</h4></label>
                <input type="Number" min="1" max="100000" />
                <div>
                    <button type="Submit" className="submit submit-black"><h4>Submit</h4></button>
                </div>
            </form>
        </Card>
    );
}


export default ExpenseForm;