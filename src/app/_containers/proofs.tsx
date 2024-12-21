"use client";
import { ArrowRightRegular } from "@/assets/svg";
import Aavatar from "@img/avatar.jpg";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { Container } from "../_components/container";
import { Star } from "@/assets/svg";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import clsx from "clsx";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { MiniButton } from "../_components/mini-button";

type SlideProps = {
  slide: {
    id: number;
    img: StaticImageData;
    alt: string;
    name: string;
    title: string;
    text: string;
    rate: number;
  };
};

const Slide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 md:flex-row md:gap-[3.125rem]",
        "bg-white ~rounded-[1rem]/[2rem] ~p-5/10"
      )}
    >
      <div className="flex items-center gap-[0.625rem] md:flex-col">
        <div className="relative rounded-full ~h-[2.625rem]/[3.75rem] ~w-[2.625rem]/[3.75rem]">
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="font-medium ~text-base/[1.0625rem]">{slide.name}</h4>
          <div className="flex gap-[0.375rem]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={clsx("~text-base/lage", {
                  "text-black": index < slide.rate,
                  "text-[#ddd]": index >= slide.rate,
                })}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="*:text-left">
        <h4 className="mb-3 font-medium ~text-base/2xl">{slide.title}</h4>
        <p className="~text-base/2xl">{slide.text}</p>
      </div>
    </div>
  );
};

export const Proofs = () => {
  const t = useTranslations("proofs");

  const slides = [
    {
      id: 1,
      img: Aavatar,
      alt: "photo",
      name: t("reviews.review_1.name"),
      title: t("reviews.review_1.title"),
      text: t("reviews.review_1.text"),
      rate: 3,
    },
    {
      id: 2,
      img: Aavatar,
      alt: "photo",
      name: t("reviews.review_2.name"),
      title: t("reviews.review_2.title"),
      text: t("reviews.review_2.text"),
      rate: 4,
    },
    {
      id: 3,
      img: Aavatar,
      alt: "photo",
      name: t("reviews.review_3.name"),
      title: t("reviews.review_3.title"),
      text: t("reviews.review_3.text"),
      rate: 3,
    },
  ];

  const [swiperInstance, setSwiperInstane] = useState<SwiperType | null>(null);

  // TODO: Update the logic to handle button disabling directly using swiperInstance.isEnd and swiperInstance.isBeginning without maintaining separate state variables.

  const [isEnd, setIsEnd] = useState(true);
  const [isBeginning, setIsBeginning] = useState(false);

  return (
    <section>
      <Container className="">
        <div className="relative">
          <h2 className="~md:~tracking-wider/tracking-normal text-xl font-semibold uppercase ~mb-3/4">
            {t("title")}
          </h2>
          <p className="~md:~tracking-tighter/tracking-normal text-s ~mb-5/[1.875rem] ~md:~max-w-[33rem]/[43.75rem] md:leading-5">
            {t("description")}
          </p>

          <div
            className={clsx(
              "hidden",
              "gap-4 md:flex",
              "absolute -bottom-[0.625rem] right-0"
            )}
          >
            <MiniButton
              onClick={() => {
                swiperInstance?.slidePrev();
                if (swiperInstance) {
                  setIsBeginning(swiperInstance.isBeginning);
                  setIsEnd(swiperInstance.isEnd);
                }
              }}
              icon={<ArrowRightRegular className="rotate-180" />}
              disabled={isBeginning}
            ></MiniButton>

            <MiniButton
              onClick={() => {
                swiperInstance?.slideNext();
                if (swiperInstance) {
                  setIsBeginning(swiperInstance.isBeginning);
                  setIsEnd(swiperInstance.isEnd);
                }
              }}
              disabled={isEnd}
              icon={<ArrowRightRegular />}
            ></MiniButton>
          </div>
        </div>

        <div className="md:hidden gap-4 flex flex-col">
          {slides.map((slide) => (
            <Slide key={slide.id} slide={slide} />
          ))}
        </div>

        <div className="hidden md:block">
          <Swiper
            onSwiper={(swiper) => {
              setSwiperInstane(swiper);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            slidesPerView={1}
            modules={[Navigation]}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Slide slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
