import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import './Expenses.css';
import Card from "../UI/Card";
import {useState} from 'react'
import ExpensesChart from "./ExpensesChart";


function Expenses(props){
    const expenses = props.item;

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterHandler = (selectedYear)=>{
        setFilteredYear(selectedYear);
        console.log(filteredYear);
    }

    const filteredExpenses = expenses.filter(expense => {
        const year = expense.date.getFullYear().toString() === filteredYear
        return year ;
    });




    return (
        <>
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterHandler} selected={filteredYear}></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpenseList items={filteredExpenses}></ExpenseList>
        </Card>
        </>
    )
}
export default Expenses;