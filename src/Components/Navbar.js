import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => (
    <div className="navbar">
        <h3>Account Balance: ‎€{props.balance}</h3>
        <p><a onClick={() => props.showFormFunc(true)}>New Transaction</a></p>
    </div>
)

Navbar.propTypes = {
    balance: PropTypes.number.isRequired,
    showFormFunc: PropTypes.func
}

export default Navbar;