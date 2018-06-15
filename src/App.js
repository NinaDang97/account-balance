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

  addTransaction = (newTrans) => {
    //Add new transaction to existing list
    let index = -1;
    let transactionList = [...this.state.transactionList];
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
  }

  showFormFunc = (showOrHide) => {
    this.setState({
      showForm: showOrHide
    })
  }

  render() {
    const {balance, showForm} = this.state;

    return (
      <div className="App">
        <Navbar balance={balance} showFormFunc={this.showFormFunc} />
        {showForm && <Form showFormFunc={this.showFormFunc} addTransaction={this.addTransaction} />}

        <TransactionDate list={this.state.transactionList} />
      </div>
    );
  }
}

export default App;
