import React from 'react';
import PropTypes from 'prop-types';

const Amount = (props) => {
    function displayAmount(){
        let amount = 
            (props.isEdit 
                ? <input type='text' name='amount' value={props.amount} onChange={props.handleChangeInput} placeholder='Amount' /> 
                : props.type === 'income'
                ? <div className="amount" style={{color: 'green'}}>+ {props.amount}</div>
                : <div className="amount" style={{color: 'red'}}>- {props.amount}</div>
            )
        return amount;
    }
    return (
        <div>
            {displayAmount()}
        </div>
    )
}

Amount.propTypes = {
    isEdit: PropTypes.bool.isRequired,
    displayEditInputs: PropTypes.func,
    onDelete: PropTypes.func,
    onCancel: PropTypes.func,
    onSave: PropTypes.func
}

export default Amount;