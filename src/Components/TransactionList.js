import React from 'react';
import Transaction from './Transaction';
import PropTypes from 'prop-types';

const TransactionList = (props) => {
    const renderTransList = props.values.map((item, i) => <Transaction key={i} {...item} />)
    return (
        <div className="detail_list">
            {renderTransList}
        </div>
)}

TransactionList.propTypes = {
    values: PropTypes.arrayOf(PropTypes.object)
}

export default TransactionList;