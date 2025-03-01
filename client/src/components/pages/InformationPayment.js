import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import InforTourPmComponent from "../common/infor-tour-pm-page";
import TongQuanTourPmComponent from "../common/tong-quan-tour-pm";
import PaymentMethodComponent from "../common/payment-method";
import CheckoutPmComponent from "../common/checkout-Pm";
import SupportPmComponent from "../common/support-pm";

import { TOUR_GET_BY_ID_DATA } from "../../constants/apiConfig";

import useApi from "../../hooks/toursApi";
import useForm from "../../hooks/useFormPm";

import { addItem, addtour } from "../../redux/slices/paymentSlice";
import { setPreviousPageUrl } from "../../redux/slices/navigationSlice";

const Style = () => {
    return (
      <style>
        {`
          .checkout-head {
            border: 1px solid #e7e7e7;
          }

          @media (min-width: 992px) {
            .d-lg-block {
                display: block !important;
            }
          }

          @media (min-width: 768px) {
            .container, .container-md, .container-sm {
                max-width: 720px;
            }
          }
          @media (min-width: 576px) {
            .container, .container-sm {
                max-width: 540px;
            }
          }


          .container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
            margin-left: auto;
            margin-right: auto;
            padding-left: .75rem;
            padding-left: var(--bs-gutter-x, .75rem);
            padding-right: .75rem;
            padding-right: var(--bs-gutter-x, .75rem);
            width: 100%;
          }
          @media (min-width: 1400px) {
            .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
                max-width: 1320px;
            }
          }
          @media (min-width: 1200px) {
            .container, .container-lg, .container-md, .container-sm, .container-xl {
                max-width: 1140px;
            }
          }
          @media (min-width: 992px) {
            .container, .container-lg, .container-md, .container-sm {
                max-width: 960px;
            }
          }
          @media (min-width: 768px) {
            .container, .container-md, .container-sm {
                max-width: 720px;
            }
          }
          @media (min-width: 576px) {
            .container, .container-sm {
                max-width: 540px;
            }
          }

          @media (min-width: 992px) {
            .container, .container-lg, .container-md, .container-sm {
                max-width: 960px;
            }
          }

          @media (min-width: 1200px) {
            .container, .container-lg, .container-md, .container-sm, .container-xl {
                max-width: 1140px;
            }
          }

          @media (min-width: 1400px) {
            .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
                max-width: 1320px;
            }
          }

          .row {
            --bs-gutter-x: 1.5rem;
            --bs-gutter-y: 0;
            display: flex;
            flex-wrap: wrap;
            margin-left: calc(var(--bs-gutter-x) / -2);
            margin-right: calc(var(--bs-gutter-x) / -2);
            margin-top: calc(var(--bs-gutter-y)* -1);
          }

          .row>* {
            flex-shrink: 0;
            margin-top: var(--bs-gutter-y);
            max-width: 100%;
            padding-left: calc(var(--bs-gutter-x) / 2);
            padding-right: calc(var(--bs-gutter-x) / 2);
            width: 100%;
          }

          .checkout-head .head {
            align-items: center;
            color: #2d4271;
            display: flex;
            font-weight: 700;
            height: 60px;
            list-style-type: none;
            margin: 0;
            padding: 0 10px;
          }

          .checkout-head .head {
            align-items: center;
            color: #2d4271;
            display: flex;
            font-weight: 700;
            height: 60px;
            list-style-type: none;
            margin: 0;
            padding: 0 10px;
          }

          .col-12 {
            flex: 0 0 auto;
            width: 100%;
          }

          .checkout-head .head .checked {
            color: #4d4aef;
          }

          .checkout-head .head li {
            padding-right: 16px;
          }

          .bx-chevron-right{
            font-size: 20px;
          }

          /* ================================================ */

          .checkout-main {
            margin-bottom: 50px;
          }

          .col-12 {
            flex: 0 0 auto;
            width: 100%;
          }

          .checkout-main.order-tour .top .product {
            display: flex;
            margin-bottom: 20px;
            margin-top: 20px;
          }

          .checkout-main.order-tour .top .product .product-image {
            width: 30%;
          }

          .checkout-main.order-tour .top .product .product-image .image {
            overflow: hidden;
            padding-top: 74.96%;
            position: relative;
          }

          .checkout-main.order-tour .top .product .product-image .image img {
            border-radius: 10px 0 0 10px;
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

          .checkout-main.order-tour .top .product .product-content {
            background: #f9f9f9;
            padding: 15px 30px;
            width: 70%;
          }

          .checkout-main.order-tour .top .product .product-content .s-rate {
            align-items: center;
            display: flex;
            margin-bottom: 15px;
          }

          .checkout-main.order-tour .top .product .product-content .s-rate>span {
            align-items: center;
            background: #fdc432;
            border-bottom-right-radius: 5px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            color: #fff;
            display: flex;
            font-size: 16px;
            font-weight: 700;
            height: 32px;
            justify-content: center;
            line-height: 20px;
            margin-right: 11px;
            position: relative;
            width: 42px;
          }

          .checkout-main.order-tour .top .product .product-content .s-rate .s-comment {
            align-items: center;
            display: flex;
          }

          .checkout-main.order-tour .top .product .product-content .s-rate .s-comment .h4, .checkout-main.order-tour .top .product .product-content .s-rate .s-comment h4 {
            align-items: center;
            color: #2d4271;
            display: flex;
            font-size: 17px;
            font-weight: 700;
            line-height: 20px;
            margin-bottom: 0;
            margin-right: 10px;
          }

          .checkout-main.order-tour .top .product .product-content .s-rate .s-comment span {
            align-items: center;
            border-right: 1px solid #7d8fab;
            color: #2d4271;
            display: flex;
            font-size: 13px;
            font-weight: 400;
            margin-right: 10px;
            padding-right: 10px;
          }

          .checkout-main.order-tour .top .product .product-content .title {
            color: #2d4271;
            font-size: 22px;
            font-weight: 700;
            line-height: 28px;
          }

          p {
            margin-bottom: 1rem;
            margin-top: 0;
          }

          .checkout-main.order-tour .top .product .product-content .entry {
            align-items: flex-end;
            display: flex;
          }

          .checkout-main.order-tour .top .product .product-content .entry .entry-inner {
            width: 50%;
          }

          .checkout-main.order-tour .top .product .product-content .entry .entry-inner span {
            color: #2d4271;
            display: block;
            font-size: 13px;
            line-height: 25px;
            width: 100%;
          }

          @media (min-width: 768px) {
            .col-md-8 {
                flex: 0 0 auto;
                width: 66.66667%;
            }
          }

          h2, h3 {
            font-size: 20px;
            line-height: 40px;
          }

          .checkout-main .h2, .checkout-main h2 {
            color: #2d4271;
            font-size: 30px;
            font-weight: 700;
            line-height: 38px;
            margin-bottom: 33px;
            margin-top: 45px;
            width: 100%;
          }

          .mb-3 {
            margin-bottom: 1rem !important;
          }

          .checkout-main.order-tour .customer-contact .customer-contact-inner {
            align-items: center;
            background: #f9f9f9;
            border-radius: 10px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 25px;
          }

          .checkout-main.order-tour .customer-contact .customer-contact-inner>* {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
            width: 48%;
          }

          .checkout-main.order-tour .customer-contact .customer-contact-inner>* label {
            align-items: center;
            color: #2d4271;
            display: flex;
            font-size: 13px;
            line-height: 16px;
            margin-bottom: 5px;
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

          .checkout-main.order-tour .customer-contact .customer-contact-inner>* input {
            background: #fff;
            border: 1px solid #e7e7e7;
            border-radius: 5px;
            box-sizing: border-box;
            height: 40px;
            padding: 0 10px;
          }

          .errorform {
            color: #fd5669;
            font-size: 12px;
            font-style: italic;
          }

          .checkout-main.order-tour .customer {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 25px;
          }

          .checkout-main.order-tour .customer>h3 {
            color: #2d4271;
            font-size: 22px;
            font-weight: 700;
            line-height: 28px;
            width: 100%;
          }

          .checkout-main.order-tour .customer .change {
            align-items: center;
            border: 1px solid #e7e7e7;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 13px;
            padding: 10px 15px;
            width: 48%;
          }

          .checkout-main.order-tour .customer .change .change-title .h4, .checkout-main.order-tour .customer .change .change-title h4 {
            align-items: center;
            color: #2d4271;
            display: flex;
            font-size: 15px;
            font-weight: 700;
            margin-bottom: 0;
          }

          .checkout-main.order-tour .customer .change .change-title p {
            align-items: center;
            color: #2d4271;
            display: flex;
            font-size: 13px;
            margin-bottom: 0;
          }

          .checkout-main.order-tour .customer .change .change-number {
            align-items: center;
            display: flex;
          }

          .checkout-main.order-tour .customer .change .change-number .btn-click {
            font-size: 25px;
          }

          .checkout-main.order-tour .customer .change .change-number .number {
            background: 0 0;
            border: none;
            color: #2d4271;
            font-size: 27px;
            line-height: 32px;
            text-align: center;
            width: 30px;
          }

          .checkout-main.order-tour .customer-notice {
            background: #f9f9f9;
            border-radius: 10px;
            display: flex;
            margin-bottom: 40px;
            padding: 25px 35px;
          }

          .checkout-main.order-tour .customer-notice>* {
            width: 50%;
          }

          .checkout-main.order-tour .customer-notice>* b {
            font-weight: 700;
          }

          .mx-1 {
            margin-left: .25rem !important;
            margin-right: .25rem !important;
          }

          .form-check {
            display: block;
            margin-bottom: .125rem;
            min-height: 1.5rem;
            padding-left: 1.5em;
          }
          .align-items-center {
            align-items: center !important;
          }
          .d-inline-flex {
            display: inline-flex !important;
          }

          .checkbox-input-search .form-check-input:checked {
            background-color: #4d4aef;
            border-color: #4d4aef;
          }

          .form-check-input:checked[type=radio] {
            background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPScyJyBmaWxsPScjZmZmJy8+PC9zdmc+);
          }

          .form-check-input[type=radio] {
            border-radius: 50%;
          }

          .form-check .form-check-input {
            float: left;
            margin-left: -1.5em;
          }

          input[type=radio] {
            box-sizing: border-box;
            padding: 0;
          }

          .checkbox-input-search input {
            height: 25px;
            width: 25px;
          }

          .me-3 {
            margin-right: 1rem !important;
          }

          .checkbox-input-search label {
            font-size: 17px;
          }

          .mt-1 {
            margin-top: .25rem !important;
          }

          .col-11 {
            flex: 0 0 auto;
            width: 91.66667%;
          }

          .wrapper-new-input {
            background: #fff;
            border-radius: 5px;
            box-shadow: 0 4px 40px rgba(0, 0, 0, .08);
            padding: 30px;
          }

          .mt-4 {
            margin-top: 1.5rem !important;
          }

          .title-section {
            color: #2d4271;
            font-size: 24px;
            font-weight: 700;
            line-height: 28px;
          }

          .title-persona {
            -webkit-text-fill-color: transparent;
            background: linear-gradient(0deg, #003773, #0054b0);
            -webkit-background-clip: text;
            background-clip: text;
            font-size: 14px;
            font-weight: 800;
            line-height: 21px;
          }

          @media (min-width: 992px) {
            .col-lg-3 {
                flex: 0 0 auto;
                width: 25%;
            }
          }

          @media (min-width: 992px) {
            .col-lg-2 {
                flex: 0 0 auto;
                width: 16.66667%;
            }
          }

          .font-700 {
            font-weight: 700;
          }

          .pb-1 {
            padding-bottom: .25rem !important;
          }

          .wrapper-new-input .hotel-flight-input {
            background: #fff;
            border: 1px solid #7d8fab;
            border-radius: 10px;
          }

          @media (min-width: 992px) {
            .col-lg-5 {
                flex: 0 0 auto;
                width: 41.66667%;
            }
          }

          @media (min-width: 576px) {
            .col-sm-4 {
                flex: 0 0 auto;
                width: 33.33333%;
            }
          }

          .text-danger {
            color: #dc3545 !important;
          }

          @media (min-width: 576px) {
            .col-sm-4 {
                flex: 0 0 auto;
                width: 33.33333%;
            }
          }

          @media (min-width: 576px) {
            .col-sm-2 {
                flex: 0 0 auto;
                width: 16.66667%;
            }
          }

          .form-switch {
            padding-left: 2.5em;
          }

          .form-check-input:checked {
            background-color: #0d6efd;
            border-color: #0d6efd;
          }

          .form-switch .form-check-input {
            background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPSdyZ2JhKDAsMCwwLDAuMjUpJy8+PC9zdmc+);
            background-position: 0;
            border-radius: 2em;
            margin-left: -2.5em;
            transition: background-position .15s ease-in-out;
            width: 2em;
          }


          /* =========================== */

          @media (min-width: 768px) {
            .col-md-4 {
                flex: 0 0 auto;
                width: 33.33333%;
            }
          }

          .checkout-main .box-support {
            margin-bottom: 20px;
            margin-top: 15px;
          }

          .checkout-main .box-support .group-contact {
            align-items: center;
            background: #fff;
            border: 1px solid #4d4aef;
            border-radius: 14px;
            display: flex;
            max-width: 350px;
          }

          .checkout-main .box-support .group-contact .phone {
            align-items: center;
            background: #4d4aef;
            border-radius: 10px;
            color: #fff;
            display: flex;
            height: 50px;
            justify-content: center;
            width: 183px;
          }

          [class*=" icon-"], [class^=icon-] {
            -webkit-font-feature-settings: normal;
            font-feature-settings: normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-family: fontsVTV !important;
            font-style: normal;
            font-variant: normal;
            font-weight: 400;
            line-height: 1;
            text-transform: none;
          }

          .checkout-main .box-support .group-contact .phone i {
            font-size: 25px;
            margin-right: 5px;
          }

          .checkout-main .box-support .group-contact .phone p {
            line-height: 16px;
            margin: 0;
          }

          .checkout-main .box-support .group-contact .mail {
            align-items: center;
            border-radius: 10px;
            color: #4d4aef;
            display: flex;
            height: 50px;
            justify-content: center;
            width: 183px;
          }

          .checkout-main .box-support .group-contact .mail i {
            font-size: 25px;
            margin-right: 5px;
          }

          .checkout-main .box-support .group-contact .mail p {
            line-height: 16px;
            margin: 0;
          }

          .checkout-main .group-checkout {
            background: #fff;
            border: 1px solid #d5d5d5;
            box-sizing: border-box;
            padding: 20px;
          }

          .checkout-main .group-checkout>.h3, .checkout-main .group-checkout>h3 {
            color: #2d4271;
            font-size: 22px;
            font-weight: 700;
            line-height: 28px;
            margin-bottom: 20px;
          }

          .checkout-main .group-checkout .package-title {
            color: #2d4271;
            font-weight: 700;
            line-height: 19px;
            margin-bottom: 15px;
          }

          .checkout-main .group-checkout .package-title {
            color: #2d4271;
            font-weight: 700;
            line-height: 19px;
            margin-bottom: 15px;
          }

          .checkout-main .group-checkout .package-title span {
            color: #2d4271;
            font-size: 13px;
            font-weight: 400;
            line-height: 16px;
          }

          .checkout-main .group-checkout .product {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
          }

          .checkout-main .group-checkout .product .product-image {
            width: 100px;
          }

          .checkout-main .group-checkout .product .product-image img {
            border-radius: 10px;
            width: 100%;
          }

          .img-fluid, .img-thumbnail {
            height: auto;
            max-width: 100%;
          }

          .checkout-main .group-checkout .product .product-content {
            background-color: #fff;
            padding: 0 0 0 13px;
            width: calc(100% - 100px);
          }

          .checkout-main .group-checkout .product .product-content .title {
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            color: #2d4271;
            display: -webkit-box;
            font-weight: 700;
            line-height: 19px;
            margin-bottom: 0;
            max-height: 4rem;
            max-width: 100%;
            min-height: 4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
          }

          .checkout-main .group-checkout .go-tour .end, .checkout-main .group-checkout .go-tour .start {
            display: flex;
          }

          .checkout-main .group-checkout .go-tour .end.start, .checkout-main .group-checkout .go-tour .start.start {
            position: relative;
          }

          .checkout-main .group-checkout .go-tour .end i, .checkout-main .group-checkout .go-tour .start i {
            color: #4d4aef;
            font-size: 20px;
            margin-right: 5px;
            position: relative;
            z-index: 2;
          }

          .checkout-main .group-checkout .go-tour .end .start-content, .checkout-main .group-checkout .go-tour .start .start-content {
            width: 100%;
          }

          .checkout-main .group-checkout .go-tour .start .start-content h4 {
            color: #2d4271;
            font-size: 13px;
            font-weight: 400;
            line-height: 16px;
            margin-bottom: 5px;
          }

          .checkout-main .group-checkout .go-tour .end .start-content .time, .checkout-main .group-checkout .go-tour .start .start-content .time {
            align-items: center;
            color: #2d4271;
            display: flex;
            font-size: 13px;
            font-weight: 700;
            line-height: 19px;
            margin-bottom: 0;
            text-align: center;
            justify-content: space-between;
          }

          .checkout-main .group-checkout .go-tour .start .start-content .from {
            align-items: center;
            color: #2d4271;
            display: flex;
            font-weight: 400;
            line-height: 19px;
            margin-bottom: 30px;
          }

          .checkout-main .group-checkout .go-tour .end, .checkout-main .group-checkout .go-tour .start {
            display: flex;
          }

          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          table {
            caption-side: bottom;
          }

          .group-checkout .detail table, .group-checkout .start-content {
            width: 100%;
          }

          /* tbody, td, tfoot, th, thead, tr {
            border: 0 solid;
            border-color: inherit;
          } */

          .checkout-main .detail table .l1, .checkout-main .detail table .l2 {
            color: #2d4271;
            font-weight: 700;
            line-height: 19px;
            width: 50%;
          }

          .checkout-main .detail table td, .checkout-main .detail table th {
            padding: 10px 0;
          }

          .checkout-main .detail table .l2 {
            text-align: right;
          }
          .checkout-main .detail table .l1, .checkout-main .detail table .l2 {
            color: #2d4271;
            font-weight: 700;
            line-height: 19px;
            width: 50%;
          }

          .checkout-main .detail table .l2 {
            text-align: right;
          }

          .total-booking {
            color: #e01600;
          }

          .total-booking {
            color: #e01600;
          }

          .checkout-main .detail table tbody tr.detail td {
            font-size: 90%;
            padding: 5px 0 5px 22px;
          }

          .checkout-main .detail table tbody tr.detail td {
            font-size: 90%;
            padding: 5px 0 5px 22px;
          }
          .checkout-main .detail table .text-right {
            color: #2d4271;
            font-weight: 700;
            line-height: 19px;
            text-align: right;
          }

          .checkout-main .detail table .cuppon td, .checkout-main .detail table .pt td {
            font-weight: 700;
          }

          .promotion-broder {
            border-top: 1px solid #e7e7e7;
            margin: 0;
            padding-top: 10px;
          }

          .checkout-main .detail table .cuppon td, .checkout-main .detail table .pt td {
            font-weight: 700;
          }

          .checkout-main .detail table td, .checkout-main .detail table th {
            padding: 10px 0;
          }

          .col-8 {
            flex: 0 0 auto;
            width: 66.66667%;
          }

          .col-7 {
            flex: 0 0 auto;
            width: 58.33333%;
          }

          .col-5 {
            flex: 0 0 auto;
            width: 41.66667%;
          }

          .checkout-main .detail table .total td {
            border-top: 1px solid #e7e7e7;
            color: #2d4271;
            font-weight: 700;
            line-height: 19px;
            padding: 20px 0;
            text-transform: uppercase;
          }

          .checkout-main .detail table .total td.t-price {
            color: #e01600;
            font-size: 22px;
            font-weight: 700;
            line-height: 28px;
            text-align: right;
            text-transform: lowercase;
          }

          .checkout-main .detail .btn-order {
            align-items: center;
            cursor: pointer;
            display: flex;
            font-size: 17px;
            height: 50px;
            justify-content: center;
            line-height: 21px;
            width: 100%;
          }

          .checkout-main .detail .btn-order {
            background: linear-gradient(64.4deg, #e01600 21.33%, #fe2214 67.61%);
            border-radius: 10px;
            color: #fff;
            font-weight: 700;
            margin-bottom: 10px;
            text-align: right;
            text-transform: uppercase;
          }


          .btn {
            background-color: initial;
            border: 1px solid transparent;
            border-radius: .25rem;
            color: #2d4271;
            cursor: pointer;
            display: inline-block;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            padding: .375rem .75rem;
            text-align: center;
            text-decoration: none;
            transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            -webkit-user-select: none;
            user-select: none;
            vertical-align: middle;
          }

          .btn-success {
            background-color: #198754;
            border-color: #198754;
            color: #fff;
          }


          /* ======================payments-warp================================== */

          .payments-warp {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 30px;
          }

          .payments-warp h3 {
            color: #2d4271;
            font-size: 22px;
            font-weight: 700;
            line-height: 28px;
            margin-bottom: 20px;
            width: 100%;
          }

          .payments-warp .payments {
            width: 48%;
          }

          .payments-warp .payments .payment-item {
            background: #f9f9f9;
            margin-bottom: 10px;
            padding: 24px;
          }

          .payments-warp .payments .payment-item .pm-head {
            align-items: center;
            display: flex;
            justify-content: space-between;
          }

          .payments-warp .payments .payment-item .pm-head .pm-head-icon {
            align-items: center;
            display: flex;
            flex: 1 1 auto;
          }

          .payments-warp .payments .payment-item .pm-head .pm-head-icon i {
            font-size: 24px;
            margin-right: 1rem;
            text-align: center;
            width: 10%;
          }

          .payments-warp .payments .payment-item .pm-head .h4, .checkout-main .payments-warp .payments .payment-item .pm-head h4 {
            align-items: center;
            color: #2d4271;
            display: flex;
            font-size: 15px;
            margin-bottom: 0;
          }

          .payments-warp .payments .payment-item .pm-head .check {
            border: 1px solid #7d8fab;
            border-radius: 50%;
            box-sizing: border-box;
            cursor: pointer;
            display: block;
            height: 20px;
            position: relative;
            width: 20px;
          }

          input[type=radio] {
            padding: 0;
          }

          .payments-warp .payments .payment-item .pm-des {
            display: none;
            padding-top: 20px;
          }

          .terms h3 {
            color: #2d4271;
            font-size: 22px;
            font-weight: 700;
            line-height: 28px;
            margin-bottom: 20px;
            width: 100%;
          }

          .terms .term-content {
            border: 1px solid #f3f3f3;
            border-radius: 10px;
            margin-bottom: 15px;
            max-height: 280px;
            overflow-y: auto;
            padding: 22px;
          }

          .checker {
            align-items: center;
            cursor: pointer;
            display: flex;
            display: block;
            flex-wrap: wrap;
            font-size: 13px;
            line-height: 25px;
            margin-bottom: 12px;
            padding-left: 35px;
            position: relative;
            -webkit-user-select: none;
            user-select: none;
          }

          input[type=checkbox], input[type=radio] {
            box-sizing: border-box;
            padding: 0;
          }
          .checker input {
            cursor: pointer;
            height: 0;
            opacity: 0;
            position: absolute;
            width: 0;
          }

          .checker .checkmark {
            background: #f9f9f9;
            border: 1px solid #7d8fab;
            border-radius: 5px;
            height: 25px;
            left: 0;
            position: absolute;
            top: 0;
            width: 25px;
            overflow: hidden;
          }

          input[type=checkbox], input[type=radio] {
            box-sizing: border-box;
            padding: 0;
          }

          .checker input {
            cursor: pointer;
            height: 0;
            opacity: 0;
            position: absolute;
            /* width: 0; */
          }
          [type=checkbox], [type=radio] {
            box-sizing: border-box;
            padding: 0;
          }
          input {
            line-height: normal;
          }
          button, input, optgroup, select, textarea {
            color: inherit;
            font: inherit;
            margin: 0;
          }

          .checker .checkmark:after {
            color: #fff;
            content: "✓";
            display: none;
            font-family: Font Awesome 5 Pro;
            font-size: 18px;
            position: absolute;
          }

          .checker .checkmark:after {
            text-align: center;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            background-color: #4d4aef;
            width: 30px;
            height: 100%;
          }

          .checker input:checked~.checkmark:after {
            display: block;
          }


          /* =========================MOMO */
          .payments-warp .payments .payment-item .pm-head .pm-head-icon i {
            font-size: 24px;
            margin-right: 1rem;
            text-align: center;
            width: 10%;
          }

          .payments-warp .payments .payment-item .pm-head .pm-head-icon i {
            font-size: 24px;
            margin-right: 1rem;
            text-align: center;
          }

          .icon-momo .path1:before {
            color: #a50064;
            content: "\e928";
          }

          .icon-momo .path2:before {
            color: #fff;
            content: "\e929";
            margin-left: -1em;
          }

          .icon-momo .path3:before {
            color: #fff;
            content: "\e92a";
            margin-left: -1em;
          }

          .icon-momo .path4:before {
            color: #fff;
            content: "\e92b";
            margin-left: -1em;
          }

          .icon-momo .path5:before {
            color: #fff;
            content: "\e92c";
            margin-left: -1em;
          }

          .empty {
            background-color: #ffcccc; /* màu nền đỏ nhạt */
            border: 1px solid red; /* viền màu đỏ */
          }

        `}
      </style>
    );
};

