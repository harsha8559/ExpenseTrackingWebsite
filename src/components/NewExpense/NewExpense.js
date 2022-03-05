import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {

    const [isEditing, setisEditing] = useState(false);

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData

        };
        props.onAddExpense(expenseData);
        setisEditing(false);

    };


    const startEditingHandler = () => {
        setisEditing(true);
    }

    const stopEditingHAndler = () => {
        setisEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingHAndler} />}

        </div>
    )
}
