import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';


export const Balance = () => {

    const { transaction } = useContext(GlobalContext)
    const amount = transaction.map((transaction) => transaction.amount)
    const totalExpense = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>€{numberWithCommas(totalExpense)}</h1>
        </div>
    )
}
