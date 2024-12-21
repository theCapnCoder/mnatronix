import clsx from "clsx";
import { PropsWithChildren, ReactElement } from "react";

type Props = PropsWithChildren<{
  icon?: ReactElement;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}>;

export const MiniButton: React.FC<Props> = ({
  icon,
  children,
  disabled = false,
  onClick,
  className,
}) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center",
        "rounded-full ~md:~h-[2.625rem]/[3.25rem] ~md:~w-[2.625rem]/[3.25rem]",
        "cursor-pointer fill-white text-white",
        {
          "foucus:bg-black-1 bg-black hover:bg-grey-4": !disabled,
          "disabled cursor-not-allowed bg-grey-2": disabled,
        },
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="text-2xl text-white">{icon}</span>}
      {children}
    </button>
  );
};
