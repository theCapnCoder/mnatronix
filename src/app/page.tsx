import { useTranslations } from "next-intl";
import { Header } from "./_containers/header";

export default function Home() {
  const t = useTranslations("header");

  return (
    <div className="~pt-[1.3125rem]/[1.5rem]">
      <Header />
      <h2 className="leading-xxs leadi text-xxl">Home</h2>
      <h1 className="text-3xl ~leading-[140%]/[1.2]">Home</h1>
      <p>{t("button")}</p>
    </div>
  );
}
