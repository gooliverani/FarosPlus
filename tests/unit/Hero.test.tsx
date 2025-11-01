import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Hero } from '../../app/components/Hero';
import { flagshipProject } from '../../app/content/flagshipProject';

afterEach(() => {
  cleanup();
});

describe('Hero', () => {
  it('renders flagship content and CTA', () => {
    render(<Hero project={flagshipProject} />);

    expect(screen.getByRole('heading', { name: flagshipProject.title })).toBeInTheDocument();
    expect(screen.getByText(flagshipProject.summary)).toBeInTheDocument();
    expect(screen.getByText(flagshipProject.resultMetric)).toBeInTheDocument();

    const cta = screen.getByRole('link', { name: /Call FarosPlus/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', `tel:${flagshipProject.primaryCta.value.replace(/[^+\d]/g, '')}`);
  });

  it('lists each delivered service', () => {
    render(<Hero project={flagshipProject} />);

    flagshipProject.services.forEach((service) => {
      expect(screen.getByText(service)).toBeInTheDocument();
    });
  });
});
