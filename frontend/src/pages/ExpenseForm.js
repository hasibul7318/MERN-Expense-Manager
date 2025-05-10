import React, { useState } from 'react';
import { handleError } from '../utils';

function ExpenseForm({ addTransaction }) {
  const [expenseInfo, setExpenseInfo] = useState({
    amount: '',
    text: '',
    date: '',
    method: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const addExpenses = (e) => {
    e.preventDefault();
    const { amount, text, date, method } = expenseInfo;
    if (!amount || !text || !date || !method) {
      handleError('Please fill in all fields');
      return;
    }
    addTransaction(expenseInfo);
    setExpenseInfo({ amount: '', text: '', date: '', method: '' });
  };

  return (
    <div className='container'>
      <h1>Expense Manage</h1>
      <form onSubmit={addExpenses}>
        <div>
          <label htmlFor='text'>Expense Detail</label>
          <input
            onChange={handleChange}
            type='text'
            name='text'
            placeholder='Enter your Expense Detail...'
            value={expenseInfo.text}
          />
        </div>

        <div>
          <label htmlFor='amount'>Amount</label>
          <input
            onChange={handleChange}
            type='number'
            name='amount'
            placeholder='Enter your Amount...'
            value={expenseInfo.amount}
          />
        </div>

        <div>
          <label htmlFor='date'>Date</label>
          <input
            onChange={handleChange}
            type='date'
            name='date'
            value={expenseInfo.date}
          />
        </div>

        <div>
          <label htmlFor='method'>Payment Method</label>
          <select name='method' onChange={handleChange} value={expenseInfo.method}>
            <option value=''>Select Method</option>
            <option value='credit card'>Credit Card</option>
            <option value='debit card'>Debit Card</option>
            <option value='upi'>UPI</option>
            <option value='offline'>Offline</option>
          </select>
        </div>

        <button type='submit'>Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
