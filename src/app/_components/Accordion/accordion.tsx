"use client";
import { ArrowRightRegular } from "@/assets/svg";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  startId: string;
  title: string;
  description: string;
  className?: string;
}>;

export const Accordion: React.FC<Props> = ({ startId, title, description }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      onClick={() => setOpen((prevStae) => !prevStae)}
      className={clsx(
        "flex items-center justify-between ~gap-4/8",
        "cursor-pointer p-4",
        {
          "rounded-[2rem] bg-grey p-4": open,
        }
      )}
    >
      <div
        className={clsx(
          "flex shrink-0 items-center justify-center",
          "rounded-full bg-white ~h-[3.125rem]/[5rem] ~w-[3.125rem]/[5rem]"
        )}
      >
        <div className="text-black ~text-2xl/4xl">{startId}</div>
      </div>

      <div className="mr-auto">
        <div className="font-semibold ~text-[1.125rem]/[2rem]">{title}</div>
        <div
          className={clsx(
            "transition ~text-base/2xl",
            open ? "block" : "hidden"
          )}
        >
          {description}
        </div>
      </div>

      <div
        className={clsx(
          "flex shrink-0 items-center justify-center",
          "rounded-full bg-black ~md:~h-[2.625rem]/[3.25rem] ~md:~w-[2.625rem]/[3.25rem]"
        )}
      >
        <ArrowRightRegular
          className={clsx(
            open ? "-rotate-45" : "rotate-0",
            "text-white ~text-2xl/3xl"
          )}
        />
      </div>
    </div>
  );
};
