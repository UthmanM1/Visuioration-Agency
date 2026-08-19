import Link from "next/link";

export default function CommerceCaseStudyCard({
  href,
  label,
  title,
  sub,
  description,
  tags,
  mark,
}: {
  href: string;
  label: string;
  title: string;
  sub: string;
  description: string;
  tags: string[];
  mark: string;
}) {
  return (
    <Link href={href} className="commerce-card">
      <div className="cc-visual" aria-hidden="true">
        <span className="cc-mark">{mark}</span>
      </div>
      <div className="cc-label">{label}</div>
      <h4>{title}</h4>
      <div className="cc-sub">{sub}</div>
      <p>{description}</p>
      <div className="cc-tags">
        {tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
    </Link>
  );
}
