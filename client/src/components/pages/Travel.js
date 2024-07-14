import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useApi from '../../hooks/toursApi';
import useChildManagement from '../../hooks/tourFT';
import { TOUR_GET_ALL_DATA } from "../../constants/apiConfig";

import { tinh } from "../../constants/provinces";
import { buttons1, buttons2 } from "../../constants/buttonFilter";

import OderByFilter from '../common/oderbyFilter';
import StartLocationFilter from '../common/startlocationFilter';
import GoLocationFilter from '../common/golocationFilter';
import TimeDayTravelFilter from '../common/timedaytravelFilter';
import DayStartFilter from '../common/daystartFilter';
import TranspostionFilter from '../common/transpotionFilter';
import BudgeFilter from '../common/budgetFilter';
import ToursList from '../common/tourslist';

import LoaderComponent from '../common/loaders';

const Style = () => {
  return (
    <style>
      {`
      .container{
        width: 100%;
        max-width: 1320px;
        margin-left: auto;
        margin-right: auto;

        padding-left: 12px;
        padding-right: 12px;
      }

      .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: .5rem;
        margin-top: 0;
      }

      h2, h3 {
        font-size: 20px;
        line-height: 40px;
      }

      .row{
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 0;
        display: flex;
        flex-wrap: wrap;
        margin-left: calc(var(--bs-gutter-x) / -2);
        margin-right: calc(var(--bs-gutter-x) / -2);
        margin-top: calc(var(--bs-gutter-y)* -1);
      }

      .d-flex {
        display: flex;
      }

      .align-items-center {
        align-items: center;
      }

      .breadcrumbs__wrapper {
        height: auto;
        list-style-type: none;
        margin: 0;
        padding-top: 5px;
      }

      .breadcrumbs__wrapper li {
        color: #2d4271;
        display: inline;
        font-size: 13px;
        font-weight: 400;
        margin: 0 10px;
      }

      .breadcrumbs__wrapper li a {
        color: #2d4271;
        text-decoration: underline;
      }

      /* ====================================LEFT============================== */

      .left-bar{
        padding-left: 0;
        display: flex;
        flex: 0 0 auto;
        padding-right: 12px;
        width: 100%;
      }

      .sidebar-inner {
        background: #f9f9f9;
        width: 25%;
      }

      .tour-search-result__filter__brand{
        background-color: #f8f9fa;
        padding: 1rem;
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

      .font-weight-bold{
        font-weight: 700;
      }

      .location-container{
        background: #f9f9f9;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
        margin-bottom: 20px;
        padding: 15px;
      }

      .tour-search-result__filter__heading {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-bottom: .5rem;
        padding-top: .5rem;
        padding-left: 1rem;
        padding-right: 1rem;

        background-color: #4d4aef;
        color: #fff;
      }

      .fw-bold{
        font-weight: 700;
      }

      .pt-2{ padding-top: 5rem;}

      .start-to-stop{
        margin-bottom: 1rem;
      }

      h5.s-title {
        color: #2d4271;
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        margin-bottom: 15px;
        text-transform: uppercase;
      }

      .css-b62m3t-container {
        position: relative;
        box-sizing: border-box;
      }

      .css-13cymwt-control {
        -webkit-box-align: center;
        align-items: center;
        cursor: default;
        display: flex;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        justify-content: space-between;
        min-height: 38px;
        position: relative;
        transition: all 100ms ease 0s;
        background-color: rgb(255, 255, 255);
        border-color: rgb(204, 204, 204);
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        box-sizing: border-box;
        outline: 0px !important;
      }

      .sidebar-inner .css-13cymwt-control {
        border: 1px solid #d8d8d8 !important;
      }

      .css-hlgwow {
        -webkit-box-align: center;
        align-items: center;
        display: grid;
        flex: 1 1 0%;
        flex-wrap: wrap;
        position: relative;
        overflow: hidden;
        padding: 2px 8px;
        box-sizing: border-box;
      }

      .css-1dimb5e-singleValue, .css-qbdosj-Input {
        background: 0 0 !important;
        border: none;
        box-shadow: none !important;
        color: #2d4271 !important;
        cursor: pointer;
        font-size: 13px;
        font-weight: 900 !important;
      }

      .css-1dimb5e-singleValue {
        grid-area: 1 / 1 / 2 / 3;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgb(51, 51, 51);
        margin-left: 2px;
        margin-right: 2px;
        box-sizing: border-box;
      }

      .sidebar-inner .css-1dimb5e-singleValue, .sidebar-inner .react-datepicker__input-container input {
        color: #2d4271 !important;
        font-weight: 400 !important;
        line-height: 1.5 !important;
        padding-left: 15px !important;
      }

      .sidebar-inner .css-1dimb5e-singleValue {
        font-size: 15px !important;
      }

      .css-19bb58m {
        visibility: visible;
        flex: 1 1 auto;
        display: inline-grid;
        grid-area: 1 / 1 / 2 / 3;
        grid-template-columns: 0px min-content;
        margin: 2px;
        padding-bottom: 2px;
        padding-top: 2px;
        color: rgb(51, 51, 51);
        box-sizing: border-box;
      }

      .css-1wy0on6 {
        -webkit-box-align: center;
        align-items: center;
        align-self: stretch;
        display: flex;
        flex-shrink: 0;
        box-sizing: border-box;
      }

      .css-1xc3v61-indicatorContainer {
        display: flex;
        transition: color 150ms ease 0s;
        color: rgb(204, 204, 204);
        padding: 8px;
        box-sizing: border-box;
      }

      .css-1xc3v61-indicatorContainer i{
        font-size: 20px;
      }

      .tour-search-result__filter__block{

        margin-bottom: 1.5rem !important;
      }

      .tour-search .sidebar .s-title {
        color: #2d4271;
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        margin-bottom: 15px;
        text-transform: uppercase;
      }

      .btn-group, .btn-group-vertical {
        position: relative;
        display: inline-flex;
        vertical-align: middle;
      }

      .col-6 {
        flex: 0 0 auto;
        width: 50%;
        padding: 0 4px;
        margin-top:8px;
      }

      .btn-stitll{
        padding: 6px 12px;
        width: 100%;
        font-weight: 400;
        line-height: 1.5;
        padding: .375rem .75rem;
        text-align: center;
        text-decoration: none;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        border: 1px solid transparent;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 0 #e2f3ff;
        font-size: clamp(.75rem,.6567rem + .4494vw,1.05rem);
      }

      .datepciker-wrap{
        align-items: center;
        background: #fff;
        border: 1px solid #d8d8d8;
        border-radius: 5px;
        box-sizing: border-box;
        display: flex;
        height: 40px;
        padding: 0 15px;
      }

      .bxs-calendar-week{
        color: #2d4271;
        font-size: 26px;
        margin-right: 8px;
      }

      .bg-transparent {
        background-color: transparent !important;
      }

      .calendarWrap {
        display: inline-block;
        position: relative;
        width: 100%;
      }

      .form-control {
        -webkit-appearance: none;
        appearance: none;
        background-clip: padding-box;
        background-color: #fff;
        border: 1px solid #d8d8d8;
        border-radius: .25rem;
        color: #2d4271;
        display: block;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        padding: .375rem .75rem;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        width: 100%;
      }

      .bg-transparent {
        background-color: transparent !important;
      }

      .input-date {
        border: none;
        box-shadow: none !important;
        color: #2d4271;
        cursor: pointer;
        font-size: 15px;
        font-weight: 700 !important;
        padding: 0 !important;
        width: 100% !important;
      }

      .s-mark-title {
        align-items: center;
        color: #2d4271;
        display: flex;
        font-weight: 700;
        line-height: 19px;
        margin-bottom: 25px;
        white-space: nowrap;
      }

      .btn-price
      {
        width: 25%;
        padding: 5px 10px;
        border-radius: 5px;
        border: #2d4271 1px solid;
      }

      .btn-price input {
        width: 100%;
        outline: none;
      }

      .box-btn-se{
        flex-grow: 1;
        height: 35px;
      }

      .box-btn-se button{
        background: none;
        width: 100%;
        background-color: #4d4aef;
        height: 100%;
        border-radius: 5px;
        color: #e2f3ff;
        cursor: pointer;
      }

      .ranger-price.giatien{
        margin-bottom: 1.5rem;
      }

      /* ==================================RIGHT ============== */

      .right-bar{
        flex: 0 0 auto;
        width: 75%;
        background: #fff;
        padding: 30px 0 30px 10px;
      }

      .pen-3{
        margin-bottom: 1rem !important;
      }


      h1.heading-1{
        border-bottom: .5px solid #d5d5d5;
        font-size: 2rem;
        text-align: center;
        font-weight: 700 !important;
        padding-bottom: 1.5rem !important;
        padding-top: 1.5rem !important;
      }

      .py-2 {
        padding-bottom: .5rem !important;
        padding-top: .5rem !important;
      }

      .py-2 p {
        margin-bottom: 1rem;
      }

      .order-by {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }

      .order-by .order-by-title {
        color: #2d4271;
        font-weight: 400;
        line-height: 22px;
      }

      .order-by .order-by-left .order-wrap {
        align-items: center;
        display: flex;
      }

      .order-by .order-by-left .order-wrap span {
        color: #2d4271;
        line-height: 22px;
        margin-right: 12px;
      }

      .order-by .order-by-left .order-wrap select {
        background: #fff;
        border: 1px solid #d8d8d8;
        border-radius: 5px;
        box-sizing: border-box;
        color: #2d4271;
        font-weight: 700;
        height: 40px;
        line-height: 19px;
        padding-left: 20px;
        padding-right: 10px;
        text-align: center;
        text-transform: uppercase;
        width: 270px;
      }

      /* ===============TOUR LIST================= */

      .contai-product{
        display: flex;
      }

      .contai-product .col-col{
        margin-top: var(--bs-gutter-y);
        max-width: 100%;
        padding-left: calc(var(--bs-gutter-x) / 2);
        padding-right: calc(var(--bs-gutter-x) / 2);

        flex: 0 0 auto;
        width: 33.33333%;
      }

      .card-item{
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;

        background: #fff;
        border: 1px solid #dddfe2;
        border-radius: 10px;
        box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
      }

      .box-top{
        position: relative;
      }

      .box-img{
        border-radius: 10px 10px 0 0;
        overflow: hidden;
        padding-top: 71.14285714%;
        position: relative;
      }

      .box-img a img {
        bottom: auto;
        height: 100%;
        left: 50%;
        object-fit: cover;
        position: absolute;
        right: auto;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        transition: transform .2s ease, -webkit-transform .2s ease;
        width: 100%;
      }

      .box-center{
        padding: 1rem;
      }

      .box-center .p-1{
        color: #2d4271;
        font-size: 13px;
        margin-bottom: .25rem;
      }

      .box-center .p-2{
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        color: #2d4271;
        display: -webkit-box;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        max-height: 4rem;
        max-width: 100%;
        min-height: 4rem;
        text-overflow: ellipsis;
        white-space: normal;

        -webkit-line-clamp: 2 !important;
        line-height: 1.2;
        max-height: 3.6em;
        min-height: 2.5rem;
        overflow: hidden;

        margin-bottom: .25rem;
      }

      .box-center .p-2 a{
        color: #2d4271;
        text-decoration: none;
      }

      .box-center .p-3{
        margin-bottom: 10px;
      }

      .bxs-coupon{
        margin-right: 5px;
        font-size: 20px;
      }

      .box-bot{
        color: #2d4271;
        margin-bottom: 1rem;
      }

      .box-last{
        margin-bottom: .5rem;

      }

      .tour-item__price--old{
        color: #2d4271;
      }

      .tour-item__price--old__number{
        text-decoration: line-through;
      }

      .tour-item__price--current{
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }

      .tour-item__price--current__number {
        color: #e01600;
        font-size: 18px;
        font-weight: 700;
        padding-right: .5rem !important;
      }

      .tour-item__price--current__discount {
        background-color: #e01600;
        border-radius: 5px;
        color: #fff;
        font-size: 11px;
        font-weight: 700;
        padding: .25rem !important;
      }

      .padding-1rem{
        padding: 1rem;
      }

      .tour-item__price__timer {
        border: 1px solid #4d4aef;
        border-radius: 5px;
        color: #4d4aef;
        font-size: 11px;
        font-weight: 700;
        text-align: center;

        padding-bottom: .5rem !important;
        padding-top: .5rem !important;
        cursor: pointer;
      }

      .tour-item__price__timer:hover {
        background-color:#e01600;
        color: white;
        border: 1px solid #e01600;
      }

      .pad-rs{
        padding: 1rem 1rem 0 1rem;
      }

      .pad-top-rs{
        padding-top: 0;
      }

      /* ---------------- */

      .box-select-loaction-go{
        height: 300px;
        overflow-y: scroll;
        border-radius: 5px;
        position: absolute;
        z-index: 2;
        width: 100%;
        top: 0;
        background-color: white;
        display: none;
      }

      .box-select-loaction-go .option-local{
        padding: 10px;
        background-color: white;
        cursor: pointer;
      }

      .box-select-loaction-go .option-local:hover{
        background-color: rgba(62, 154, 219, 0.264);
      }

      /* Thanh cuộn */
      .box-select-loaction-go::-webkit-scrollbar {
          width: 5px;
      }

      /* Khu vực bên trong thanh cuộn */
      .box-select-loaction-go::-webkit-scrollbar-track {
          background: #f1f1f1;
      }

      /* Khu vực di chuyển */
      .box-select-loaction-go::-webkit-scrollbar-thumb {
          background: #888;
      }

      /* Thêm hiệu ứng khi rê chuột lên */
      .box-select-loaction-go::-webkit-scrollbar-thumb:hover {
          background: #555;
      }

      .btn-stitll.active {
        background-color: #4d4aef;
        color: white; 
      }

      .mat-mdc-form-field {
        height: 0px;
        position: absolute;
        top: 0;
      }

      .mat-calendar-body-cell-content:hover {
        background-color: #dddddd;
      }

      .mat-calendar-body-today .mat-calendar-body-cell-content {
        background-color: #007bff;
        color: #fff;
      }

      .mat-calendar-body-selected .mat-calendar-body-cell-content {
        background-color: #007bff;
        color: #fff;
      }

      `}
    </style>
  );
};

