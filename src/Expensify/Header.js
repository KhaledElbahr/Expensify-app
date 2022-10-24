import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from './../redux/actions/auth';

export const Header = ({ startLogout, user }) => (
    <header className="header">
        <div className="container">
            <div className="header__content">
                <Link to="/dashboard">
                    <h1 className="header__title">Expensify</h1>
                </Link>
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProp = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProp)(Header);