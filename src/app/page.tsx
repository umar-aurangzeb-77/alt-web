import Hero from "@/components/sections/Hero";
import HorizontalShowcase from "@/components/sections/HorizontalShowcase";
import DefyLinearity from "@/components/sections/DefyLinearity";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
// import TechCompatibility from "@/components/sections/TechCompatibility";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <HorizontalShowcase /> */}
      <DefyLinearity />
      <Services />
      <Industries />
      {/* <TechCompatibility /> */}
    </>
  );
}
