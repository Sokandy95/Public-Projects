// Modal window to add a budget

import React from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useRef } from 'react'
import { useBudgets } from '../contexts/BudgetsContext';

export default function AddBudgetModal ({ show, handleClose }) {
    const nameRef = useRef()
    const maxRef = useRef()
    const { addBudget } = useBudgets()
    function handleSubmit(e) {
        e.preventDefault();
        addBudget({
            name: nameRef.current.value,
            max: parseFloat(maxRef.current.value)
        })
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" required/>
                    </Form.Group>
                    <Form.Group controlId="max" className="mb-3">
                        <Form.Label>Budget Amount</Form.Label>
                        <Form.Control ref={maxRef} type="number" min={0} step={0.01} required/>
                    </Form.Group>
                    <section className="d-flex justify-content-end">
                        <Button style={{color: "white"}} variant="primary" type="submit">Add Budget</Button>
                    </section>
                </Modal.Body>
            </Form>
        </Modal>
    )
}