import styles from './ServicesOverview.module.css';
import type { ServiceOffering } from '../content/types';

interface ServicesOverviewProps {
  services: ServiceOffering[];
}

export function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <header>
        <h2 id="services-heading" className={styles.heading}>
          Services engineered for quiet, refined spaces
        </h2>
        <p className={styles.intro}>
          From modern acoustic shells to heritage plaster restoration, FarosPlus delivers integrated craft and measurable performance.
        </p>
      </header>

      <div className={styles.serviceGrid}>
        {services.map((service) => (
          <article key={service.id} className={styles.card} aria-labelledby={`${service.id}-title`}>
            <h3 id={`${service.id}-title`} className={styles.cardTitle}>
              {service.name}
            </h3>
            <p className={styles.cardDescription}>{service.description}</p>
            <ul className={styles.benefits}>
              {service.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
