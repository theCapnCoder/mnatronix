import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("header");

  return (
    <div>
      <h2>Home</h2>
      <p>{t("nav.about_us")}</p>

    </div>
  );
}
