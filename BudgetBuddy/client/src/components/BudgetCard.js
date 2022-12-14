import { Card, ProgressBar, Stack, Button } from 'react-bootstrap';
import { currencyFormatter } from '../utils'

export default function BudgetCard({ name, amount, max, grey, hideButtons, onAddExpenseClick, onViewExpenseClick }) {
    const classNames = []
    if (amount > max) {
        classNames.push("bg-danger", "bg-opacity-10")
    } else if (name === "TOTAL SPENDING") {
        classNames.push("bg-dark","text-white")
    } else if (grey) {
        classNames.push('bg-light')
    }
    return(
        <Card className={classNames.join(" ")}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-item-baseline fw-normal mb-3">
                    <section className="me-2">{name}</section>
                    <section className='d-flex align-items-baseline'>{currencyFormatter.format(amount)} 
                            {max && (
                                <span className='text-muted fs-6 ms-1'>{currencyFormatter.format(max)}</span>
                            )}
                    </section> 
                </Card.Title>
                { max && (<ProgressBar className="rounded-pill" variant={getProgressBarVariant(amount, max)} min={0} max={max} now={amount}/> )}
                {! hideButtons && ( 
                    <Stack direction="horizontal" gap="2" className="mt-4">
                        <Button style={{ color: "white" }} variant='primary' className='ms-auto' onClick={onAddExpenseClick}>Add Expense</Button>
                        <Button variant='secondary' onClick={onViewExpenseClick}>View Expenses</Button>
                    </Stack> 
                )}
            </Card.Body>
        </Card>
    )
}

function getProgressBarVariant(amount, max) {
    const ratio = amount / max
    if (ratio < 0.5) return "primary"
    if (ratio < 0.75) return "warning"
    return "danger"
}