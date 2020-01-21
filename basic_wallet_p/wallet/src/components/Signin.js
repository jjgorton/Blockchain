import React, { useState } from 'react';

const Signin = ({ filterTransactions, setUserID }) => {
    const [id, setId] = useState('');

    const handleChanges = e => {
        e.preventDefault();
        setId(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setUserID(id);
        filterTransactions(id);
    };

    return (
        <div>
            <h2>{id}</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <input
                    className='id'
                    placeholder='User ID'
                    name='userId'
                    type='text'
                    value={id}
                    onChange={handleChanges}
                />
                <button>GO</button>
            </form>
        </div>
    );
};

export default Signin;
