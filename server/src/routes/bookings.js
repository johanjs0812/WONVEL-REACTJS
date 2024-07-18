const express = require('express');
const { getData, getDataId, addData, getPayment, getYourOrder} = require('../controllers/bookings');

const bookingsRouter = express.Router();

bookingsRouter.get('/api/v1/bookings', getData);

bookingsRouter.get('/api/v1/bookings/:id', getDataId);

bookingsRouter.get('/api/v2/bookings/payment/:id', getPayment);

bookingsRouter.post('/api/v1/bookings', addData);

bookingsRouter.get('/api/v2/bookings/yourorder/:id', getYourOrder);

module.exports = bookingsRouter;
