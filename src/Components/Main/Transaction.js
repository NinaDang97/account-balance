import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Description from '../Input/Description';
import Amount from '../Input/Amount';
import Button from '../Input/Button';

class Transaction extends PureComponent { 
    constructor(props){
        super(props);
        this.state = {
            description: this.props.description,
            amount: this.props.amount,
            isEdit: false
        }
    }

    displayEditInputs = () => {
        const isEdit = true;
        this.setState({isEdit});
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onCancel = () => {
        this.setState({
            isEdit: false,
            description: this.props.description,
            amount: this.props.amount
        })
    }

    onSave = () => {
        this.props.onSave(this.props.id, this.state.description, this.state.amount);
        this.setState({isEdit: false});
    }

    render(){
        const {id, time, type} = this.props;
        const {isEdit, description, amount} = this.state;
        return (
            <div className="transaction_item">
                <Description 
                    isEdit={isEdit}
                    description={description}
                    handleChangeInput={this.handleChange}
                /> 
                <div>{time}</div> 
                <Amount 
                    isEdit={isEdit}
                    amount={amount}
                    handleChangeInput={this.handleChange}
                    type={type}
                />
                <div className="control">
                    <Button 
                        isEdit={isEdit}
                        displayEditInputs={this.displayEditInputs}
                        onDelete={() => this.props.delete(id)}
                        onCancel={this.onCancel}
                        onSave={this.onSave}
                    />
                </div>
            </div>
        )  
    }     
}

Transaction.propTypes = {
    id: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    delete: PropTypes.func.isRequired
}

export default Transaction;