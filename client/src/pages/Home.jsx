import React from "react";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Home/Hero";
import Process from "../components/Home/Process";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import FinancialLegalBenefits from "../components/Home/FinancialLegalBenefits";
import OfficialCertificates from "../components/Home/OfficialCertificates";
import UrgentEnforcementAlert from "../components/Home/UrgentEnforcementAlert";
import Testimonials from "../components/Home/Testimonials";
import CallToAction from "../components/Home/CallToAction";

const Home = () => {
  return (
    <>
      <Hero />
      <Process />
      <WhyChooseUs />
      <FinancialLegalBenefits />
      <OfficialCertificates />
      <UrgentEnforcementAlert/>
      <Testimonials/>
      <CallToAction/>
    </>
  );
};

export default Home;
