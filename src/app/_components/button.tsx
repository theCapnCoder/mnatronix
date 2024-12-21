import clsx from "clsx";
import { FC, PropsWithChildren, SVGProps } from "react";

type Props = PropsWithChildren<{
  className?: string;
  startIcon?: FC<SVGProps<SVGSVGElement>>;
  endIcon?: FC<SVGProps<SVGSVGElement>>;
}>;

export const Button: React.FC<Props> = ({
  children,
  startIcon: StartIcon,
  endIcon: EndIcon,
  className,
}) => {
  return (
    <button
      className={clsx(
        "~py-4/6",
        "rounded-[3.125rem] border-2 border-black",
        "relative",
        {
          "~pr-4/[0.9375rem] ~pl-11/[4.75rem]": StartIcon,
          "~pr-[3.625rem]/[4.625rem] ~pl-5/8": EndIcon,
        },
        "font-semibold ~text-lg/2xl",
        className
      )}
    >
      {StartIcon && (
        <div
          className={clsx(
            "flex items-center justify-center",
            "absolute top-[50%] -translate-y-1/2 ~left-[0.375rem]/3",
            "~h-[2.625rem]/[3.25rem] ~w-[2.625rem]/[3.25rem]",
            "rounded-full bg-black"
          )}
        >
          <StartIcon
            className={clsx("text-white", "~h-6/[1.875rem] ~w-6/[1.875rem]")}
          />
        </div>
      )}
      {children}
      {EndIcon && (
        <div
          className={clsx(
            "flex items-center justify-center",
            "absolute top-[50%] -translate-y-1/2 ~right-[0.375rem]/3",
            "~h-[2.625rem]/[3.25rem] ~w-[2.625rem]/[3.25rem]",
            "rounded-full bg-black"
          )}
        >
          <EndIcon
            className={clsx("text-white", "~h-6/[1.875rem] ~w-6/[1.875rem]")}
          />
        </div>
      )}
    </button>
  );
};
