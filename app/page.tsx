

import AboutUsSection from "@/components/about";
import CompanyBackground from "@/components/background";
import HomeDefault from "@/components/home";
import NavBar from "@/components/navbar";
import Doors from "@/components/doors";
import Office from "@/components/office";
import HomeFurniture from "@/components/homeFurniture";
import Kitchen from "@/components/kitchen";
import Wardrobes from "@/components/wardrobes";
import WhyUs from "@/components/whyUs";
import EndPage from "@/components/endPage";
import Duties from "@/components/duties";


export default function Home() {
  return (
    <div>
    <NavBar />
    <section id="home"><HomeDefault /></section>
    <section id="about"><AboutUsSection /></section>
    <section id="background"><CompanyBackground /></section>
    <section id="doors"><Doors /></section>
    <section id="office"><Office /></section>
    <section id="furniture"><HomeFurniture /></section>
    <section id="kitchen"><Kitchen /></section>
    <section id="wardrobes"><Wardrobes /></section>
    <section id="duties"><Duties /></section>
    <section id="whyus"><WhyUs /></section>
    <section id="end"><EndPage /></section>
   
  </div>
  );
}
