import React from 'react';
import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Header from '../Expensify/Header';

export const PrivateRoutes = ({ isAuthenticated }) => (
    isAuthenticated ? (<> <Header /> <Outlet /> </>) : <Navigate to="/" />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoutes);
