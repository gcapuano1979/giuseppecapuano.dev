import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { experiences } from "@/data/experience";

import ExperienceList from "./ExperienceList";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle>
          Professional Journey
        </SectionTitle>

        <ExperienceList experiences={experiences} />
      </Container>
    </Section>
  );
}