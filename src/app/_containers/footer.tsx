import { Insta, Telegram, Whatsapp } from "@/assets/svg";
import LogoWithText from "@img/logo-with-text.png";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Container } from "../_components/container";

export const Footer = () => {
  const t = useTranslations("footer");

  const links = [
    {
      title: t("links.about_us"),
      href: "#",
    },
    {
      title: t("links.services"),
      href: "#",
    },
    {
      title: t("links.advantages"),
      href: "#",
    },
    {
      title: t("links.blog"),
      href: "#",
    },
    {
      title: t("links.portfolio"),
      href: "#",
    },
    {
      title: t("links.contacts"),
      href: "#",
    },
  ];

  return (
    <footer>
      <Container>
        <div className="md:flex md:justify-between">
          <div>
            <Image
              src={LogoWithText}
              alt="logo"
              className="mx-auto mb-5 md:mx-0"
            />
            <h4 className="hidden text-xs md:block md:max-w-[22.25rem]">
              {t("title")}
            </h4>
          </div>

          <div className="md:ml-auto ~md/2xl:~mr-2/32">
            <h4 className="hidden text-xs md:mb-2 font-bold md:block">
              {t("link_title")}
            </h4>
            <ul className="mb-10 grid grid-cols-3 gap-y-7 md:block">
              {links.map((link) => (
                <li key={link.title}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:max-w-[19.125rem]">
            <h4 className="hidden font-bold md:block md:mb-2">
              {t("contact_info.title")}
            </h4>
            <p className="hidden md:block md:mb-3">{t("contact_info.call_us")}</p>
            <p className="md:text-normal text-center text-xs font-medium ~mb-[0.875rem]/7 md:text-left">
              {t("contact_info.phone")}
            </p>
            <div
              className={clsx(
                "mb-8 flex justify-center gap-3 md:justify-start",
                "*:flex *:cursor-pointer *:items-center *:justify-center *:rounded-full *:bg-white *:text-3xl *:~h-[3.125rem]/[3.25rem] *:~w-[3.125rem]/[3.25rem]"
              )}
            >
              <div>
                <Telegram />
              </div>
              <div>
                <Insta />
              </div>
              <div>
                <Whatsapp />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-grey"></div>

        <p className="~py-6/4 text-center">{t("copyright")}</p>
      </Container>
    </footer>
  );
};
