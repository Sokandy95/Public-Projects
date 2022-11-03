import React from 'react'
import { MISC_BUDGET_ID, useBudgets } from '../contexts/BudgetsContext';
import BudgetCard from "./BudgetCard"

export default function TotalBudgetCard() {
    const { expenses, budgets } = useBudgets();
    const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
    const max = budgets. reduce((total, budget) => total + budget.max, 0)
    if (amount === 0) return null
    return (
        <BudgetCard amount={amount} name="TOTAL SPENDING" grey max={max} hideButtons/>
    )
}
