import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "tr" | "bl";
  className?: string;
};

export default function GradientCard({
  children,
  variant,
  className = "",
}: Props) {
  if (variant === "bl") {
    return (
      <div
        className={`bg-linear-[200deg,var(--color-light-gray)_80%,#E63E21] card relative !border-0 ${className}`}
      >
        <div
          className={`grow bg-linear-[200deg,var(--color-dark)_60%,#E63E21_150%] absolute top-0.5 left-0.5 right-0.5 bottom-0.5 rounded-xl flex items-center justify-center text-2xl text-secondary-text`}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-linear-[40deg,var(--color-light-gray)_80%,#E63E21] card relative !border-0 ${className}`}
    >
      <div
        className={`grow bg-linear-[60deg,var(--color-dark)_60%,#E63E21_150%] absolute top-0.5 left-0.5 right-0.5 bottom-0.5 rounded-xl flex items-center justify-center text-2xl text-secondary-text`}
      >
        {children}
      </div>
    </div>
  );
}
