import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import BudgetCard from './components/BudgetCard';

function App() {
  return (
    <Container className='my-4'>
      <Stack direction='horizontal' gap='2' className='mb4'>
        <h1 className='me-auto'>Budgets</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='outline-primary'>Add Expense</Button>
      </Stack>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', alignItems: 'flex-start'}}>
        
        <BudgetCard name='Entertainment' 
                    amount={600} 
                    max={1000}
                    gray
        ></BudgetCard>
        <BudgetCard name='Entertainment' 
                    amount={900} 
                    max={1000}
        ></BudgetCard>
        <BudgetCard name='Entertainment' 
                    amount={200} 
                    max={1000}
        ></BudgetCard>
      
      </div>
    
    </Container>
  )
}

export default App