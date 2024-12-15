"use client";
import { AlignJustify, Arrow, Cancel } from "@/assets/svg";
import LogoWithText from "@img/logo-with-text.png";
import Logo from "@img/logo.png";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Container } from "../_components/container";
import { NavButton } from "../_components/nav-button";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const t = useTranslations("header");

  const links = [
    {
      title: t("nav.about_us"),
      href: "#",
    },
    {
      title: t("nav.services"),
      href: "#",
    },
    {
      title: t("nav.blog"),
      href: "#",
    },
    {
      title: t("nav.portfolio"),
      href: "#",
    },
    {
      title: t("nav.contacts"),
      href: "#",
    },
  ];

  const handleOpneMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className="~mb-10/14">
      <Container>
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="logo" className="min-[575px]:hidden" />
          <Image
            src={LogoWithText}
            alt="logo"
            className="hidden min-[575px]:block"
          />

          <nav className="hidden min-[1000px]:block">
            <ul className="flex items-center ~gap-[0rem]/[1.875rem]">
              {links.map((item) => (
                <li key={item.title}>
                  <a href={item.href} className="text-xs">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center ~gap-4/5">
            <NavButton icon={Arrow}>{t("button")}</NavButton>

            {isOpenMenu ? (
              <div
                onClick={handleOpneMenu}
                className={clsx(
                  "min-[1000px]:hidden",
                  "flex items-center justify-center",
                  "~h-11/14 ~w-11/14",
                  "cursor-pointer rounded-full bg-black"
                )}
              >
                <Cancel className="text-white ~h-6/8 ~w-6/8" />
              </div>
            ) : (
              <div
                onClick={handleOpneMenu}
                className={clsx(
                  "min-[1000px]:hidden",
                  "flex items-center justify-center",
                  "~h-11/14 ~w-11/14",
                  "cursor-pointer rounded-full bg-black"
                )}
              >
                <AlignJustify className="text-white ~h-6/8 ~w-6/8" />
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};
