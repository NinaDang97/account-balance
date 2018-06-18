import React from 'react';
import TransactionList from './TransactionList';
import PropTypes from 'prop-types';

const TransactionDate = (props) => {
    const renderList = props.list.map((val, i) => (
        <div key={i}>
            <h4>{Object.keys(val)[0]}</h4>
            <TransactionList delete={props.delete} onSave={props.onSave} values={val[Object.keys(val)[0]]} />
        </div>
    ))
    return (
        <div className="transaction_list">
            {renderList}
        </div>
    )
}

TransactionDate.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TransactionDate;