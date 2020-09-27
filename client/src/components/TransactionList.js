import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {

    const { transaction, getTransaction } = useContext(GlobalContext)

    useEffect(() => {
        getTransaction();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transaction.map((transactions) => {
                    return (
                        <Transaction key={transactions.id} transaction={transactions}/>
                    )
                })}

            </ul>
        </div>
    )
}
