import { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

export default function SectionTitle({
  children,
}: SectionTitleProps) {
  return (
    <h2
      className="
        mb-12
        text-center
        text-4xl
        font-bold
        text-white
        md:text-5xl
      "
    >
      {children}
    </h2>
  );
}