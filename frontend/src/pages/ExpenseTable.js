import React from 'react';

// Helper function to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB'); // Format as dd-mm-yyyy
};

const ExpenseTable = ({ expenses, deleteExpens }) => {
  return (
    <div className="expense-list">
      {expenses.map((expense, index) => (
        <div key={index} className="expense-item">
          <div className="expense-description">{expense.text}</div>
          <div
            className="expense-amount"
            style={{ color: expense.amount > 0 ? '#27ae60' : '#c0392b' }}
          >
            ₹{expense.amount}
          </div>
          <div className="expense-date">{formatDate(expense.date)}</div>
          <div className="expense-method">{expense.method}</div>
          <button
            className="delete-button"
            onClick={() => deleteExpens(expense._id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseTable;
