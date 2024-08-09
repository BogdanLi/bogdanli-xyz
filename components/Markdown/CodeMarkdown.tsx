import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const KeywordMarkdown = ({ children, className = "" }: Props) => {
  return <span className={`text-secondary-300 ${className}`}>{children}</span>;
};

export const NameMarkdown = ({ children, className = "" }: Props) => {
  return <span className={`text-accent-200 ${className}`}>{children}</span>;
};

export const StringMarkdown = ({ children, className = "" }: Props) => {
  return (
    <span className={`text-accent-100 ${className}`}>
      &quot;{children}&quot;
    </span>
  );
};

export const ArrayMarkdown = ({ children, className = "" }: Props) => {
  return <span className={`text-yellow-300 ${className}`}>{children}</span>;
};
