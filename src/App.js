import logo from './logo.svg';
import './App.css';
import ExpenseItem from './ExpenseItem';

function App() {

  const expenses = [
    {id:"e1", title: 'Sony TV', amount: 800.49, date: new Date(2021,2,12)},
    {id:"e2", title: 'Car Insurance', amount: 500.49, date: new Date(2022,2,12)},
    {id:"e3", title: 'New Wooden Desk', amount: 400.49, date: new Date(2023,2,12)},
    {id:"e4", title: 'New Bike', amount: 900.49, date: new Date(2024,2,12)}
  ]

  return (
    <div>
      <h1>Welcome to simplilearn!!!</h1>
      <h2>::  Expense Management application ::</h2>

      <ExpenseItem title = {expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}> </ExpenseItem>
      <ExpenseItem title = {expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}> </ExpenseItem>
      <ExpenseItem title = {expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}> </ExpenseItem>
      <ExpenseItem title = {expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}> </ExpenseItem>
     
    </div>
  );
}

export default App;
