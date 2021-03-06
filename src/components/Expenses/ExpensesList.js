import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

export default function ExpensesList(props) {

    let expensesContent = <p className='expenses-list__fallback'>No Expenses Found.</p>;
    if (props.items.length === 0) {
        return expensesContent;
    }

    return (
        <ul className='expenses-list'>
            {
                props.items.map((expense) =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />

                )}
        </ul>
    )
};
