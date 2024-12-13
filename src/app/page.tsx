import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("header");

  return (
    <div>
      <h2>Home</h2>
      <h1 className="text-3xl">Home</h1>
      <p>{t("nav.about_us")}</p>

    </div>
  );
}
