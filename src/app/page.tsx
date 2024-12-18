import { Header } from "./_containers/header";
import { Cta } from "./_containers/cta";
import { Technologies } from "./_containers/technologies";
import { AboutUs } from "./_containers/about-us";

export default function Home() {
  return (
    <div className="mb-40 bg-bg ~pt-[1.3125rem]/[1.5rem]">
      <Header />
      <Cta />
      <Technologies />
      <AboutUs />
    </div>
  );
}
