import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import TransactionDate from './Components/TransactionDate';
import './App.css';

class App extends Component {
  state = {
    transactionList: [
      {
        '20/3/2018': [
          {
            id: 0,
            date: '20/3/2018',
            time: '10:11',
            type: 'income',
            description: 'Bank investment profit',
            amount: 500
          },
          {
            id: 1,
            date: '20/3/2018',
            time: '10:11',
            type: 'expense',
            description: 'Restaurant',
            amount: 100
          }
        ]
      },
      {
        '14/6/2018': [
          {
            id: 2,
            date: '14/6/2018',
            time: '10:11',
            type: 'expense',
            description: 'Travel',
            amount: 200
          }
        ]
      }
    ],
    balance: 0,
    showForm: false
  }

  componentDidMount(){  
    const transactionList = [...this.state.transactionList];  
    const balance = this.calculateBalance(transactionList);    
    this.setState({balance});    
  }

  calculateBalance = (transactionList) => {
    let balance = 0;
    for(const transDate of transactionList){
      const keyDate = Object.keys(transDate)[0];
      for(const trans of transDate[keyDate]){
        trans.type === 'income' ? balance += trans.amount : balance -= trans.amount
      }
    }
    return balance;
  }

  addTransaction = (newTrans) => {
    //Add new transaction to existing list
    let index = -1;
    const transactionList = [...this.state.transactionList];
    const newTransDate = newTrans.date;
    //Find if the date exists or not to group into array
    for(const trans of transactionList){
      const keyDate = Object.keys(trans)[0];
      if(keyDate === newTransDate){
        trans[keyDate].push(newTrans);
        index = 1;
      }
    } 
    if(index === -1){
      const newObj = {};
      newObj[newTransDate] = [newTrans];
      transactionList.push(newObj);
    }
    const balance = this.calculateBalance(transactionList);    
    this.setState({transactionList, balance});
  }

  showFormFunc = (showOrHide) => {
    this.setState({
      showForm: showOrHide
    })
  }

  deleteTransaction = (id) => {
    let transactionList = [...this.state.transactionList];
    for(const transDate of transactionList){
      let keyDate = Object.keys(transDate)[0];
      let temptList = transDate[keyDate].filter((trans) => trans.id !== id);
      transDate[keyDate] = temptList;
    }
    const balance = this.calculateBalance(transactionList);  
    this.setState({balance, transactionList});
  }

  onSave = (id, description, amount) => {
    let transactionList = [...this.state.transactionList];
    for(const transDate of transactionList){
      let keyDate = Object.keys(transDate)[0];
      for(const trans of transDate[keyDate]){
        if(trans.id === id){
          trans.description = description;
          trans.amount = parseFloat(amount);
        }
      }
    }
    const balance = this.calculateBalance(transactionList);
    this.setState({balance, transactionList}); 
  }

  render() {
    const {balance, showForm} = this.state;

    return (
      <div className="App">
        <Navbar balance={balance} showFormFunc={this.showFormFunc} />
        {showForm && <Form showFormFunc={this.showFormFunc} addTransaction={this.addTransaction} />}

        <TransactionDate delete={this.deleteTransaction} onSave={this.onSave} list={this.state.transactionList} />
      </div>
    );
  }
}

export default App;
