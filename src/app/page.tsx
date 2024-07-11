import Image from "next/image";
import React from "react";
import {  } from "next/font/google";
import Hero from "../../components/Hero";
import Header from "../../components/header";

export default function Home() {
  return (
    <div className="overflow-hidden" style={{backgroundColor:'rgba(0, 0, 0, 0.6)', backgroundImage:`url('/images/bkgrnd.jpg')`,backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed', backgroundBlendMode:'multiply'}}>

      <Hero/>
    </div>
  );
}
