import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import PeopleListComponent from './pages/peopleList';
import PeopleDetails from './pages/personDetails';
import ErrorPage from './pages/errorPage';

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route index  element={<PeopleListComponent />} />
                <Route path="/Details"  element={<PeopleDetails />} />
                <Route path="/Error" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default MainRouter;