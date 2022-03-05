import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';


export default function Expenses(props) {

    const [filteredValue, setfilteredValue] = useState('2020');

    const applyFilter = (selectedValue) => {
        setfilteredValue(selectedValue);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredValue;
    });


    return (
        <Card className='expenses'>
            <div>
                <ExpenseFilter selected={filteredValue} onApplyFilter={applyFilter} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </div>
        </Card>

    )
}
