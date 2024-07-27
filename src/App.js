import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';


const DUMP_EXPENSES = [
  { id: "e1", title: 'Sony TV', amount: 800.49, date: new Date(2021, 2, 12) },
  { id: "e2", title: 'Car Insurance', amount: 500.49, date: new Date(2023, 2, 12) },
  { id: "e3", title: 'New Wooden Desk', amount: 400.49, date: new Date(2023, 2, 12) },
  { id: "e4", title: 'New Bike', amount: 900.49, date: new Date(2024, 2, 12) }
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMP_EXPENSES);


  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);

    setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      }
    ); 

  }

  return (
    <div>
      <h1>::  Expense Management application ::</h1>
      <NewExpense onExpenseAdded={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
