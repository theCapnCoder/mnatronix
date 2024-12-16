import { useTranslations } from "next-intl";
import { Container } from "../_components/container";
import BgSmall from "@img/bg/bg-small.jpg";
import clsx from "clsx";
import Image from "next/image";

type CardData = {
  id: string;
  title: string;
  description: string;
};

type CardProps = {
  card: CardData;
  isLongText?: boolean;
};

const Card: React.FC<CardProps> = ({ card, isLongText }) => {
  const maxWidthClass = isLongText ? "max-w-[35ch]" : "max-w-[25ch]";

  return (
    <div
      key={card.id}
      className={clsx(
        "bg-white ~rounded-2xl/[2rem] ~p-4/8",
        "flex flex-col justify-between"
      )}
    >
      <div
        className={clsx(
          "flex items-center justify-center",
          "rounded-full bg-bg ~h-[3.75rem]/[5rem] ~w-[3.75rem]/[5rem]"
        )}
      >
        <p className="font-medium ~text-[1.75rem]/[2.5rem]">{card.id}</p>
      </div>

      <div>
        <h4 className="mb-2 text-m font-semibold">{card.title}</h4>
        <p className={clsx("text-s leading-tight", maxWidthClass)}>
          {card.description}
        </p>
      </div>
    </div>
  );
};

export const Technologies = () => {
  const t = useTranslations("technologies");

  const cards = [
    {
      id: t("services.service_1.id"),
      title: t("services.service_1.title"),
      description: t("services.service_1.description"),
    },
    {
      id: t("services.service_2.id"),
      title: t("services.service_2.title"),
      description: t("services.service_2.description"),
    },
    {
      id: t("services.service_3.id"),
      title: t("services.service_3.title"),
      description: t("services.service_3.description"),
    },
    {
      id: t("services.service_4.id"),
      title: t("services.service_4.title"),
      description: t("services.service_4.description"),
    },
  ];

  return (
    <section>
      <Container>
        <h2 className="text-xl font-semibold ~mb-2/3">{t("title")}</h2>
        <h3 className="mb-5 text-s leading-snug">{t("description")}</h3>

        <div
          className={clsx("xl:hidden", "grid gap-5", "md:grid-cols-2 md:gap-6")}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={clsx("bg-white ~rounded-2xl/[2rem] ~p-4/8")}
            >
              <div
                className={clsx(
                  "~mb-[0.625rem]/[2.625rem]",
                  "flex items-center justify-center",
                  "rounded-full bg-bg ~h-[3.75rem]/[5rem] ~w-[3.75rem]/[5rem]"
                )}
              >
                <p className="font-medium ~text-[1.75rem]/[2.5rem]">
                  {card.id}
                </p>
              </div>

              <h4 className="mb-2 text-m font-semibold">{card.title}</h4>
              <p className="max-w-[25ch] text-s">{card.description}</p>
            </div>
          ))}
        </div>

        <div
          className={clsx(
            "hidden xl:grid",
            "h-[644px] grid-cols-[41%_57%] gap-6"
          )}
        >
          <div className="grid grid-rows-[50%_46%] content-between">
            <Card card={cards[0]} />
            <Card card={cards[2]} />
          </div>

          <div className="grid grid-rows-[43%_54%] content-between">
            <Card card={cards[1]} isLongText />

            <div className="grid grid-cols-[55%_41%] justify-between">
              <Card card={cards[3]} />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                <Image
                  src={BgSmall}
                  alt="background image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
