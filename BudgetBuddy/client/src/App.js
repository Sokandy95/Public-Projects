import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './variables/variables.css'

import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';
import { useState } from 'react';
import { MISC_BUDGET_ID, useBudgets } from './contexts/BudgetsContext'

import BudgetCard from './components/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal';
import MiscBudgetCard from './components/MiscBudgetCard';
import TotalBudgetCard from './components/TotalBudgetCard';
import ViewExpensesModal from './components/ViewExpensesModal';
import logo from './images/BUDGETBUDDY.png'

function App() {
  const [ showAddBudgetModal, setShowAddBudgetModal ] = useState(false);
  const [ showAddExpenseModal, setShowAddExpenseModal ] = useState(false);
  const [ viewExpensesModalBudgetId, setViewExpensesModalBudgetId ] = useState();
  const [ addExpenseModalBudgetId, setAddExpenseModalBudgetId ] = useState();
  const { budgets, getBudgetExpenses } = useBudgets();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  }

  return (
    <body>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <img src={logo} id="logo" alt="budget_buddy_logo" className="me-auto"/>
          {/* modal will disappear once submitted */}
          <Button style={{ color: "white" }} variant="primary" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
          <Button variant="outline-primary" onClick={openAddExpenseModal}>Add Expense</Button>
        </Stack>
        <section 
          style={{
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
            gap: "1rem", 
            alignItems:"flex-start"}}>
              {/* map and display all budgets created */}
              {budgets.map(budget => {
                // take the total and add the amount. If there is no total, display 0
                const amount = getBudgetExpenses(budget.id).reduce((total,expense) => total + expense.amount, 0);
                return (
                  <BudgetCard 
                    name={budget.name}
                    key={budget.id}
                    amount={amount} 
                    max={budget.max}
                    onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                    onViewExpenseClick={() => setViewExpensesModalBudgetId(budget.id)}
                  />
                )
              })}
              <MiscBudgetCard onAddExpenseClick={openAddExpenseModal} onViewExpenseClick={() => setViewExpensesModalBudgetId(MISC_BUDGET_ID)}/>
              <TotalBudgetCard />
        </section>
      </Container>
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
      <AddExpenseModal show={showAddExpenseModal} defaultBudgetId={addExpenseModalBudgetId} handleClose={() => setShowAddExpenseModal(false)}/>
      <ViewExpensesModal budgetId={viewExpensesModalBudgetId} handleClose={() => setViewExpensesModalBudgetId()}/>
    </body>
  );
}

export default App;