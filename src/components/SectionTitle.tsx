import '../styles/components/SectionTitle.css';

type Props = {
  title: string;
  description: string;
  highlight?: string;
};

const SectionTitle = ({ title, description, highlight }: Props) => (
  <>
    <h2 className="title">{title}</h2>
    <p className="description">
      {description}
      {highlight && <span className="highlight">{highlight}</span>}
    </p>
  </>
);

export default SectionTitle;