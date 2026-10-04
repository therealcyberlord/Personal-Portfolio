import Reveal from "@/components/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => (
  <Reveal className="mb-16">
    <p className="eyebrow text-sky-400">{eyebrow}</p>
    <h1 className="display mt-3 text-5xl text-gray-200 md:text-7xl">{title}</h1>
    <p className="mt-5 max-w-xl text-lg text-gray-400">{description}</p>
  </Reveal>
);

export default PageHeader;
