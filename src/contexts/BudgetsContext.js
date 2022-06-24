import React, { createContext, useContext, useState} from 'react'
import { v4 as uuidV4 } from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage'
const BudgetContext = createContext()

export function UseBudgets(){
    return useContext(BudgetContext)
}

export const BudgetProvider = ({ children }) => {
    const [budgets, setBudget] = useLocalStorage([])
    const [expenses, setExpenses] = useLocalStorage([])
    
    function getBudgetExpenses(budgetId){
        return expenses.filter(expense => expense.budgetId === budgetId)
    }
    
    function addExpense({ description, amount, budgetId}){
        setExpenses(prevExpenses => {
            return [
                ...prevExpenses,
                {
                    id: uuidV4(),
                    description,
                    amount,
                    budgetId
                }
            ]
        })
    }
    
    function addBudget({name, max}){
        setBudget(prevBudget => {
            if (prevBudget.find(budget => budget.name === name)){
                return prevBudget
            }
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

    function deleteBudget({ id }){
        setBudget(prevBudget => {
            return prevBudget.filter(budget => budget.id !== id)
        })
    }

    function deleteExpense({ id }){
        setExpenses(prevExpenses =>{
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }

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