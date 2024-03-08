import ExpenseItem from './ExpenseItem';

const Expenselist = props => {

    if(props.items.lenght === 0) {
        return  <h2 className='expense-list__fallback'>Found no expense</h2>
    }


return <ul className="">

 {props.items.map(
    expense =>
        <ExpenseItem  key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}>  </ExpenseItem>
 )
 }
</ul>
}
export default Expenselist;