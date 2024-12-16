import { Header } from "./_containers/header";
import { Cta } from "./_containers/cta";
import { Technologies } from "./_containers/technologies";

export default function Home() {
  return (
    <div className="~pt-[1.3125rem]/[1.5rem] bg-bg mb-40">
      <Header />
      <Cta />
      <Technologies />
    </div>
  );
}
