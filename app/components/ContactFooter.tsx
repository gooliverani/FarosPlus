import styles from './ContactFooter.module.css';
import type { ContactChannel } from '../content/types';

function normaliseTel(value: string) {
  return value.replace(/[^+\d]/g, '');
}

interface ContactFooterProps {
  contactChannels: ContactChannel[];
  formEndpoint: string;
  redirectUrl: string;
  fallbackMessage: string;
}

export function ContactFooter({ contactChannels, formEndpoint, redirectUrl, fallbackMessage }: ContactFooterProps) {
  const phoneChannel = contactChannels.find((channel) => channel.type === 'phone');
  const emailChannel = contactChannels.find((channel) => channel.type === 'email');

  const phoneHref = phoneChannel ? `tel:${normaliseTel(phoneChannel.value)}` : undefined;
  const emailHref = emailChannel ? `mailto:${emailChannel.value}` : undefined;

  return (
    <footer className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.header}>
        <span className={styles.kicker}>Contact</span>
        <h2 id="contact-heading" className={styles.heading}>
          Ready to scope your plastering or acoustic project?
        </h2>
        <p className={styles.summary}>
          Reach us by phone, email, or the inquiry form. We will confirm the next steps and schedule a walkthrough within one business day.
        </p>
      </div>

      <div className={styles.ctaRow}>
        {phoneChannel && phoneHref ? (
          <a className={styles.ctaLink} href={phoneHref} aria-label={`${phoneChannel.label} at ${phoneChannel.value}`}>
            <span>{phoneChannel.label}</span>
            <span aria-hidden="true">{phoneChannel.value}</span>
          </a>
        ) : null}
        {emailChannel && emailHref ? (
          <a className={styles.ctaLink} href={emailHref} aria-label={`${emailChannel.label} ${emailChannel.value}`}>
            <span>{emailChannel.label}</span>
            <span aria-hidden="true">{emailChannel.value}</span>
          </a>
        ) : null}
      </div>

      <ul className={styles.contactList} aria-label="Contact details">
        {contactChannels.map((channel) => (
          <li key={channel.type}>
            <span className={styles.contactLabel}>{channel.label}</span>
            <span>{channel.value}</span>
            {channel.availability ? <span>{channel.availability}</span> : null}
          </li>
        ))}
      </ul>

      <div className={styles.formWrap}>
        <h3 id="contact-form-heading" className="sr-only">
          Send an inquiry
        </h3>
        <form className={styles.form} action={formEndpoint} method="post" aria-labelledby="contact-form-heading">
          <input type="hidden" name="_redirect" value={redirectUrl} />
          <input type="hidden" name="_subject" value="FarosPlus landing inquiry" />

          <div className={`${styles.fieldRow} ${styles.twoColumn}`}>
            <label className={styles.label} htmlFor="contact-name">
              Name
              <input className={styles.input} id="contact-name" name="name" type="text" autoComplete="name" required />
            </label>
            <label className={styles.label} htmlFor="contact-company">
              Company or project
              <input className={styles.input} id="contact-company" name="company" type="text" autoComplete="organization" />
            </label>
          </div>

          <div className={`${styles.fieldRow} ${styles.twoColumn}`}>
            <label className={styles.label} htmlFor="contact-email">
              Email
              <input className={styles.input} id="contact-email" name="email" type="email" autoComplete="email" required />
            </label>
            <label className={styles.label} htmlFor="contact-phone">
              Phone
              <input className={styles.input} id="contact-phone" name="phone" type="tel" autoComplete="tel" />
            </label>
          </div>

          <label className={styles.label} htmlFor="contact-details">
            Project details
            <textarea className={styles.textarea} id="contact-details" name="details" rows={5} required aria-describedby="contact-help" />
          </label>

          <p id="contact-help" className={styles.disclaimer}>
            Please include location, timeline, and any acoustic goals. We will send a confirmation email right away.
          </p>

          <button className={styles.submitButton} type="submit">
            Send inquiry
          </button>
        </form>

        <div id="contact-thank-you" className={styles.thankYou} aria-live="polite">
          {fallbackMessage}
        </div>
      </div>
    </footer>
  );
}
