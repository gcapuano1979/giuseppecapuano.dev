import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
};

export default function Section({
  id,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="py-24"
    >
      {children}
    </section>
  );
}