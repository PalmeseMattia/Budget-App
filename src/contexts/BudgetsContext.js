import React, { createContext, useContext, useState} from 'react'
import { v4 as uuidV4 } from 'uuid'
const BudgetContext = createContext()

export function UseBudgets(){
    return useContext(BudgetContext)
}

export const BudgetProvider = ({ children }) => {
    const [budgets, setBudget] = useState([])
    const [expenses, setExpenses] = useState([])
    
    function getBudgetExpenses(budgetId){
        return expenses.filter(expense => expense.budgetId === budgetId)
    }
    
    function addExpense(){}
    
    function addBudget({name, max}){
        setBudget(prevBudget => {
            return [
                ...prevBudget,
                {
                    id: uuidV4(),
                    name,
                    max
                }
            ]
        })
    }
    function deleteBudget(){}
    function deleteExpense(){}

    return (
        <BudgetContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense
        }}>
            {children}
        </BudgetContext.Provider>
    )
}  