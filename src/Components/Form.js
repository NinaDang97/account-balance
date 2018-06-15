import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 3,
            date: '',
            time: '',
            type: 'income',
            description: '',
            amount: 0
        }
    }

    handleChangeInput = (event) => {
        if(event.target.name === 'amount') {
            this.setState({amount: Number(event.target.value)})
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const day = new Date();
        this.setState((prevState) => {
            this.props.addTransaction({...this.state, date: day.getDate() + '/' + (day.getMonth() + 1) + '/' + day.getFullYear(), time: day.getHours() + ':' + day.getMinutes()});
            return {
                id: prevState.id + 1,
                date: '',
                type: 'income',
                description: '',
                amount: 0
            }
        })
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
                <input type="text" name="description" value={description} onChange={this.handleChangeInput} placeholder="Description" />
                <input type="text" name="amount" value={amount} onChange={this.handleChangeInput} placeholder="Amount" />
                
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
