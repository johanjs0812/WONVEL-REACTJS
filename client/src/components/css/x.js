import React from 'react';

const Css = () => {
  return (
    <>
      <style>
        {`
.container{
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;
}

.titlle-section{
  color: #2d4271;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

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

        `}
      </style>
    </>
  );
};

export default Css;
