import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Description from '../Input/Description';
import Amount from '../Input/Amount';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 3,
            type: 'income',
            description: '',
            amount: ''
        }
    }

    handleChangeInput = (event) => {
        const value = 
            (event.target.name === 'amount' ? parseFloat(event.target.value) : event.target.value)
        this.setState({
            [event.target.name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {description, amount} = this.state;
        if(description !== '' && (typeof amount === 'number' && amount >= 0))
        {
            const day = new Date();
            this.setState((prevState) => {
                this.props.addTransaction({...this.state, 
                    date: day.getDate() + '/' + (day.getMonth() + 1) + '/' + day.getFullYear(), time: day.getHours() + ':' + day.getMinutes()
                });
                return {
                    id: prevState.id + 1,
                    date: '',
                    type: 'income',
                    description: '',
                    amount: ''
                }
            })
        } else {
            alert('Invalid Input');
        }
    }

    render(){
        const {type, description, amount} = this.state;
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <button type="button" onClick={() => this.props.showFormFunc(false)}>X</button>
                <label>Type: </label>
                <select name="type" value={type} onChange={this.handleChangeInput}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <Description 
                    isEdit={true} 
                    description={description} 
                    handleChangeInput={this.handleChangeInput}
                />
                <Amount 
                    isEdit={true} 
                    amount={amount}
                    type={type} 
                    handleChangeInput={this.handleChangeInput}
                />
                <button type="submit">Add</button>  
            </form>
        )
    }
}

Form.propTypes = {
    showFormFunc: PropTypes.func,
    addTransaction: PropTypes.func
}

export default Form;
