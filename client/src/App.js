import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainLayout from './components/layout/MainLayout';
import Home from './components/pages/Home';
import Travel from './components/pages/Travel';
import Detail from './components/pages/Detail';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import InformationPayment from './components/pages/InformationPayment';
import Payment from './components/pages/Payment';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/inforpm/:id" element={<InformationPayment />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </MainLayout>
      </Router>
    </Provider>
  );
}

export default App;
