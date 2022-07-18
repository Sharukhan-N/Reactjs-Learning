import "./ExpenseAmount.css"

function ExpenseAmount(props) {
    return (<div>
        <h5>Amount</h5>
        <div className="amount amount-yellow">
            <small>${props.amount}</small>
        </div>
    </div>);
}


export default ExpenseAmount;