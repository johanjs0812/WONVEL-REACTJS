const express = require('express');
const { 
    getData, 
    getDataId, 
    getDiscountPrice, 
    getDataAndDes, 
    getTransportationFT,
    getStartDateFT,
    getDepartmentLocationFT,
    getPriceRangeFT,
    getDateRangeFT,
    getGoLocationFT
} = require('../controllers/tours');

const tourRouter = express.Router();

tourRouter.get('/api/v1/tours', getData);
tourRouter.get('/api/v1/tours_des', getDataAndDes);
tourRouter.get('/api/v1/tours/:id', getDataId);
tourRouter.get('/api/v2/tours/discount_price', getDiscountPrice);

// ------------------ FILTER

tourRouter.get('/api/v1/tours/filter/startdate/:date', getStartDateFT);
tourRouter.get('/api/v1/tours/filter/trans/:tpft', getTransportationFT);
tourRouter.get('/api/v1/tours/filter/date_range/:range', getDateRangeFT);
tourRouter.get('/api/v1/tours/filter/price_range/:min/:max', getPriceRangeFT);
tourRouter.get('/api/v1/tours/filter/go_location/:location', getGoLocationFT);
tourRouter.get('/api/v1/tours/filter/department_location/:location', getDepartmentLocationFT);

module.exports = tourRouter;
