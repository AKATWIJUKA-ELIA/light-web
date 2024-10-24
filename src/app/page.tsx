import Image from "next/image";
import React from "react";
import {  } from "next/font/google";
import Hero from "../../components/Hero";
import Header from "../../components/header";
import Info from "../../components/below-hero";
import Testimonial from "../../components/testimonial";
// import Carousel from "../../components/Carousel";
import { useEffect, useState } from "react";


export default function Home() {
  return (
    <div className=" overflow-hidden " 
//     style={{ backgroundImage:`url('/images/newbg.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center', backgroundBlendMode:'multiply'}}
    >
      
      <Hero/>
      {/* <Carousel/> */}
      <Info />
      
      <Testimonial/>
      
    </div>
  );
}
