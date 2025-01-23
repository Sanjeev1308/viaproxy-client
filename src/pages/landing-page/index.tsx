import Footer from '@/features/landing-page/components/footer';
import Header from '@/features/landing-page/components/header';
import LatestExchanges from '@/features/landing-page/components/latest-exchanges';
// import Hero from '@/features/landing-page/components/hero';
import { HeroCarousel } from '@/features/landing-page/components/hero-carousel';
import EcoSolidarityPartners from '@/features/landing-page/components/partners';
import ServicesGrid from '@/features/landing-page/components/register-middle';
import SupportCauses from '@/features/landing-page/components/support-cause';
import WhatIsYourNeedForm from '@/features/landing-page/components/what-you-need';
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      {/* <Hero /> */}
      <HeroCarousel />

      {/* Categories Section */}
      {/* <Categories /> */}
      <WhatIsYourNeedForm />

      {/* Featured Section */}
      <LatestExchanges />

      {/* Collections Section */}
      <EcoSolidarityPartners />

      <SupportCauses />

      <ServicesGrid />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default LandingPage;
