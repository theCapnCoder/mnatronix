import { useTranslations } from "next-intl";
import { Button } from "../_components/button";
import { Arrow } from "@/assets/svg";
import { Container } from "../_components/container";
import clsx from "clsx";
import Image from "next/image";
import BgLarge from "@img/bg/bg-large.jpg";

// TODO: fix responsive

export const Cta = () => {
  const t = useTranslations("cta");

  return (
    <main>
      <Container>
        <h1 className="mb-1 text-xxl font-medium uppercase leading-tight md:hidden">
          {t("title")}
        </h1>

        <h1 className="hidden text-xxl font-medium uppercase leading-tight md:inline">
          {t("title_start")}
        </h1>
        <Button className="hidden md:inline" startIcon={Arrow}>
          Получить консультацию
        </Button>
        <h1 className="hidden text-xxl font-medium uppercase leading-tight md:block">
          {t("title_end")}
        </h1>

        <p
          className={clsx(
            "mb-5 font-medium ~text-base/2xl sm:leading-5",
            "xl:mb-14 md:ml-auto md:max-w-[42ch]"
          )}
        >
          {t("description")}
        </p>
        <Button className="mb-6 w-full md:hidden" startIcon={Arrow}>
          Получить консультацию
        </Button>


        <div className="relative w-full overflow-hidden ~h-40/[23.125rem] ~rounded-2xl/[2rem]">
          <Image src={BgLarge} alt="background" fill className="object-cover" />
        </div>
      </Container>
    </main>
  );
};
