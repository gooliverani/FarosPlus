import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ContactFooter } from '../../app/components/ContactFooter';
import { contactChannels, contactForm, primaryPhoneNumber } from '../../app/content/contact';
import { flagshipProject } from '../../app/content/flagshipProject';

afterEach(() => {
  cleanup();
});

describe('ContactFooter', () => {
  it('surfacing contact actions that mirror the hero CTA', () => {
    render(
      <ContactFooter
        contactChannels={contactChannels}
        formEndpoint={contactForm.endpoint}
        redirectUrl={contactForm.redirect}
        fallbackMessage={contactForm.fallbackMessage}
      />
    );

    const phoneLink = screen.getByRole('link', { name: /Call FarosPlus/i });
    expect(phoneLink).toHaveAttribute('href', `tel:${primaryPhoneNumber.replace(/[^+\d]/g, '')}`);
    expect(flagshipProject.primaryCta.value).toBe(primaryPhoneNumber);

    const emailLink = screen.getByRole('link', { name: /Email project team/i });
    expect(emailLink).toHaveAttribute('href', `mailto:${contactChannels.find((c) => c.type === 'email')?.value}`);
  });

  it('posts to the configured form endpoint with redirect fallback', () => {
    render(
      <ContactFooter
        contactChannels={contactChannels}
        formEndpoint={contactForm.endpoint}
        redirectUrl={contactForm.redirect}
        fallbackMessage={contactForm.fallbackMessage}
      />
    );

  const form = screen.getByRole('form', { name: /Send an inquiry/i });
    expect(form).toHaveAttribute('action', contactForm.endpoint);

    const redirect = form.querySelector('input[name="_redirect"]');
    expect(redirect).toHaveAttribute('value', contactForm.redirect);

    expect(screen.getByText(contactForm.fallbackMessage)).toBeInTheDocument();
  });
});
