
import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [enteredFilter, setEnteredFilter] = useState('2021');
  console.log(enteredFilter);

  const expensesFilterHandler = e =>{
    setEnteredFilter(e.target.value);
  }
  props.onChangeFilter(enteredFilter);
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={expensesFilterHandler} selected={enteredFilter}>
          <option value='2022'>2022</option>
          <option value='2021' selected>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
