import React, { useEffect } from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ myTransactions, userID, balance }) => {
    console.log('list', myTransactions);

    return (
        <div>
            <h2>Balance: {balance}</h2>
            <h4>Transactions:</h4>
            <table>
                <tr>
                    <th>Who</th>
                    <th>amount</th>
                </tr>
                {myTransactions.map((transaction, i) => {
                    return (
                        <Transaction
                            transaction={transaction}
                            userID={userID}
                            key={i}
                        />
                    );
                })}
            </table>
        </div>
    );
};

export default TransactionsList;
