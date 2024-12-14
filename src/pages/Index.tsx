import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import WorkflowChart from "@/components/WorkflowChart";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WhatsAppDemo />
      <WorkflowChart />
      <Contact />
    </main>
  );
};

export default Index;