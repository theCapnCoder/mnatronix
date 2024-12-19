import { useTranslations } from "next-intl";
import React from "react";
import { Container } from "../_components/container";
import { Accordion } from "../_components/Accordion/accordion";

export const Workflow = () => {
  const t = useTranslations("workflow");

  const items = [
    {
      id: 1,
      title: t("process.stage_1.title"),
      description: t("process.stage_1.details"),
    },
    {
      id: 2,
      title: t("process.stage_2.title"),
      description: t("process.stage_2.details"),
    },
    {
      id: 3,
      title: t("process.stage_3.title"),
      description: t("process.stage_3.details"),
    },
    {
      id: 4,
      title: t("process.stage_4.title"),
      description: t("process.stage_4.details"),
    },
    {
      id: 5,
      title: t("process.stage_5.title"),
      description: t("process.stage_5.details"),
    },
  ];

  return (
    <section>
      <Container>
        <h2 className="mb-4 text-xl font-semibold">{t("title")}</h2>
        <p className="mb-4 text-s leading-tight">{t("description")}</p>

        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <Accordion
              key={item.id}
              startId={`0${item.id}`}
              title={item.title}
              description={item.description}
            ></Accordion>
          ))}
        </div>
      </Container>
    </section>
  );
};
