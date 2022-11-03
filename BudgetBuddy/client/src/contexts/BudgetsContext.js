import React, { useContext, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

const BudgetsContext = React.createContext();

export const MISC_BUDGET_ID = "Miscellaneous"

export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
    // use custom hook to save values into local storage
    const [ budgets, setBudgets ] = useLocalStorage("budgets", [])
    const [ expenses, setExpenses ] = useLocalStorage("expenses", [])

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }
    function addExpense({ desc, amount, budgetId }) {
        setExpenses(prevExpenses => {
            return [...prevExpenses, {id: uuidV4(), desc, amount, budgetId}]
        })
    }
    function addBudget({ name, max }) {
        setBudgets(prevBudgets => {
            if (prevBudgets.find(budget => budget.name === name)){
                return prevBudgets
            }
            return [...prevBudgets, {id: uuidV4(), name, max}]
        })
    }
    function deleteBudget({ id }) {
        setExpenses(prevExpenses => {
            return prevExpenses.map(expense => {
                // if the expense matches the id, put in the misc category, otherwise return the expense/s
                if(expense.budgetId !== id) return expense
                return { ...expense, budgetId: MISC_BUDGET_ID }
            })
        })
        setBudgets(prevBudgets => {
            // return budgets that do NOT match the ID
            return prevBudgets.filter(budget => budget.id !== id)
        })

    }
    function deleteExpense({ id }) {
        setExpenses(prevExpenses => {
            // return expenses that do NOT match the ID
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }
    
    return <BudgetsContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
    }}>{ children }</BudgetsContext.Provider>
}