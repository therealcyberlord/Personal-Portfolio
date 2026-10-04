import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  id?: string;
};

const SectionHeading = ({ eyebrow, title, id }: SectionHeadingProps) => (
  <Reveal className="mb-8 md:mb-12">
    <p className="eyebrow text-sky-400">{eyebrow}</p>
    <h2 id={id} className="display mt-3 text-4xl text-gray-200 md:text-5xl">
      {title}
    </h2>
  </Reveal>
);

export default SectionHeading;
