import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Signin from './components/Signin';
import TransactionsList from './components/TransactionsList';

function App() {
    const [userID, setUserID] = useState();
    const [chain, setChain] = useState([]);
    const [myTransactions, setMyTransactions] = useState([]);
    const [balance, setBalance] = useState();

    useEffect(() => {
        axios
            .get('http://localhost:5000/chain')
            .then(res => {
                console.log(res.data.chain);
                setChain(res.data.chain);
            })
            .catch(err => alert(err));
    }, [userID]);

    function total(transactions, id) {
        if (transactions[0]) {
            const out = transactions
                .filter(transaction => transaction.sender === id)
                .map(obj => obj.amount)
                .reduce((acc, curr) => acc + curr);

            const income = transactions
                .filter(transaction => transaction.recipient === id)
                .map(obj => obj.amount)
                .reduce((acc, curr) => acc + curr);

            return income - out;
        }
    }

    const filterTransactions = id => {
        const arr = [];
        for (let block of chain) {
            for (let transaction of block.transactions) {
                if (transaction.recipient === id || transaction.sender === id) {
                    arr.push(transaction);
                }
            }
        }
        setMyTransactions(arr);
        setBalance(total(myTransactions, userID));
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <Signin
                    filterTransactions={filterTransactions}
                    setUserID={setUserID}
                />
                <TransactionsList
                    myTransactions={myTransactions}
                    userID={userID}
                    balance={balance}
                />
                <div className='chain'>
                    {chain.map((coin, i) => {
                        return (
                            <>
                                <img
                                    key={i}
                                    src={logo}
                                    className='App-logo'
                                    alt='logo'
                                />
                                <p>--></p>
                            </>
                        );
                    })}
                </div>
            </header>
        </div>
    );
}

export default App;
