import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const App = () => {

  const expenses = [
    {id:"e1", title: 'Sony TV', amount: 800.49, date: new Date(2021,2,12)},
    {id:"e2", title: 'Car Insurance', amount: 500.49, date: new Date(2022,2,12)},
    {id:"e3", title: 'New Wooden Desk', amount: 400.49, date: new Date(2023,2,12)},
    {id:"e4", title: 'New Bike', amount: 900.49, date: new Date(2024,2,12)}
  ]

  return (
    <div>
     <h1>::  Expense Management application ::</h1>
     <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
