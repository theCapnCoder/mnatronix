import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("header");

  return (
    <div>
      <h2 className="leading-xxs leadi text-xxl">Home</h2>
      <h1 className="text-3xl ~leading-[140%]/[1.2]">Home</h1>
      <p>{t("button")}</p>
    </div>
  );
}
