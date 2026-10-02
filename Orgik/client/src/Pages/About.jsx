import React from 'react'
import WhyChooseUs from '../Components/WhyChooseUs Section/WhyChooseUs'
import AboutSection1 from '../Components/About Section 1/AboutSection1'
import CouponCode from '../Components/Coupon Code Section/CouponCode'
import FreeDelivery from '../Components/Free Delivery Section/FreeDelivery'
import Navbar from '../Components/Navbar/Navbar'

function About() {
  return (
    <>
    <Navbar/>
      <WhyChooseUs />
      <AboutSection1 />
      <CouponCode />
      <FreeDelivery />
    </>
  )
}

export default About
