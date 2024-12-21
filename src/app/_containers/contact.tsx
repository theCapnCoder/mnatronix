import React from "react";
import { useTranslations } from "next-intl";
import { Container } from "../_components/container";
import clsx from "clsx";
import { NavButton } from "../_components/nav-button";

export const Contact = () => {
  const t = useTranslations("contact");

  return (
    <section className="~py-8/14">
      <div className="bg-img-large py-4 md:py-0">
        <Container>
          <div className="flex w-full flex-col items-center xl:items-start">
            <div className="max-w-[32.5rem] xl:flex xl:w-full xl:max-w-full xl:justify-between xl:px-20 xl:py-14">
              <div className="xl:w-[35.25rem] xl:justify-between">
                <h2 className="mb-3 text-xl font-semibold text-white xl:mb-0">
                  {t("title")}
                </h2>
                <p className="mb-4 text-s text-white">{t("description")}</p>
              </div>

              <div className="xl:w-[28.75rem]">
                <form
                  className={clsx(
                    "*:rounded-3xl *:border-2 *:border-grey *:px-[1.375rem] *:~py-4/5 *:placeholder:text-xs",
                    "flex flex-col gap-4 bg-white px-4 py-5 ~rounded-[1rem]/[2rem] ~md:~p-5/10"
                  )}
                >
                  <input type="text" placeholder={t("form.fields.name")} />
                  <input type="email" placeholder={t("form.fields.email")} />
                  <input type="tel" placeholder={t("form.fields.phone")} />
                  <textarea
                    placeholder={t("form.fields.note")}
                    className="h-[10rem]"
                  />

                  <NavButton>{t("form.button")}</NavButton>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
