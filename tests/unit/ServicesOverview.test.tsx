import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ServicesOverview } from '../../app/components/ServicesOverview';
import { serviceOfferings } from '../../app/content/services';

afterEach(() => {
  cleanup();
});

describe('ServicesOverview', () => {
  it('lists each service with its benefits', () => {
    render(<ServicesOverview services={serviceOfferings} />);

    expect(screen.getByRole('heading', { name: /Services engineered/i })).toBeInTheDocument();

    serviceOfferings.forEach((service) => {
      const card = screen.getByRole('article', { name: service.name });
      expect(within(card).getByText(service.description)).toBeInTheDocument();
      const bullets = within(card).getAllByRole('listitem');
      expect(bullets).toHaveLength(service.benefits.length);
    });
  });
});
