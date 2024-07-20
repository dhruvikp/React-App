import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {

   

    return (
        <div class="expense-item">
            
            <ExpenseDate date = {props.date}/>

            <div class="expense-item_description">
                <h2>{props.title}</h2>
                <div class="expense-item_price"> ${props.amount} </div>
            </div>
        </div>
    )
}

export default ExpenseItem;