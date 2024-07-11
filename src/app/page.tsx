import Image from "next/image";
import React from "react";
import {  } from "next/font/google";
import Hero from "../../components/Hero";
import Header from "../../components/header";
import Info from "../../components/below-hero";

export default function Home() {
  return (
    <div className="overflow-hidden " style={{backgroundColor:'rgba(0, 0, 0, 0.6)', backgroundImage:`url('/images/newbg.png')`,backgroundSize:'cover',backgroundPosition:'center', backgroundBlendMode:'multiply'}}>

      <Hero/>
      <Info />
    </div>
  );
}
