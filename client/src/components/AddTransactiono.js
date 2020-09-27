import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransactiono = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onRegister = (e) => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
    }

    


    return (
        <div>
            <h3>Add New Transaction</h3>

            <form onSubmit={onRegister}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter Text..."></input>
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                    <input type="text" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter Text..."></input>
                </div>

                <button className="btn"> Add Transaction </button>
            </form>
        </div>
    )
}
