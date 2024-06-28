import React from "react";

// import "../css/information-payment.css";

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
  font-family: Font Awesome\ 5 Pro;
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

function removePeople(x) {

}

function addPeople(x) {

}

function removeAdult(x){

}

function removeBaby(x){

}

function removeChildren(x){

}

function removeYoungChild(x){

}

function paychangePage(x){

}

const InformationPayment = () => {

    const page = '';
    const tour = {
    }
    const timeday = '';

    const account = {}

    const adultsArray = [];
    const young_childsArray = [];
    const childrenArray = [];
    const babysArray = [];
    
    const alertVisible = '';

    const days = [];
    const months = [];
    const years = [];

    const total = '';

    return (
        <>
            <Style />

            <div className="booking-tour">

                <section className="checkout-head d-block d-lg-block">
                    <div className="container">
                        <div className="row">
                        <ul className="head col-12">
                            <li className="checked">1. Nhập thông tin</li>
                            <li className="checked">
                            <i className="bx bx-chevron-right"></i>
                            </li>
                            <li className={page === 'method' ? 'checked' : ''}>2. Thanh toán</li>
                        </ul>
                        </div>
                    </div>
                </section>

                <section className="checkout-main order-tour animate__fadeIn animate__animated">

                    <div className="container">

                        <div className="col-12 top" style={{ display: page === 'inf' ? 'block' : 'none' }}>
                            <div className="product">
                                <div className="product-image">
                                <div className="image">
                                    <img src={tour?.tour?.img} className="img-fluid" alt="" />
                                </div>
                                </div>

                                <div className="product-content">
                                <p className="title" id="title">{tour?.tour?.tour_name}</p>
                                <div className="entry">
                                    <div className="entry-inner">
                                    <span>Mã Tour <b>{tour?.tour?.code_tour}</b></span>
                                    <span>Khởi hành <b>{tour?.tour?.start_date}</b></span>
                                    <span>Thời gian <b>{timeday}</b></span>
                                    <span>Nơi khởi hành <b>{tour?.tour?.departure_location}</b></span>
                                    {/* <span>Số chỗ còn nhận <b>8</b></span> */}
                                    {/* <span>Dịch vụ tùy chọn <b>Bay Vietnam Airlines - Khách sạn 5* Hôtel de la Coupole - MGallery</b></span> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div style={{display: "flex"}} className="phanchiathienha">

                            <div className="col-md-8 col-12 left" style={{padding: "0 12px"}}>

                                <div className="payment-infor" style={{ display: page === 'inf' ? 'block' : 'none' }}>
                                    <h2 className="d-none d-lg-block">Tổng quan về chuyến đi</h2>

                                    <h3>Thông tin liên lạc</h3>

                                    <div className="customer-contact mb-3">
                                        <form className="customer-contact-inner" action="#" method="get" id="form">
                                        <div className="name">
                                            <label>Họ và Tên <b>*</b></label>
                                            <input autoComplete="off" type="text" className="form-control" name="fullName" value={account?.full_name} />
                                            <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                        </div>
                                        <div className="mail">
                                            <label>Email <b>*</b></label>
                                            <input type="email" className="form-control" name="email" value={account?.email} />
                                            <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                        </div>
                                        <div className="phone">
                                            <label>Số điện thoại <b>*</b></label>
                                            <input type="number" className="form-control" name="phone" value={account?.phone_number} />
                                            <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                        </div>
                                        <div className="address">
                                            <label>Địa chỉ</label>
                                            <input type="text" className="form-control" name="address" value={account?.address} style={{ marginBottom: '18px' }} />
                                            {/* <div className="errorform error-notes">Vui lòng nhập thông tin</div> */}
                                        </div>
                                        </form>
                                    </div>

                                    <div className="customer">
                                        <h3>Hành khách</h3>

                                        <div className="change">
                                        <div className="change-title">
                                            <h4>Người lớn</h4>
                                            <p>Từ 12 tuổi</p>
                                        </div>
                                        <div className="change-number">
                                            <span className="minus btn-click" onClick={() => removePeople('adults')}><i className="bx bx-minus-circle" id="adultMinus"></i></span>
                                            <span className="number" id="adult">{adultsArray.length}</span>
                                            <span className="plus btn-click" onClick={() => addPeople('adults')}><i className="bx bx-plus-circle" id="adultPlus"></i></span>
                                        </div>
                                        </div>

                                        <div className="change">
                                        <div className="change-title">
                                            <h4>Trẻ em</h4>
                                            <p>Từ 5 - 11 tuổi</p>
                                        </div>
                                        <div className="change-number">
                                            <span className="minus btn-click" onClick={() => removePeople('childrens')}><i className="bx bx-minus-circle" id="childrenMinus"></i></span>
                                            <span className="number" id="children">{childrenArray.length}</span>
                                            <span className="plus btn-click" onClick={() => addPeople('childrens')}><i className="bx bx-plus-circle" id="childrenPlus"></i></span>
                                        </div>
                                        </div>

                                        <div className="change">
                                        <div className="change-title">
                                            <h4>Trẻ nhỏ</h4>
                                            <p>Từ 2 - 4 tuổi</p>
                                        </div>
                                        <div className="change-number">
                                            <span className="minus btn-click" onClick={() => removePeople('young_childs')}><i className="bx bx-minus-circle" id="smallchildrenMinus"></i></span>
                                            <span className="number" id="smallchildren">{young_childsArray.length}</span>
                                            <span className="plus btn-click" onClick={() => addPeople('young_childs')}><i className="bx bx-plus-circle" id="smallchildrenPlus"></i></span>
                                        </div>
                                        </div>

                                        <div className="change">
                                        <div className="change-title">
                                            <h4>Em bé</h4>
                                            <p>Từ 0 - 2 tuổi</p>
                                        </div>
                                        <div className="change-number">
                                            <span className="minus btn-click" onClick={() => removePeople('babys')}><i className="bx bx-minus-circle" id="babyMinus"></i></span>
                                            <span className="number" id="baby">{babysArray.length}</span>
                                            <span className="plus btn-click" onClick={() => addPeople('babys')}><i className="bx bx-plus-circle" id="babyPlus"></i></span>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="customer-notice">
                                        <div className="customer-notice-left">
                                        . Người lớn sinh trước ngày<b className="mx-1">08/06/2012</b><br />
                                        . Trẻ nhỏ sinh từ<b className="mx-1">09/06/2019</b> đến<b className="mx-1">08/06/2022</b>
                                        </div>
                                        <div className="customer-notice-right">
                                        . Trẻ em sinh từ<b className="mx-1">09/06/2012</b> đến<b className="mx-1">08/06/2019</b><br />
                                        . Em bé sinh từ<b className="mx-1">09/06/2022</b> đến<b className="mx-1">10/06/2024</b>
                                        </div>
                                    </div>

                                    <section className="wrap-info-customer-number-person-details mt-4 wrapper-new-input">
                                        <div className="title-section mb-3 title-hotel-flight-infor" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Thông tin hành khách</span>
                                        <span id="alert" style={{ visibility: alertVisible ? 'visible' : 'hidden', color: 'red', fontSize: '13px', fontWeight: '400' }}>
                                            Tối thiểu phải có 1 hành khách!
                                        </span>
                                        </div>

                                        <div className="group-fields-input-contact-adult group-fields-input-contact-wrapper mb-3">
                                            <div className="title-persona">
                                                <img src="https://travel.com.vn/images/icons/persons/adult.svg" alt="Người lớn" />Người lớn
                                            </div>

                                            {adultsArray.map((item, i) => (
                                            <div className="row" key={i}>
                                                <div className="col-lg-3 col-12" style={{ width: '43%' }}>
                                                    <div className="form-group">
                                                    <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                    <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-2 col-12" style={{ width: '16%' }}>
                                                    <div className="form-group select-custom-icon">
                                                        <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                                                        <select className="form-control title title-gender hotel-flight-input" name="gender">
                                                            <option value="Nam">Nam</option>
                                                            <option value="Nữ">Nữ</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-lg-5 col-12" style={{ width: '41%' }}>
                                                    <div className="row">
                                                    <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%', marginTop: 0 }}>
                                                        <div className="form-group select-custom-icon">
                                                        <label className="pb-1 white-space-nowrap font-700">Ngày sinh <span className="text-danger">*</span></label>
                                                        <select className="form-control birth-date hotel-flight-input" name="dayOfMonth">
                                                            <option value="">Ngày</option>
                                                            {days.map((day, index) => (
                                                            <option key={index} value={day}>{day}</option>
                                                            ))}
                                                        </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                        <div className="form-group select-custom-icon">
                                                        <label className="pb-1">&nbsp;</label>
                                                        <select className="form-control birth-month hotel-flight-input" name="monthOfYear">
                                                            <option value="">Tháng</option>
                                                            {months.map((month, index) => (
                                                            <option key={index} value={month}>{month}</option>
                                                            ))}
                                                        </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                        <div className="form-group select-custom-icon">
                                                        <label className="pb-1">&nbsp;</label>
                                                        <select className="form-control birth-year hotel-flight-input" name="year">
                                                            <option value="">Năm</option>
                                                            {years.map((year, index) => (
                                                            <option key={index} value={year}>{year}</option>
                                                            ))}
                                                        </select>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <button className="btn-delete btn-click" onClick={() => removeAdult(i)}>
                                                    <i className="bx bxs-trash"></i>
                                                </button>
                                            </div>
                                            ))}
                                        </div>

                                        <div className="group-fields-input-contact-children group-fields-input-contact-wrapper mb-3">
                                            <div className="title-persona">
                                                <img src="https://travel.com.vn/images/icons/persons/child.svg" alt="Trẻ em" />Trẻ em
                                            </div>

                                            {childrenArray.map((item, i) => (
                                            <div className="row" key={i}>
                                            <div className="col-lg-3 col-12" style={{ width: '43%' }}>
                                                <div className="form-group">
                                                <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-12" style={{ width: '16%' }}>
                                                <div className="form-group select-custom-icon">
                                                <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                                                <select className="form-control title title-gender hotel-flight-input" name="gender">
                                                    <option value="Nam">Nam</option>
                                                    <option value="Nữ">Nữ</option>
                                                </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-12" style={{ width: '41%' }}>
                                                <div className="row">
                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%', marginTop: 0 }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1 white-space-nowrap font-700">Ngày sinh <span className="text-danger">*</span></label>
                                                    <select className="form-control birth-date hotel-flight-input" name="dayOfMonth">
                                                        <option value="">Ngày</option>
                                                        {days.map((day, index) => (
                                                        <option key={index} value={day}>{day}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1">&nbsp;</label>
                                                    <select className="form-control birth-month hotel-flight-input" name="monthOfYear">
                                                        <option value="">Tháng</option>
                                                        {months.map((month, index) => (
                                                        <option key={index} value={month}>{month}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1">&nbsp;</label>
                                                    <select className="form-control birth-year hotel-flight-input" name="year">
                                                        <option value="">Năm</option>
                                                        {years.map((year, index) => (
                                                        <option key={index} value={year}>{year}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <button className="btn-delete btn-click" onClick={() => removeChildren(i)}>
                                                <i className="bx bxs-trash"></i>
                                            </button>
                                            </div>
                                            ))}
                                        </div>

                                        <div className="group-fields-input-contact-young-child group-fields-input-contact-wrapper mb-3">
                                            <div className="title-persona">
                                                <img src="https://travel.com.vn/images/icons/persons/young_child.svg" alt="Trẻ nhỏ" />Trẻ nhỏ
                                            </div>

                                            {young_childsArray.map((item, i) => (
                                            <div className="row" key={i}>
                                            <div className="col-lg-3 col-12" style={{ width: '43%' }}>
                                                <div className="form-group">
                                                <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-12" style={{ width: '16%' }}>
                                                <div className="form-group select-custom-icon">
                                                <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                                                <select className="form-control title title-gender hotel-flight-input" name="gender">
                                                    <option value="Nam">Nam</option>
                                                    <option value="Nữ">Nữ</option>
                                                </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-12" style={{ width: '41%' }}>
                                                <div className="row">
                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%', marginTop: 0 }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1 white-space-nowrap font-700">Ngày sinh <span className="text-danger">*</span></label>
                                                    <select className="form-control birth-date hotel-flight-input" name="dayOfMonth">
                                                        <option value="">Ngày</option>
                                                        {days.map((day, index) => (
                                                        <option key={index} value={day}>{day}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1">&nbsp;</label>
                                                    <select className="form-control birth-month hotel-flight-input" name="monthOfYear">
                                                        <option value="">Tháng</option>
                                                        {months.map((month, index) => (
                                                        <option key={index} value={month}>{month}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1">&nbsp;</label>
                                                    <select className="form-control birth-year hotel-flight-input" name="year">
                                                        <option value="">Năm</option>
                                                        {years.map((year, index) => (
                                                        <option key={index} value={year}>{year}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <button className="btn-delete btn-click" onClick={() => removeYoungChild(i)}>
                                                <i className="bx bxs-trash"></i>
                                            </button>
                                            </div>
                                            ))}
                                        </div>

                                        <div className="group-fields-input-contact-baby group-fields-input-contact-wrapper mb-3">
                                            <div className="title-persona">
                                                <img src="https://travel.com.vn/images/icons/persons/baby.svg" alt="Em bé" />Em bé
                                            </div>

                                            {babysArray.map((item, i) => (
                                            <div className="row" key={i}>
                                            <div className="col-lg-3 col-12" style={{ width: '43%' }}>
                                                <div className="form-group">
                                                <label className="pb-1 font-700">Họ và tên <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control fullName hotel-flight-input" placeholder="Nhập họ tên" name="fullName" />
                                                <div className="errorform error-notes">Vui lòng nhập thông tin</div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-12" style={{ width: '16%' }}>
                                                <div className="form-group select-custom-icon">
                                                <label className="pb-1 white-space-nowrap">Giới tính <span className="text-danger">*</span></label>
                                                <select className="form-control title title-gender hotel-flight-input" name="gender">
                                                    <option value="Nam">Nam</option>
                                                    <option value="Nữ">Nữ</option>
                                                </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-12" style={{ width: '41%' }}>
                                                <div className="row">
                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%', marginTop: 0 }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1 white-space-nowrap font-700">Ngày sinh <span className="text-danger">*</span></label>
                                                    <select className="form-control birth-date hotel-flight-input" name="dayOfMonth">
                                                        <option value="">Ngày</option>
                                                        {days.map((day, index) => (
                                                        <option key={index} value={day}>{day}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1">&nbsp;</label>
                                                    <select className="form-control birth-month hotel-flight-input" name="monthOfYear">
                                                        <option value="">Tháng</option>
                                                        {months.map((month, index) => (
                                                        <option key={index} value={month}>{month}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4 col-4 mt-sm-0" style={{ width: '33%' }}>
                                                    <div className="form-group select-custom-icon">
                                                    <label className="pb-1">&nbsp;</label>
                                                    <select className="form-control birth-year hotel-flight-input" name="year">
                                                        <option value="">Năm</option>
                                                        {years.map((year, index) => (
                                                        <option key={index} value={year}>{year}</option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <button className="btn-delete btn-click" onClick={() => removeBaby(i)}>
                                                <i className="bx bxs-trash"></i>
                                            </button>
                                            </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                {/* ---------------------- */}

                                <div className="payment-method" style={{ display: page === 'method' ? 'block' : 'none' }}>
                                    <h2 className="d-none d-lg-block">Thanh toán</h2>

                                    <div className="payments-warp">
                                        <h3>Các hình thức thanh toán</h3>
                                        
                                        <div className="payments">
                                            <div className="payment-item">
                                                <div className="pm-head">
                                                <div className="pm-head-icon">
                                                    <i className='bx bx-money'></i>
                                                    <h4>Tiền mặt</h4>
                                                </div>
                                                <input className="check" type="radio" name="payment-type" value="Thanh toán tiền mặt" />
                                                </div>
                                                <div className="pm-des">
                                                <div>
                                                <p style={{ textAlign: 'justify' }}>
                                                    Quý khách vui lòng thanh toán tại bất kỳ văn phòng Vietravel trên toàn quốc và các chi nhánh tại nước ngoài. Xem
                                                    <a href="https://travel.com.vn/lien-he.aspx">chi tiết</a>.
                                                    </p>
                                                    <p>&nbsp;</p>
                                                </div>
                                                </div>
                                            </div>

                                            <div className="payment-item">

                                                <div className="pm-head">
                                                <div className="pm-head-icon">
                                                    <i className='bx bxs-bank' ></i>
                                                    <h4>Chuyển khoản</h4>
                                                </div>
                                                <input className="check" type="radio" name="payment-type" value="Thanh toán chuyển khoản" />
                                                </div>

                                                <div className="pm-des">
                                                    <div>
                                                        <p style={{ textAlign: 'justify' }}>
                                                            Quý khách sau khi thực hiện việc chuyển khoản vui lòng gửi email đến
                                                            <span style={{ color: '#ff0000' }}><strong> </strong></span>
                                                            <span style={{ color: '#cc0000' }}><strong>tructuyen@wonvel.com</strong></span>&nbsp;hoặc gọi tổng đài <strong>
                                                            <span style={{ color: '#cc0000' }}>19001839</span>
                                                            </strong> để được xác nhận từ công ty chúng tôi.
                                                        </p>

                                                        <div style={{ textAlign: 'justify' }}>Tên Tài Khoản : Công ty CP Du lịch và Tiếp thị GTVT Việt Nam – Vietravel</div>

                                                        <div style={{ textAlign: 'justify' }}>Tên tài khoản viết tắt : VIETRAVEL</div>

                                                        <div style={{ textAlign: 'justify' }}>Số Tài khoản : <strong>111 6977 27979</strong></div>

                                                        <div style={{ textAlign: 'justify' }}>Ngân hàng : Vietinbank - Chi nhánh 7</div>

                                                    </div>
                                                </div>

                                            </div>

                                            <div className="payment-item">

                                                <div className="pm-head">
                                                    <div className="pm-head-icon">
                                                        <i className='bx bx-credit-card-alt' ></i>
                                                        <h4>Thẻ tín dụng</h4>
                                                    </div>
                                                    <input className="check" type="radio" name="payment-type" value="Thanh toán thẻ tín dụng" />
                                                </div>

                                                <div className="pm-des">

                                                    <div className="row d-flex justify-content-between mb-3">
                                                        <div className="col-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="payment-option-type" value="thevisa" />
                                                            <label className="form-check-label">
                                                                <img src="https://api.travel.com.vn/Content/Icon/Payment/NameCard/thevisa.png" alt="" />
                                                            </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="payment-option-type" value="master" />
                                                            <label className="form-check-label">
                                                                <img src="https://api.travel.com.vn/Content/Icon/Payment/NameCard/master.png" alt="amex" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="payment-option-type" value="jcb" />
                                                            <label className="form-check-label">
                                                            <img src="https://api.travel.com.vn/Content/Icon/Payment/NameCard/jcb.png" alt="amex" />
                                                            </label>
                                                        </div>
                                                        </div>
                                                        <div className="col-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="payment-option-type" value="amex"/>
                                                            <label className="form-check-label">
                                                            <img src="https://api.travel.com.vn/Content/Icon/Payment/NameCard/amex.png" alt="amex"/>
                                                            </label>
                                                        </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p><span style={{ fontSize: '18px', color: '#ff0000', fontFamily: 'Times New Roman,Times,serif' }}><strong>THANH TOÁN BẰNG THẺ TÍN DỤNG</strong></span></p>

                                                        <p style={{ textAlign: 'justify', fontFamily: 'Times New Roman,Times,serif' }}>Tất cả giao dịch của Quý khách được xử lý bảo mật theo giao thức SSL tại hệ thống của <em><strong>MasterCard</strong></em>. Vietravel không lưu giữ bất kì thông tin nào về thẻ của quý khách tại hệ thống của Vietravel. Do đó, quý khách có thể hoàn toàn an tâm rằng thông tin thẻ của Quý khách sẽ được bảo đảm an toàn tuyệt đối tại hệ thống của <em><strong>MasterCard</strong></em> và Ngân hàng Ngoại Thương Việt Nam (<strong>Vietcombank</strong>).</p>

                                                        <p style={{ textAlign: 'justify', fontFamily: 'Times New Roman,Times,serif' }}>Hiện tại hệ thống www.travel.com.vn chấp nhận cho Quý khách thanh toán bằng một trong các loại thẻ sau: <strong>VISA</strong> (Credit hoặc Debit), <em><strong>MasterCard</strong></em> (Credit), <strong>Diners Clup International</strong> (Credit), <strong>JCB</strong> (Credit) và <strong>American Express</strong> (Credit) của bất kỳ ngân hàng nào.</p>

                                                        <hr />

                                                        <p style={{ marginRight: '6px', textAlign: 'justify' }}><span style={{ color: '#e74c3c', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}><strong><img alt="mail" src="https://travel.hivietravel.vn/Content/plugins/ckeditor/plugins/smiley/images/envelope.png" style={{ height: '23px', width: '23px' }} title="mail" />&nbsp;</strong></span><span style={{ color: '#ff0000', fontSize: '18px', fontFamily: 'Times New Roman,Times,serif' }}><strong>ƯU ĐÃI THẺ JCB TRONG TAY – BAY NGAY ĐẾN NHẬT</strong></span></p>

                                                        <p style={{ marginRight: '6px', textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Thời gian: <strong>từ 15/02/2024 đến 31/05/2024</strong> hoặc đến hết ngân sách <span style={{ color: '#ff0000' }}>/Có điền Form/</span></p>

                                                        <p style={{ marginRight: '6px', textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif', color: '#ff0000' }}><strong>Trường hợp thanh toán Online vui lòng liên hệ nhân viên tư vấn của Vietravel để được tư vấn quyền lợi ưu đãi.</strong></p>

                                                        <ul>
                                                            <li style={{ textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>
                                                                <strong><span style={{ color: '#ff0000' }}>Chương trình 01: Giảm 1.500.000 Đ</span><span style={{ color: '#c00000' }}> </span></strong>cho tour trọn gói <strong>Nhật Bản có giá bán từ 20.000.000 Đ đến dưới 40.000.000 Đ.</strong>
                                                            </li>

                                                            <li style={{ textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>
                                                                <span style={{ color: '#ff0000' }}><strong>Chương trình 02: Giảm 3.000.000 Đ</strong></span><strong> </strong>cho tour trọn gói <strong>Nhật Bản có giá bán từ 40.000.000 Đ.</strong>
                                                            </li>

                                                            <li style={{ textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>
                                                                <span style={{ color: '#ff0000' }}><strong>Chương trình 03: Tặng Vali du lịch cao cấp</strong></span><strong> </strong>cho chủ thẻ JCB phát hành mới và phát sinh thanh toán <strong>tour du lịch trọn gói Nhật.</strong>
                                                            </li>

                                                            <li style={{ textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>
                                                                <span style={{ color: '#ff0000' }}><strong>Chương trình 04: Giảm 500.000 Đ</strong></span><strong> </strong>cho tour trọn gói <strong>(trừ Nhật) giá bán từ 15.000.000đ trở lên</strong>.
                                                            </li>
                                                        </ul>

                                                        <p style={{ marginRight: '6px', textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>
                                                            <span>Đối tượng áp dụng: Khách hàng phát sinh thanh toán Tour trọn gói bằng Thẻ JCB tại&nbsp;</span>
                                                            <span>Vietravel tại các Văn phòng Vietravel hoặc trên trang bán travel.com.vn</span>
                                                        </p>

                                                        <p style={{ marginRight: '6px', textAlign: 'justify', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>
                                                            <u>Lưu ý:</u>
                                                        </p>

                                                        <ul>
                                                            <li style={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Chương trình 1,2 và 3: áp dụng cho thị trường Nhật.</li>
                                                            <li style={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Chương trình 1 và 2: không áp dụng đồng thời.</li>
                                                            <li style={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Chương trình 3: áp dụng đồng thời chương trình 1 hoặc 2.</li>
                                                            <li style={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Chương trình 3: thời gian phát hành thẻ &amp; thanh toán tính từ 15/02/2024 đến 31/05/2024. Nhận diện thời gian mở thẻ, kích hoạt thẻ qua các kênh: tin nhắn/ app ngân hàng/ email.</li>
                                                            <li style={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Chương trình 4: áp dụng thị trường còn lại (trừ Nhật).</li>
                                                            <li style={{ textAlign: 'left', fontSize: '16px', fontFamily: 'Times New Roman,Times,serif' }}>Mỗi chủ thẻ hưởng tối đa một lần ưu đãi trong suốt thời gian diễn ra chương trình.</li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    
                                    <div className="terms">
                                        <h3>Điều khoản bắt buộc khi đăng ký online</h3>
                                        <div className="term-content">
                                            <div>
                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Khi khách hàng đã mua vé và có nhu cầu hủy chương trình du lịch, Quý khách vui lòng thực hiện theo quy định sau:
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    - Việc hủy vé chỉ được chấp nhận khi có yêu cầu về chương trình bằng văn bản và chấp thuận từ Vietravel. Sau khi Quý khách nhận được việc hủy vé chính thức từ Công ty Vietravel, Quý khách vui lòng mang theo văn bản này đến bất kỳ chi nhánh Vietravel nào hoặc gửi qua địa chỉ email: sales@vietravel.com để được hoàn tiền. 
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    - Nếu Quý khách hủy chương trình du lịch ít nhất 45 ngày trước ngày khởi hành, Vietravel sẽ hoàn lại toàn bộ số tiền cọc. Nếu Quý khách hủy chương trình du lịch ít hơn 45 ngày trước ngày khởi hành, Vietravel sẽ tính phí hủy như sau:
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    - Hủy từ 31 - 44 ngày: mất 30% giá trị tour.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    - Hủy từ 16 - 30 ngày: mất 50% giá trị tour.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    - Hủy từ 08 - 15 ngày: mất 75% giá trị tour.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    - Hủy sau 07 ngày hoặc không đi: mất 100% giá trị tour.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Đối với các tour tham quan hành hương, lễ hội, tour nước ngoài, vé máy bay, vé tham quan đặt chỗ có điều kiện hủy hoặc không hoàn lại, Vietravel sẽ thực hiện hủy chương trình theo qui định của đối tác dịch vụ.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Vietravel có quyền từ chối hủy chương trình nếu Quý khách chưa hoàn tất các nghĩa vụ tài chính đối với Vietravel, phải chịu trách nhiệm bồi thường thiệt hại cho Vietravel nếu có thiệt hại.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    <strong>V. CHÍNH SÁCH THAY ĐỔI</strong>
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Chính sách thay đổi liên quan đến tour du lịch (ngày khởi hành, chương trình tham quan…) phải được thực hiện theo thỏa thuận giữa hai bên. Mọi sự thay đổi có thể dẫn đến việc điều chỉnh giá tour và/hoặc các chi phí phát sinh do thay đổi.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    <strong>VI. CHÍNH SÁCH BẢO HIỂM DU LỊCH</strong>
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Quý khách vui lòng tham khảo các điều khoản bảo hiểm du lịch của Vietravel tại địa chỉ: www.vietravel.com để biết thêm chi tiết.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    <strong>VII. CAM KẾT BẢO MẬT THÔNG TIN</strong>
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Vietravel cam kết bảo mật thông tin của Quý khách theo chính sách bảo mật của Công ty.
                                                </p>

                                                <p style={{ textAlign: 'justify', color: '#444444' }}>
                                                    Quý khách vui lòng đọc kỹ và hiểu rõ các điều khoản và điều kiện này trước khi đăng ký tham gia tour du lịch cùng Vietravel.
                                                </p>
                                            </div>
                                        </div>
                                        <label className="checker">
                                            Tôi đồng ý với các điều kiện trên
                                            <input type="checkbox" id="DieuKien" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4 col-12 right">
                                <div className="box-support">
                                    <label>Quý khách cần hỗ trợ?</label>
                                    <div className="group-contact" style={{ marginTop: '10px' }}>
                                        <a href="https://webcall.talking.vn/frame-click-to-call/new?code=tCEZl1-MKPuA6JU-czVAScCb0pPkHmPt" className="phone">
                                        <i className='bx bx-phone'></i>
                                        <p>Gọi miễn phí <br />qua internet</p>
                                        </a>
                                        <a href="mailto:info@vietravel.com" className="mail">
                                        <i className='bx bx-envelope'></i>
                                        <p>Gửi yêu cầu <br />hỗ trợ ngay</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="group-checkout">

                                    <h3>Tóm tắt chuyến đi</h3>

                                    <div className="product">
                                        <div className="product-image">
                                        <img src={tour?.tour?.img} className="img-fluid" alt="" />
                                        </div>
                                        <div className="product-content">
                                        <p className="title">{tour?.tour?.tour_name}</p>
                                        </div>
                                    </div>

                                    <div className="go-tour">
                                        <div className="start">
                                        <i className='bx bx-current-location'></i>
                                        <div className="start-content">
                                            <h4>Bắt đầu chuyến đi</h4>
                                            <p className="time">{tour?.tour?.start_date}</p>
                                            <p className="from"></p>
                                        </div>
                                        </div>
                                        <div className="end">
                                        <i className='bx bx-current-location'></i>
                                        <div className="start-content">
                                            <h4 style={{ marginBottom: '0px' }}>Kết thúc chuyến đi</h4>
                                            <p className="time">{tour?.tour?.end_date}</p>
                                            <p className="from"></p>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="detail">
                                        <table>
                                        <thead>
                                            <tr>
                                            <th className="l1" style={{ textAlign: 'left' }}>
                                                <i className="bx bx-group" id="AmoutPerson"></i>
                                                Hành khách
                                            </th>
                                            <th className="l2 text-right">
                                                <span className="total-booking">{tour?.tour?.price}</span>
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="detail">
                                            <td>Người lớn</td>
                                            <td className="t-price text-right">{adultsArray.length} x {tour?.tour?.price}</td>
                                            </tr>

                                            {childrenArray.length > 0 && (
                                            <tr className="detail">
                                                <td>Trẻ em</td>
                                                <td className="t-price text-right">{childrenArray.length} x {tour?.tour?.price}</td>
                                            </tr>
                                            )}

                                            {young_childsArray.length > 0 && (
                                            <tr className="detail">
                                                <td>Trẻ nhỏ</td>
                                                <td className="t-price text-right">{young_childsArray.length} x {tour?.tour?.price}</td>
                                            </tr>
                                            )}

                                            {babysArray.length > 0 && (
                                            <tr className="detail">
                                                <td>Em bé</td>
                                                <td className="t-price text-right">{babysArray.length} x {tour?.tour?.price}</td>
                                            </tr>
                                            )}

                                            <tr className="total">
                                            <td>Tổng tiền </td>
                                            <td className="t-price text-right">{total}</td>
                                            </tr>
                                        </tbody>
                                        </table>

                                        <button className="btn btn-primary btn-order" onClick={() => paychangePage(page)}>Đặt ngay</button>
                                    </div>

                                    </div>
                            </div>

                        </div>

                    </div>

                </section>
            </div>
        </>
    )
    
}

export default InformationPayment;