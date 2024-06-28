import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './components/pages/Home';
import Travel from './components/pages/Travel';
import Detail from './components/pages/Detail';
import Login from './components/pages/Login';
import Singup from './components/pages/Singup';
import InformationPayment from './components/pages/InformationPayment';
import Payment from './components/pages/Payment';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/detail" element={<Detail />} />

          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/inforpm" element={<InformationPayment />} />
          <Route path="/payment" element={<Payment />} />

        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
