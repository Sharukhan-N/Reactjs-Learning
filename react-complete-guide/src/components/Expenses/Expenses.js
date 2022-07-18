import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
    return (
        <Card className="card_expenses">
            <h1>Expenses</h1>
            <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} tag={props.expenses[0].tag} amount={props.expenses[0].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date} tag={props.expenses[1].tag} amount={props.expenses[1].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} date={props.expenses[2].date} tag={props.expenses[2].tag} amount={props.expenses[2].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[3].title} date={props.expenses[3].date} tag={props.expenses[3].tag} amount={props.expenses[3].amount}></ExpenseItem>
            <ExpenseItem title={props.expenses[4].title} date={props.expenses[4].date} tag={props.expenses[4].tag} amount={props.expenses[4].amount}></ExpenseItem>
        </Card >
    );
}

export default Expenses;

