import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhatWeDo } from "@/components/WhatWeDo";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyUs } from "@/components/WhyUs";
import { OurTools } from "@/components/OurTools";
import { Results } from "@/components/Results";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import WorkflowChart from "@/components/WorkflowChart";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      <HowItWorks />
      <WhyUs />
      <OurTools />
      <WhatsAppDemo />
      <WorkflowChart />
      <Results />
      <Contact />
    </main>
  );
};

export default Index;