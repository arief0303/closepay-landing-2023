import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Saas/Banner";
import Features from "../components/Saas/Features";
import Overview from "../components/Saas/Overview";
import JoinCard from "../components/Saas/JoinCard";
import CtaCard from "../components/Saas/CtaCard";
import SaasTools from "../components/Saas/SaasTools";
import Funfact from "../components/Saas/Funfact";
import WhoUseClosepay from "../components/Saas/WhoUseClosepay";
import PricingPlan from "../components/Saas/PricingPlan";
import GetStarted from "../components/Saas/GetStarted";
import Feedback from "../components/Saas/Feedback";
import Partner from "../components/Saas/Partner";

const Saas = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <Features />

      <Overview />

      <JoinCard />

      <CtaCard />

      <SaasTools />

      <Funfact />

      <WhoUseClosepay />

      <PricingPlan />

      <GetStarted />

      <Feedback />

      <Partner />

      <Footer />
    </>
  );
};

export default Saas;
