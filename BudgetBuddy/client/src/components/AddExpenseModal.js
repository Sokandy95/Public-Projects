// Modal window to add a budget

import React from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useRef } from 'react'
import { useBudgets, MISC_BUDGET_ID } from '../contexts/BudgetsContext';

export default function AddExpenseModal ({ show, handleClose, defaultBudgetId }) {
    const descRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const { addExpense, budgets } = useBudgets()

    function handleSubmit(e) {
        e.preventDefault();
        addExpense({
            desc: descRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value
        })
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="desc" className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descRef} type="text" required/>
                    </Form.Group>
                    <Form.Group controlId="amount" className="mb-3">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control ref={amountRef} type="number" min={0} step={0.01} required/>
                    </Form.Group>
                    <Form.Group controlId="budgetId" className="mb-3">
                        <Form.Label>Budget</Form.Label>
                        <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
                            <option id={MISC_BUDGET_ID}>Miscellaneous</option>
                            {budgets.map(budget => (
                                <option key={budget.id} value={budget.id}>
                                    {budget.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <section className="d-flex justify-content-end">
                        <Button style={{color: "white"}} variant="primary" type="submit">Add Expense</Button>
                    </section>
                </Modal.Body>
            </Form>
        </Modal>
    )
}