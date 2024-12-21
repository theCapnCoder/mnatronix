import { Header } from "./_containers/header";
import { Cta } from "./_containers/cta";
import { Technologies } from "./_containers/technologies";
import { AboutUs } from "./_containers/about-us";
import { OurWorks } from "./_containers/our-works";
import { Workflow } from "./_containers/workflow";
import { OurClients } from "./_containers/our-clients";
import { Proofs } from "./_containers/proofs";
import { Contact } from "./_containers/contact";
import { Footer } from "./_containers/footer";

export default function Home() {
  return (
    <div className="mb-40 bg-bg ~pt-[1.3125rem]/[1.5rem]">
      <Header />
      <Cta />
      <Technologies />
      <AboutUs />
      <OurWorks />
      <Workflow />
      <OurClients />
      <Proofs />
      <Contact />
      <Footer />
    </div>
  );
}
