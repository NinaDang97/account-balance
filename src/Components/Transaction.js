import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Transaction extends Component { 
    renderAmountType = () => {
        const {type, amount} = this.props;
        let P;
        if(type === 'income')
            P = <p className="amount" style={{color: 'green'}}>+ {amount}</p>
        else if(type === 'expense')
            P = <p className="amount" style={{color: 'red'}}>- {amount}</p>
        return P;
    }

    render(){
        const {description, time} = this.props;
        return (
            <div className="transaction_item">
                <p>{description}</p> 
                <p>{time}</p> 
                {this.renderAmountType()}
            </div>
        )  
    }     
}

Transaction.propTypes = {
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Transaction;