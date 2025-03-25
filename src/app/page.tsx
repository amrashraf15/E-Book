"use client";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import Price from "@/components/Price";
import Reviews from "@/components/Reviews";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";


export default function Home() {
  useEffect(()=>{
    const initAOS=async()=>{
      await import("aos");
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom",
      });
    };
    initAOS();
  },[]);
  
  return (
   <main className="overflow-hidden">
      <Hero/>
      <About/>
      <Benefits/>
      <BestSelling/>
      <Price/>
      <Reviews/>
   </main>
  );
}
