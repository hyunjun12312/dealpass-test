import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TransactionFlow } from "../components/TransactionFlow";
import { DualPointSystem } from "../components/DualPointSystem";
import { TierSystem } from "../components/TierSystem";
import { Security } from "../components/Security";
import { PlatformFeatures } from "../components/PlatformFeatures";
import { ThreeStepProcess } from "../components/ThreeStepProcess";
import { DisputeResolution } from "../components/DisputeResolution";
import { Footer } from "../components/Footer";
import { ScrollButton } from "../components/ScrollButton";

export function LandingPage() {
  return (
    <div className="bg-black overflow-y-scroll smooth-scroll-snap h-screen">
      <Header />
      <Hero />
      <TransactionFlow />
      <DualPointSystem />
      <TierSystem />
      <Security />
      <PlatformFeatures />
      <ThreeStepProcess />
      <DisputeResolution />
      <Footer />
      <ScrollButton />
    </div>
  );
}
