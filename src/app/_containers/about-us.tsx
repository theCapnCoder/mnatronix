import { Arrow } from "@/assets/svg";
import BgMedium from "@img/bg/bg-medium.jpg";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Button } from "../_components/button";
import { Container } from "../_components/container";

export const AboutUs = () => {
  const t = useTranslations("about_us");

  return (
    <section className="relative h-[45rem]">
      <div className="md:hidden">
        <Container className="mb-2">
          <h2 className="text-xl font-semibold uppercase">{t("title")}</h2>
        </Container>
        <div className="relative mb-5 h-[16.25rem] w-full bg-black">
          <Image
            src={BgMedium}
            alt="background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <Container className="absolute top-[15%] md:static">
        <div
          className={clsx(
            "mx-auto w-full",
            "w-full md:flex md:gap-6",
            "~md:~h-[29.625rem]/[35.625rem] md:relative"
          )}
        >
          <div
            className={clsx(
              "relative mb-5 hidden h-[23.75rem] w-[22.125rem] overflow-hidden rounded-[2rem]",
              "~md:~w-[22.125rem]/[39.25rem] md:block"
            )}
          >
            <Image
              src={BgMedium}
              alt="background"
              fill
              className="object-cover"
            />
          </div>

          <h2
            className={clsx(
              "hidden pt-[1.875rem] tracking-wider",
              "md:block md:tracking-normal",
              "text-xl font-semibold uppercase"
            )}
          >
            {t("title")}
          </h2>

          <div
            className={clsx(
              "card",
              "mx-auto w-full bg-white ~rounded-[1rem]/[2rem] ~p-4/8",
              "~md:~max-w-[35.6875rem]/[46.0625rem] md:absolute md:bottom-0 md:right-0 md:p-8"
            )}
          >
            <h2
              className={clsx(
                "hidden xl:hidden",
                "mb-6 text-xl font-semibold uppercase"
              )}
            >
              {t("title")}
            </h2>
            <p className="mb-6 sm:leading-5 md:text-lg md:leading-5 xl:text-2xl xl:leading-tight">
              {t.rich("description_1", {
                span: (chunks) => (
                  <span className="font-semibold">{chunks}</span>
                ),
              })}
            </p>

            <p className="mb-6 sm:leading-5 md:text-lg md:leading-5 xl:text-2xl xl:leading-tight">
              {t("description_2")}
            </p>
            <Button endIcon={Arrow} className={clsx("w-full", "md:w-auto")}>
              {t("button")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
