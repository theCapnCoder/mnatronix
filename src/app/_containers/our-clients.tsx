import CompanyLogo1 from "@img/companies/company-1.png";
import CompanyLogo2 from "@img/companies/company-2.png";
import CompanyLogo3 from "@img/companies/company-3.png";
import CompanyLogo4 from "@img/companies/company-4.png";
import CompanyLogo5 from "@img/companies/company-5.png";
import CompanyLogo6 from "@img/companies/company-6.png";
import CompanyLogo7 from "@img/companies/company-7.png";
import CompanyLogo8 from "@img/companies/company-8.png";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Container } from "../_components/container";

const companies = [
  {
    id: 1,
    img: CompanyLogo1,
    alt: "company logo",
  },
  {
    id: 2,
    img: CompanyLogo2,
    alt: "company logo",
  },
  {
    id: 3,
    img: CompanyLogo3,
    alt: "company logo",
  },
  {
    id: 4,
    img: CompanyLogo4,
    alt: "company logo",
  },
  {
    id: 5,
    img: CompanyLogo5,
    alt: "company logo",
  },
  {
    id: 6,
    img: CompanyLogo6,
    alt: "company logo",
  },
  {
    id: 7,
    img: CompanyLogo7,
    alt: "company logo",
  },
  {
    id: 8,
    img: CompanyLogo8,
    alt: "company logo",
  },
];

export const OurClients = () => {
  const t = useTranslations("our_clients");

  return (
    <section>
      <Container>
        <h2 className="text-xl font-semibold ~mb-3/8">{t("title")}</h2>
        <div
          className={clsx("grid grid-cols-12 ~gap-2/6", "place-items-stretch")}
        >
          {companies.map((company) => (
            <div
              key={company.id}
              className={clsx("relative ~sm/xl:~h-[3.625rem]/[9.375rem]", {
                "col-span-4 xl:col-span-3":
                  company.id === 1 ||
                  company.id === 2 ||
                  company.id === 3 ||
                  company.id === 6 ||
                  company.id === 7 ||
                  company.id === 8,
                "col-span-6 xl:col-span-3":
                  company.id === 4 || company.id === 5,
              })}
            >
              <Image
                src={company.img}
                alt={company.alt}
                fill
                className={clsx(
                  "bg-white object-scale-down ~rounded-[0.5rem]/[1.25rem]"
                )}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
