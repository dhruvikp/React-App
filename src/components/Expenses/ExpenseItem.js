import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
   const [title, setTitle] = useState(props.title);

    return (
        
            <Card className="expense-item">
            
            <ExpenseDate date = {props.date}/>

            <div class="expense-item_description">
                <h2>{title}</h2>
                <div class="expense-item_price"> ${props.amount} </div>
            </div>
        </Card>
       
        
    )
}

export default ExpenseItem;