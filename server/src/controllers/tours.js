const express = require('express');
const tourTableInstance  = require('../models/tours');
const destinationInstance  = require('../models/destinations');

const Instance = tourTableInstance;
const Instance2 = destinationInstance;

const getData = async (req, res, next) => {
    try {
        const respondata = await Instance.getAllTours();
        if (!respondata) {
            console.error('Failed to fetch data');
            return undefined;
        }
        const dataObjects = respondata.map(items => items.toJSON());
        res.json(dataObjects);
    } catch (err) {
        console.error('Failed to fetch cate', err);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};

const getDataId = async (req, res, next) => {
    try {
        const id = req.params.id;

        const respondata = await Instance.getTourById(id);

        if (!respondata) {
            console.error('Failed to fetch Data');
            return res.status(404).json({ error: 'data not found' });
        };

        const dataObjects = respondata.toJSON();

        const respondata2 = await Instance2.getById(dataObjects.destination_id);

        const dataObjects2 = respondata2.toJSON();

        res.json({ tour: dataObjects, destination: dataObjects2 });

    } catch (err) {
        console.error('Failed to fetch data', err);
        res.status(500).json({ error: 'Failed to fetch data' });
    };
};

const getDiscountPrice = async (req, res, next) => {
    try {
        const respondata = await Instance.getToursWithDiscount();
        if (!respondata) {
            console.error('Failed to fetch data');
            return undefined;
        }
        const dataObjects = respondata.map(items => items.toJSON());
        res.json(dataObjects);
    } catch (err) {
        console.error('Failed to fetch data err', err);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};

const getDataAndDes = async (req, res, next) => {
    try {
        const respondata = await Instance.getAllTours();

        if (!respondata) {
            console.error('Failed to fetch Data');
            return res.status(404).json({ error: 'data not found' });
        };

        const dataObjects = respondata.map(obj => obj.toJSON());

        // Duyệt qua từng tour
        for (let i = 0; i < dataObjects.length; i++) {
            // Lấy destination_id của mỗi tour
            const destinationId = dataObjects[i].destination_id;

            // Lấy dữ liệu tương ứng từ bảng destinations
            const respondata2 = await Instance2.getById(destinationId);

            // Thêm dữ liệu từ bảng destinations vào đối tượng tour
            dataObjects[i].destination = respondata2.toJSON();
        }

        res.json({ tours: dataObjects });

    } catch (err) {
        console.error('Failed to fetch data', err);
        res.status(500).json({ error: 'Failed to fetch data' });
    };
};

const getTransportationFT = async (req, res, next) => {
    try {
        const trans = req.params.tpft;

        const respondata = await Instance.getToursByTransportation(trans);

        if (!respondata) {
            console.error('Failed to fetch Data');
            return res.status(404).json({ error: 'data not found' });
        };

        const dataObjects = respondata.map(items => items.toJSON());
        res.json(dataObjects);

    } catch (err) {
        console.error('Failed to fetch data', err);
        res.status(500).json({ error: 'Failed to fetch data' });
    };
};

const getStartDateFT = async (req, res, next) => {
    try {
        const date = req.params.date;

        const respondata = await Instance.getToursByStartDate(date);

        if (!respondata) {
            console.error('Failed to fetch Data');
            return res.status(404).json({ error: 'data not found' });
        };

        const dataObjects = respondata.map(items => items.toJSON());
        res.json(dataObjects);

    } catch (err) {
        console.error('Failed to fetch data', err);
        res.status(500).json({ error: 'Failed to fetch data' });
    };
};

const getDepartmentLocationFT = async (req, res, next) => {
    try {
        const location = req.params.location;

        const respondata = await Instance.getToursByDepartureLocation(location);

        if (!respondata) {
            console.error('Failed to fetch Data');
            return res.status(404).json({ error: 'data not found' });
        };

        const dataObjects = respondata.map(items => items.toJSON());
        res.json(dataObjects);

    } catch (err) {
        console.error('Failed to fetch data', err);
        res.status(500).json({ error: 'Failed to fetch data' });
    };
};

const getPriceRangeFT = async (req, res, next) => {
    try {
        const { min, max } = req.params;

        const respondata = await Instance.getToursByPriceRange(parseInt(min), parseInt(max));

        if (!respondata) {
            console.error('Failed to fetch Data');
            return res.status(404).json({ error: 'data not found' });
        };

        const dataObjects = respondata.map(items => items.toJSON());
        res.json(dataObjects);
    } catch (err) {
        console.error('Failed to fetch data', err);
        res.status(500).json({ error: 'Failed to fetch data' });
    };
};

const getDateRangeFT = async (req, res) => {
    const { range } = req.params;

    let minDays, maxDays;

    switch (range) {
        case '1-3':
            minDays = 1;
            maxDays = 3;
            break;
        case '4-7':
            minDays = 4;
            maxDays = 7;
            break;
        case '8-14':
            minDays = 8;
            maxDays = 14;
            break;
        case 'over-14':
            minDays = 14;
            maxDays = null;
            break;
        default:
            return res.status(400).json({ error: 'Invalid date range' });
    }

    try {
        const respondata = await Instance.getToursByDateRange(minDays, maxDays);
        if (!respondata) {
            console.error('Failed to fetch Data');
            return res.status(404).json({ error: 'data not found' });
        };
        const dataObjects = respondata.map(items => items.toJSON());
        res.json(dataObjects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getGoLocationFT = async (req, res, next) => {
    try {
        const { location } = req.params;
        const provinces = await Instance2.getProvinces(location);

        if (!provinces) {
            console.error('Failed to fetch data');
            return res.status(404).json({ error: 'Data not found' });
        }

        const dataObjects = provinces.map(obj => obj.toJSON());
        const tours = [];

        console.log(dataObjects)

        await Promise.all(dataObjects.map(async (obj) => {
            const destinationId = obj.id;
            const tour = await Instance.getDestination(destinationId);
            if (tour) {
                if (typeof tour.toJSON === 'function') {
                    tours.push(tour.toJSON());
                } else {
                    tours.push(tour);
                }
            }
        }));

        res.json({ tours });

    } catch (err) {
        console.error('Failed to fetch data', err);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};


module.exports = {
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
};

