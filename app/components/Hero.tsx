import styles from './Hero.module.css';
import type { FlagshipProject } from '../content/types';

function normaliseTel(value: string) {
  return value.replace(/[^+\d]/g, '');
}

function imageSources(src: string) {
  const base = src.replace(/\.[a-zA-Z0-9]+$/, '');
  return {
    avif: `${base}.avif`,
    webp: `${base}.webp`,
    fallback: src
  };
}

interface HeroProps {
  project: FlagshipProject;
  className?: string;
}

export function Hero({ project, className }: HeroProps) {
  const { avif, webp, fallback } = imageSources(project.heroImage.src);
  const telHref = `tel:${normaliseTel(project.primaryCta.value)}`;
  const sectionClass = className ? `${styles.hero} ${className}` : styles.hero;

  return (
    <section className={sectionClass} aria-labelledby="flagship-project-heading">
      <div className={styles.heroContent}>
        <p className={styles.kicker}>Flagship project</p>
        <h1 id="flagship-project-heading" className={styles.heading}>
          {project.title}
        </h1>
        <p className={styles.location}>{project.location}</p>
        <p className={styles.summary}>{project.summary}</p>

        <dl className={styles.metric} aria-label="Key project outcome">
          <dt className="sr-only">Result</dt>
          <dd>{project.resultMetric}</dd>
        </dl>

        <div className={styles.actions}>
          <a className={styles.cta} href={telHref} aria-label={`${project.primaryCta.label} at ${project.primaryCta.value}`}>
            <span>{project.primaryCta.label}</span>
            <span className={styles.ctaNumber} aria-hidden="true">
              {project.primaryCta.value}
            </span>
          </a>
        </div>

        <ul className={styles.services} aria-label="Services delivered">
          {project.services.map((service) => (
            <li key={service} className={styles.serviceBadge}>
              {service}
            </li>
          ))}
        </ul>
      </div>

      <figure className={styles.media} aria-labelledby="flagship-project-heading">
        <picture>
          <source srcSet={avif} type="image/avif" />
          <source srcSet={webp} type="image/webp" />
          <img
            className={styles.projectImage}
            src={fallback}
            alt={project.heroImage.alt}
            width={project.heroImage.width}
            height={project.heroImage.height}
            loading="eager"
          />
        </picture>
        {project.testimonial ? (
          <figcaption className={styles.testimonial}>
            <span>
              &ldquo;{project.testimonial.quote}&rdquo;
            </span>
            <cite>{project.testimonial.author}</cite>
          </figcaption>
        ) : null}
      </figure>
    </section>
  );
}
