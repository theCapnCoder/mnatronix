import clsx from "clsx";
import { FC, PropsWithChildren, SVGProps } from "react";

type Props = PropsWithChildren<{
  disabled?: boolean;
  className?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
}>;

export const NavButton: React.FC<Props> = ({
  children,
  disabled,
  icon: Icon,
  className,
}) => {
  const iconPaddingRight = Icon
    ? "~pr-[2.625rem]/[3.75rem]"
    : "~px-4/[1.625rem]";

  return (
    <button
      className={clsx(
        "relative rounded-[3.125rem] ~py-[0.875rem]/[1.1875rem] ~pl-4/[1.625rem]",
        "focus:btn-bg-shadow bg-black font-semibold leading-none text-white hover:bg-grey-4 focus:bg-black-1",
        {
          "bg-grey-2 text-grey-1": disabled,
          "pr-10": true,
        },
        iconPaddingRight,
        className
      )}
    >
      {children}
      {Icon && (
        <Icon className="absolute top-1/2 -translate-y-1/2 text-white ~right-[0.625rem]/[1.5625rem] ~h-5/6 ~w-5/6" />
      )}
    </button>
  );
};