const Travel = () => {

  const { selectedValue, handleChildClick, clickedComponent } = useChildManagement();

  const { data, loading, fetchData, FILTER } = useApi();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    fetchData(TOUR_GET_ALL_DATA);
  }, [fetchData]);


  useEffect(() => {
    if (loading) {
      setShowLoader(true);
    } else {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);
  
  let tours = Array.isArray(data) ? data : [];
  if (tours.length === 0) {
    tours = [];
  }

  if (showLoader) {
    return (
    <>
      < LoaderComponent />
    </>)
  }

  return (
    <>
  < Style/>
    <div className="tour-search">

      <div className="container">
        <div className="row">
          <ul className="breadcrumbs__wrapper d-flex align-items-center">
            <li>
              <Link style={{ marginLeft: '10px' }}>
                <span>Du lịch</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">

        <div className="row">

          <div className="left-bar">

            <div className="sidebar-inner">

              <div>
                <div className="tour-search-result__filter__brand">
                  <h2 className="font-weight-bold">Bộ lọc tìm kiếm</h2>
                </div>

                <div className="location-container">
                  <div>
                    <div className="tour-search-result__filter__heading">
                      <span className="fw-bold">Tất cả</span>
                    </div>

                    <div className="pt-2" style={{ paddingTop: '16px' }}>
                      < StartLocationFilter 
                        tinh={tinh} 
                        FILTER={FILTER} 
                        fetchData={fetchData} 

                        name="diemdi"
                        onClick={handleChildClick}
                        choose={selectedValue}
                        owner={clickedComponent}
                      />

                      < GoLocationFilter 
                        tinh={tinh} 
                        FILTER={FILTER} 
                        fetchData={fetchData} 

                        name="diemden"
                        onClick={handleChildClick}
                        choose={selectedValue}
                        owner={clickedComponent}
                      />

                      < TimeDayTravelFilter 
                        buttons1={buttons1} 
                        FILTER={FILTER} 
                        
                        name="timerange"
                        onClick={handleChildClick}
                        choose={selectedValue}
                        owner={clickedComponent}
                      />

                      < DayStartFilter 
                        FILTER={FILTER} 
  
                        name="date"
                        onClick={handleChildClick}
                        choose={selectedValue}
                        owner={clickedComponent}  
                      />

                      <br />

                      < TranspostionFilter 
                        buttons2={buttons2} 
                        FILTER={FILTER} 
                        
                        name="trans"
                        onClick={handleChildClick}
                        choose={selectedValue}
                        owner={clickedComponent}
                      />

                      < BudgeFilter 
                        FILTER={FILTER} 
  
                        name="budget"
                        onClick={handleChildClick}
                        choose={selectedValue}
                        owner={clickedComponent}
                      />

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="right-bar">
              <div className="pen-3">
                <h1 className="heading-1">Du lịch</h1>
                <div className="py-2">
                  <p className="card-text mb-1 text-justify"></p>
                  <div></div>
                  <p></p>
                </div>
              </div>

              <div>
                < OderByFilter x={tours} />
              </div>

              <div>
                < ToursList tours={tours} />
              </div>

            </div>
            
          </div>
        </div>

      </div>

    </div>

    </>
  );
};

export default Travel;