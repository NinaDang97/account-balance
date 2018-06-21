import React from 'react';
import TransactionList from './TransactionList';
import PropTypes from 'prop-types';

const DateHeading = ({dateKey}) => (
    <h4>{dateKey}</h4>
)

const TransactionDate = (props) => {
    let renderList = null;
    renderList = props.list.map((val, i) => { 
        const dateKey =  Object.keys(val)[0];
        return (
            dateKey !== undefined
            ? 
            <div key={i}>
                <DateHeading dateKey={dateKey} />
                <TransactionList delete={props.delete} onSave={props.onSave} values={val[dateKey]} />
            </div>
            : 
            null
        )
    })
    return (
        <div className="transaction_list">
            <h1>Transaction List</h1>
            {renderList}
        </div>
    )
}

TransactionDate.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TransactionDate;