import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEllipsisV from '@fortawesome/fontawesome-free-solid/faEllipsisV';

class Transaction extends Component { 
    constructor(props){
        super(props);
        this.state = {
            description: this.props.description,
            amount: this.props.amount,
            isEdit: false
        }
    }
    
    renderAmountType = () => {
        const {type, amount} = this.props;
        let P;
        if(type === 'income')
            P = <div className="amount" style={{color: 'green'}}>+ {amount}</div>
        else if(type === 'expense')
            P = <div className="amount" style={{color: 'red'}}>- {amount}</div>
        return P;
    }

    displayDescription = () => {
        let description;
        !this.state.isEdit ? description = this.props.description : description = <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        return description;
    }

    displayAmount = () => {
        let amount;
        !this.state.isEdit ? amount = this.renderAmountType() : amount = <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} />
        return amount;
    }

    displayBtn = () => {
        let control;
        !this.state.isEdit 
        ? control = 
            <div>
                <FontAwesomeIcon className="controlBtn" icon={faEllipsisV} />
                <div className="controlSystem">
                    <div onClick={this.displayEditInputs}>Edit</div> 
                    <div onClick={() => this.props.delete(this.props.id)}>Delete</div>
                </div>
            </div>
        : control = 
        <div>
            <button onClick={() => this.setState({isEdit: false})}>Cancel</button>
            <button onClick={() => {this.props.onSave(this.props.id, this.state.description, this.state.amount); this.setState({isEdit: false})}}>Save</button>
        </div>
        return control;
    }

    displayEditInputs = () => {
        const isEdit = true;
        this.setState({isEdit});
    }

    handleChange= (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        const {time} = this.props;
        return (
            <div className="transaction_item">
                <div>{this.displayDescription()}</div> 
                <div>{time}</div> 
                <div>{this.displayAmount()}</div>
                <div className="control">
                    {this.displayBtn()}
                </div>
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