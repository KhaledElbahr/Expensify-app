import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseList from './../Expensify/ExpenseList';
import ExpenseListFilters from './../Expensify/ExpenseListFilters';
import AddExpensePage from './../Expensify/AddExpensePage';
import { EditExpensePage } from './../Expensify/EditExpensepage';

export const Navbar = () => (
    <header>
        <h1>Expensify</h1>
            <div>
                <NavLink to="/" className="link active" exact="true">Dashboard</NavLink>
                <NavLink to="/add-expense" className="link active">Create Expense</NavLink>
                <NavLink to="/about" className="link active">About</NavLink>
                <NavLink to="/contact-us" className="link active">Contact Us</NavLink>
            </div>
    </header>
)

export const HomePage = () => (
    <div>
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
    <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} exact={true} />
                <Route path="/add-expense" element={<AddExpensePage />} />
                <Route path="/edit-expense/:id" element={<EditExpensePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </Router>
);

export default AppRouter;