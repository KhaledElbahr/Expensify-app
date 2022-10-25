import React from 'react';
import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Header from '../Expensify/Header';

export const PublicRoutes = ({ isAuthenticated }) => (
    isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoutes);
