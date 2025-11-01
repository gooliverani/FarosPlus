import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { FeaturedProjects } from '../../app/components/FeaturedProjects';
import { featuredProjects } from '../../app/content/featuredProjects';

afterEach(() => {
  cleanup();
});

describe('FeaturedProjects', () => {
  it('renders four featured project cards with imagery and headings', () => {
    render(<FeaturedProjects projects={featuredProjects} />);

    expect(screen.getByRole('heading', { name: /Featured project spotlights/i })).toBeInTheDocument();

    const projectHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(projectHeadings).toHaveLength(4);

    featuredProjects.forEach((project) => {
      expect(screen.getByText(project.location)).toBeInTheDocument();
      expect(screen.getByAltText(project.image.alt)).toBeInTheDocument();
    });
  });
});