const InformationPayment = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();
    const { data, fetchDataById } = useApi();
    const location = useLocation();
    
    const storedUserLogin = sessionStorage.getItem('user_login');
    if (!storedUserLogin) {
      navigate('/login');
      dispatch(setPreviousPageUrl(location.pathname));
    }

    useEffect(() => {
      const url = `${TOUR_GET_BY_ID_DATA}${id}`;
      fetchDataById(url);
    }, [id, fetchDataById]);

    // =====================FORM CONTACT=========================

    const [isFormValid, setIsFormValid] = useState(false);
    const handleSubmitContact = () => {
      const formElement = document.getElementById("form");
      if (formElement.checkValidity()) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
        formElement.reportValidity();
      }
    };

    // =====================FORM GUETS=========================
    const initialFormState = Array.from({ length: 0 }, () => ({
      fullName: '',
      gender: '',
      dayOfMonth: '',
      monthOfYear: '',
      year: '',
      errors: {}
    }));

    const { forms: forms1, handleChange: handleChange1, handleSubmit: handleSubmitForm1, updateForms: updateForms1 } = useForm(initialFormState);
    const { forms: forms2, handleChange: handleChange2, handleSubmit: handleSubmitForm2, updateForms: updateForms2 } = useForm(initialFormState);
    const { forms: forms3, handleChange: handleChange3, handleSubmit: handleSubmitForm3, updateForms: updateForms3 } = useForm(initialFormState);
    const { forms: forms4, handleChange: handleChange4, handleSubmit: handleSubmitForm4, updateForms: updateForms4 } = useForm(initialFormState);

    const [formDataList, setFormDataList] = useState([]);

    const handleSubmit = (formData, formNumber) => {
      if (formData.length > 0) {
        setFormDataList(prevList => [...prevList, { formNumber, formData }]);
      }
    };

    const handleSubmit1 = (formData) => handleSubmit(formData, 1);
    const handleSubmit2 = (formData) => handleSubmit(formData, 2);
    const handleSubmit3 = (formData) => handleSubmit(formData, 3);
    const handleSubmit4 = (formData) => handleSubmit(formData, 4);

    const [formData1, setFormData1] = useState(null);
    const [formData2, setFormData2] = useState(null);
    const [formData3, setFormData3] = useState(null);
    const [formData4, setFormData4] = useState(null);

    const receiveFormData1 = (data) => {
        setFormData1(data);
    };

    const receiveFormData2 = (data) => {
        setFormData2(data);
    };

    const receiveFormData3 = (data) => {
      setFormData3(data);
    };

    const receiveFormData4 = (data) => {
      setFormData4(data);
   };

  //  ===================CHECK FULL=======================
    const [page, setPage] = useState('inf');

    const paymentState = useSelector((state) => state.payment);
  
    useEffect(() => {
      if (isFormValid && formDataList.length > 0) {
          dispatch(addItem(formDataList));
          dispatch(addtour(data));
          if (paymentState.guets.length > 0) {
            setPage('method');
          }
      }
    }, [isFormValid, formDataList, paymentState]);

    return (
        <>
            <Style />

            <div className="booking-tour">
                <section className="checkout-head d-block d-lg-block">
                    <div className="container">
                        <div className="row">
                          <ul className="head col-12" >
                              <li className="checked">1. Nhập thông tin</li>
                              <li className="checked" style={{display:"flex", alignItems: "center"}}>
                                <i className="bx bx-chevron-right"></i>
                              </li>
                              <li className={page === 'method' ? 'checked' : ''}>2. Thanh toán</li>
                          </ul>
                        </div>
                    </div>
                </section>

                <section className="checkout-main order-tour animate__fadeIn animate__animated">
                    <div className="container">

                        < InforTourPmComponent data={data} page={page}/>

                        <div style={{display: "flex"}} className="phanchiathienha">
                            <div className="col-md-8 col-12 left" style={{padding: "0 12px"}}>
                                < TongQuanTourPmComponent 
                                  forms1={forms1}
                                  handleChange1={handleChange1}
                                  handleSubmitForm1={handleSubmitForm1(handleSubmit1)}
                                  updateForms1={updateForms1}

                                  forms2={forms2}
                                  handleChange2={handleChange2}
                                  handleSubmitForm2={handleSubmitForm2(handleSubmit2)}
                                  updateForms2={updateForms2}

                                  forms3={forms3}
                                  handleChange3={handleChange3}
                                  handleSubmitForm3={handleSubmitForm3(handleSubmit3)}
                                  updateForms3={updateForms3}

                                  forms4={forms4}
                                  handleChange4={handleChange4}
                                  handleSubmitForm4={handleSubmitForm4(handleSubmit4)}
                                  updateForms4={updateForms4}

                                  receiveFormData1={receiveFormData1}
                                  receiveFormData2={receiveFormData2}
                                  receiveFormData3={receiveFormData3}
                                  receiveFormData4={receiveFormData4}

                                  page={page}
                                />

                                < PaymentMethodComponent
                                
                                  page={page}
                                
                                />

                            </div>
                            <div className="col-md-4 col-12 right">
                                < SupportPmComponent />
                                < CheckoutPmComponent 
                                  data={data} 
                                  handleSubmitContact={handleSubmitContact} 
                                  isFormValid={isFormValid} 

                                  handleSubmit1={handleSubmitForm1(handleSubmit1)}
                                  handleSubmit2={handleSubmitForm2(handleSubmit2)}
                                  handleSubmit3={handleSubmitForm3(handleSubmit3)}
                                  handleSubmit4={handleSubmitForm4(handleSubmit4)}

                                  formData1={formData1}
                                  formData2={formData2}
                                  formData3={formData3}
                                  formData4={formData4}

                                  page={page}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
    
}

export default InformationPayment;