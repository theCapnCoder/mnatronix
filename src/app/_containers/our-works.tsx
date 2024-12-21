"use client";
import { ArrowRightRegular } from "@/assets/svg";
import Project1 from "@img/projects/project-1.jpg";
import Project2 from "@img/projects/project-2.jpg";
import Project3 from "@img/projects/project-3.jpg";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { Container } from "../_components/container";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import clsx from "clsx";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { MiniButton } from "../_components/mini-button";

type SlideProps = {
  project: {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
    buttton: string;
  };
};

const Slide: React.FC<SlideProps> = ({ project }) => {
  return (
    <div className="mb-10">
      <div className="relative w-full overflow-hidden ~mb-3/6 ~h-[15rem]/[47rem] ~rounded-[1rem]/[2rem]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="flex flex-col ~gap-2/3">
        <h3 className="font-semibold leading-5 ~text-[1.25rem]/[1.75rem]">
          {project.title}
        </h3>
        <p className="truncate-multiline">{project.description}</p>

        <div className="flex items-center ~gap-[0.5rem]/[0.375rem]">
          <button className="self-start font-semibold ~text-base/2xl">
            {project.buttton}
          </button>
          <ArrowRightRegular />
        </div>
      </div>
    </div>
  );
};

export const OurWorks = () => {
  const t = useTranslations("our_works");

  const projects = [
    {
      id: 1,
      image: Project1,
      title: t("project_examples.example_1.title"),
      description: t("project_examples.example_1.description"),
      buttton: t("project_examples.example_1.button"),
    },
    {
      id: 2,
      image: Project2,
      title: t("project_examples.example_2.title"),
      description: t("project_examples.example_2.description"),
      buttton: t("project_examples.example_2.button"),
    },
    {
      id: 3,
      image: Project3,
      title: t("project_examples.example_3.title"),
      description: t("project_examples.example_3.description"),
      buttton: t("project_examples.example_3.button"),
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

        <div className="md:hidden">
          {projects.map((project) => (
            <Slide key={project.id} project={project} />
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
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <Slide project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
