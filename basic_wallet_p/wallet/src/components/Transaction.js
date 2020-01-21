import React from 'react';

const Transaction = props => {
    const flow = props.transaction.sender !== props.userID ? 'income' : 'out';

    return (
        <tr className='transaction'>
            <td>
                {props.transaction.sender !== props.userID
                    ? props.transaction.sender
                    : props.transaction.recipient}
            </td>
            <td className={flow}>{props.transaction.amount}</td>
        </tr>
    );
};

export default Transaction;
