
import React, { useState } from "react";
import "./ExpenseForm.css"
import Card from "../UI/Card";

const ExpenseForm = () => {

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [amouunt, setAmount] = useState('');


    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     type: '',
    //     date: '',
    //     amount: ''
    // });

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title: event.target.value
        //     }

        // });
        // console.log(event.target.value);
    }

    const typeChangeHandler = (event) => {
        setType(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     type: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         type: event.target.value
        //     }

        // });
        // console.log(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         date: event.target.value
        //     }

        // });
        // console.log(event.target.value);
    }

    const numberChangeHandler = (event) => {
        setAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         amount: event.target.value
        //     }

        // });
        // console.log(event.target.value);
    }


    const submitHandler = (event) => {
        event.preventDefault();
        const expenseObject = {
            title: title,
            tag: type,
            date: new Date(date),
            amount: amouunt
        }
        console.log(expenseObject);
    }

    return (
        <Card className="form_expense">
            <form className="form__body" onSubmit={submitHandler}>
                <label><h4>Title</h4></label>
                <input type="text" onChange={titleChangeHandler} />
                <label><h4>Type</h4></label>
                <input type="text" onChange={typeChangeHandler} />
                <label><h4>Date</h4></label>
                <input type="date" onChange={dateChangeHandler} min="2022-1-1" max="2022-12-31" />
                <label><h4>Amount</h4></label>
                <input type="Number" onChange={numberChangeHandler} min="1" max="100000" />
                <div>
                    <button type="Submit" className="submit submit-black"><h4>Submit</h4></button>
                </div>
            </form>
        </Card>
    );
}


export default ExpenseForm;