import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "mx-auto max-w-[80rem]",
        "px-4 md:px-6 xl:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};
