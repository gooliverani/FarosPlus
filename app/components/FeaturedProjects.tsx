import styles from './FeaturedProjects.module.css';
import type { FeaturedProject } from '../content/types';

function imageSources(src: string) {
  const base = src.replace(/\.[a-zA-Z0-9]+$/, '');
  return {
    avif: `${base}.avif`,
    webp: `${base}.webp`,
    fallback: src
  };
}

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section id="featured-projects" className={styles.section} aria-labelledby="featured-projects-heading">
      <header className={styles.sectionHeader}>
        <h2 id="featured-projects-heading" className={styles.heading}>
          Featured project spotlights
        </h2>
        <p className={styles.subheading}>
          Four recent engagements that demonstrate how FarosPlus combines plaster craftsmanship with advanced acoustic engineering.
        </p>
      </header>

      <ul className={styles.grid} aria-label="Featured projects">
        {projects.map((project) => {
          const { avif, webp, fallback } = imageSources(project.image.src);

          return (
            <li key={project.id} className={styles.card}>
              <picture>
                <source srcSet={avif} type="image/avif" />
                <source srcSet={webp} type="image/webp" />
                <img
                  className={styles.projectImage}
                  src={fallback}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  loading="lazy"
                />
              </picture>

              <div className={styles.meta}>
                <span>{project.location}</span>
                <span>{project.serviceCategory.replace(/^(.)/, (letter) => letter.toUpperCase())}</span>
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              {project.highlight ? <span className={styles.highlight}>{project.highlight}</span> : null}

              {project.testimonial ? (
                <blockquote className={styles.testimonial}>
                  <span>&ldquo;{project.testimonial.quote}&rdquo;</span>
                  <cite>{project.testimonial.author}</cite>
                </blockquote>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
