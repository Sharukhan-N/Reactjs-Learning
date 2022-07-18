import "./ExpenseItem.css";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    return (
        <Card className="card_expense_item">
            <div className="card__body">
                <span className="tag tag-blue">{props.tag}</span>
                <h3>{props.date.toDateString()}</h3>
                <h4>{props.title}</h4>
                <ExpenseAmount amount={props.amount}></ExpenseAmount>
            </div>
        </Card>
    );
}


export default ExpenseItem;