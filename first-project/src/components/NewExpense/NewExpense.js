import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';
import './NewExpense.css';
const NewExpense = (props) => {
    const [showAddNewExpense, setAddNewExpense] = useState(false)
    const showAddNewExpensehandler = () => {
        setAddNewExpense(true);
    }
    const hideAddNewExpensehandler = () => {
        setAddNewExpense(false);
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddexpense(expenseData);
        setAddNewExpense(false);
    }
    return (
        <Card className='new-expense'>
            {!showAddNewExpense && <button onClick={showAddNewExpensehandler}>Addnew Expense</button>}
            {showAddNewExpense &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelEdit={hideAddNewExpensehandler}></ExpenseForm>}
        </Card>
    );
}

export default NewExpense;