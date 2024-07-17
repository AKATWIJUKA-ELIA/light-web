import Image from "next/image";
import React from "react";
import {  } from "next/font/google";
import Hero from "../../components/Hero";
import Header from "../../components/header";
import Info from "../../components/below-hero";
import Testimonial from "../../components/testimonial";

export default function Home() {
  return (
    <div className=" overflow-hidden " 
//     style={{ backgroundImage:`url('/images/newbg.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center', backgroundBlendMode:'multiply'}}
    >

      <Hero/>
      <Info />
      <Testimonial/>
    </div>
  );
}
