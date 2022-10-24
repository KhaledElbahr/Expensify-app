import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseList from '../Expensify/ExpenseList';
import ExpenseListFilters from '../Expensify/ExpenseListFilters';
import AddExpensePage from '../Expensify/AddExpensePage';
import EditExpensePage from '../Expensify/EditExpensepage';
import ExpensesSummary from '../Expensify/ExpensesSummary';
import LoginPage from '../Expensify/LoginPage';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export const Navbar = () => (
    <expenseheader>
        <h1>Expensify</h1>
            <div>
                <NavLink to="/dashboard" className="link active" exact="true">Dashboard</NavLink>
                <NavLink to="/add-expense" className="link active">Create Expense</NavLink>
                <NavLink to="/about" className="link active">About</NavLink>
                <NavLink to="/contact-us" className="link active">Contact Us</NavLink>
            </div>
    </expenseheader>
)

export const HomePage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

const AboutPage = () => (
    <div>
        About Page works successfully!
    </div>
)

const ContactUsPage = () => (
    <div>
        Contact us Page works successfully!
    </div>
)

export const NotFoundPage = () => (
    <div style={{ textAlign: 'center' }}>
        <h1>Not Found Page</h1>
        <h2>404</h2>
        <NavLink to="/" replace>Go back to Home Page -></NavLink>
    </div>
)
  
const AppRouter = () => (
        <div>
        <Router>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path="/" element={<LoginPage />} exact={true} />
                </Route>
                <Route element={<PrivateRoutes />}>
                    <Route path="/dashboard" element={<HomePage />} />
                    <Route path="/add-expense" element={<AddExpensePage />} />
                    <Route path="/edit-expense/:id" element={<EditExpensePage />} />
                </Route>
                {/* <Route path="/about" element={<AboutPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} /> */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    </div>
);

export default AppRouter;