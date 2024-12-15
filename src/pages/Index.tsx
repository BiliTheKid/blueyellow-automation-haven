import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhatWeDo } from "@/components/WhatWeDo";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyUs } from "@/components/WhyUs";
import { OurTools } from "@/components/OurTools";
import { Results } from "@/components/Results";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import WorkflowChart from "@/components/WorkflowChart";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhatWeDo />
      <Services />
      <HowItWorks />
      <WhyUs />
      <OurTools />
      <WhatsAppDemo />
      <WorkflowChart />
      <Results />
    </main>
  );
};

export default Index;