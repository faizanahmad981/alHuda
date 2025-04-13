

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
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeDefault />
      <AboutUsSection />
      <CompanyBackground />
      <Doors/>
      <Office/>
      <HomeFurniture/>
      <Kitchen/>
      <Wardrobes/>
      <Duties/>
      <WhyUs/>
      <EndPage/>
      
    </div>
  );
}
