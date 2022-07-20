import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"


const DUMMY_EXPENSES = [
  { id: 1, title: "Health Insurance", date: new Date(2022, 6, 1), tag: "Insurance", amount: 56.04 },
  { id: 2, title: "Bike Loan", date: new Date(2018, 6, 2), tag: "Loan", amount: 87.55 },
  { id: 3, title: "Tuition Fees", date: new Date(2020, 6, 3), tag: "Payments", amount: 643.00 },
  { id: 4, title: "Grocery", date: new Date(2019, 6, 4), tag: "House", amount: 22.24 },
  { id: 5, title: "Shopping", date: new Date(2018, 6, 5), tag: "Family", amount: 5 }
];


const App = () => {


  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpense = (expense) => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense];
    })
  }


  return (
    <div>
      <NewExpense onExpenseAdded={addExpense}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div >
  );
}

export default App;
