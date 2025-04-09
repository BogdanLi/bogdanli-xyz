import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "tr" | "bl";
  className?: string;
  style?: string;
};

export default function GradientCard({
  children,
  variant,
  className = "",
  style = "",
}: Props) {
  if (variant === "bl") {
    return (
      <div
        className={`card relative !border-0 bg-linear-[200deg,var(--color-light-gray)_80%,#E63E21] ${className}`}
      >
        <div
          className={`text-secondary-text absolute top-0.5 right-0.5 bottom-0.5 left-0.5 flex grow items-center justify-center rounded-xl bg-linear-[200deg,var(--color-dark)_60%,#E63E21_150%] p-4 text-sm sm:text-2xl ${style}`}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`card relative !border-0 bg-linear-[40deg,var(--color-light-gray)_80%,#E63E21] ${className}`}
    >
      <div
        className={`text-secondary-text absolute top-0.5 right-0.5 bottom-0.5 left-0.5 flex grow items-center justify-center rounded-xl bg-linear-[60deg,var(--color-dark)_60%,#E63E21_150%] p-4 text-sm sm:text-2xl ${style}`}
      >
        {children}
      </div>
    </div>
  );
}
