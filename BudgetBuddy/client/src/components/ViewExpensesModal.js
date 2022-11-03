// Modal window to view expenses

import React from 'react'
import { Modal, Button, Stack } from 'react-bootstrap'
import { MISC_BUDGET_ID, useBudgets } from '../contexts/BudgetsContext';
import { currencyFormatter } from '../utils';

export default function ViewExpensesModal ({ budgetId, handleClose }) {
    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets()
    const expenses = getBudgetExpenses(budgetId)
    const budget = 
        MISC_BUDGET_ID === budgetId 
            ? { name: "misc", id: MISC_BUDGET_ID } 
            : budgets.find(b => b.id === budgetId)

    return (
        <Modal show={budgetId != null} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Stack direction="horizontal" gap="2">
                            <section>{budget?.name} expenses</section>
                            {budgetId !== MISC_BUDGET_ID && (
                                <Button onClick={() => {
                                    deleteBudget(budget)
                                    handleClose()
                                }}
                                variant = "outline-danger">
                                    Delete
                                </Button>
                            )}
                        </Stack>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack direction="vertical" gap="3">
                        {expenses.map(expense => (
                            <Stack direction="horizontal" gap="2" key={expense.id}>
                                <section className="me-auto fs-4">{expense.desc}</section>
                                <section className="fs-5">{currencyFormatter.format(expense.amount)}</section>
                                <Button 
                                    size="sm" 
                                    variant="danger" 
                                    onClick={() => deleteExpense(expense)}>
                                        Remove
                                </Button>
                            </Stack>
                        ))}
                    </Stack>
                </Modal.Body>
        </Modal>
    )
}