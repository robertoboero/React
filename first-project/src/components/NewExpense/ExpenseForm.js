import './ExpenseForm.css';
import { useState } from 'react';



const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);

    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }

    const submithandler = (event) => {
        event.preventDefault();
        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate + 'T00:00:00'),
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

/*     /* const InputChangeHandler = (identifier, value) => {
    if(identifier==='title'){
        setEnteredTitle(value);
        console.log(enteredTitle);
    } else if (identifier ==='amount '){
        setEnteredAmount(value);
    } else if (identifier ==='date'){
        setEnteredDate(value);
    }


    } */
    return (
        <form onSubmit={submithandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={ titleChangeHandler }/* (event) => InputChangeHandler('title', event.target.value) *//>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step="0.01" onChange={ amountChangeHandler }/* (event) => InputChangeHandler('amount', event.target.value) *//>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2019-12-31' onChange={  dateChangeHandler }/* (event) => InputChangeHandler('date', event.target.value) *//>
                </div>

            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={props.cancelEdit}>Edit</button>
                <button type="submit" >Add expense</button>
            </div>

        </form>
    )

}

export default ExpenseForm;