import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Main Customer Facing website
import Index from './pages/main_website_pages/Index';

//Ticketing Software Website
import Dashboard from './pages/client_portal_pages/Index';

//Default 404 Page
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index page="Index" />} />
          <Route path='/Calendar' element={<Dashboard page="Calendar" />} />
          <Route path='/CustomerLogin' element={<Index page="CustomerLogin" />} />
          <Route path='/Dashboard' element={<Dashboard page="Index" />} />
          <Route path='/ManageUsers' element={<Dashboard page="Users" />} />
          <Route path='/Rolodex' element={<Dashboard page="Rolodex" />} />
          <Route path='/Tickets' element={<Dashboard page="TicketManager" />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
