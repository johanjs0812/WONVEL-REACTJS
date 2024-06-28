import React from 'react';
import Banner from '../common/banner';
import ExploreSection from '../common/explore-section';
import ProductSection from '../common/section-product';
import ProvincesSection from '../common/provinces-section';

const Home = () => {
  return (
    <>
      <Banner />
      <ExploreSection />
      <ProductSection />
      <ProvincesSection />
    </>
  );
};

export default Home;
