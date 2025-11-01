import styles from './TrustSignals.module.css';
import type { TrustSignal } from '../content/types';

interface TrustSignalsProps {
  trustSignals: TrustSignal[];
}

export function TrustSignals({ trustSignals }: TrustSignalsProps) {
  return (
    <section id="trust" className={styles.section} aria-labelledby="trust-heading">
      <h2 id="trust-heading" className={styles.heading}>
        Trusted delivery in sensitive environments
      </h2>
      <div className={styles.list}>
        {trustSignals.map((signal) => (
          <article key={signal.id} className={styles.signal} aria-labelledby={`${signal.id}-title`}>
            <h3 id={`${signal.id}-title`} className={styles.title}>
              {signal.title}
            </h3>
            <p className={styles.description}>{signal.description}</p>
            <p className={styles.proof}>{signal.proof}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
