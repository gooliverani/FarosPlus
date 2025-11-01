export type ImageFormat = 'avif' | 'webp' | 'jpeg';

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  placeholder?: string;
  format?: ImageFormat;
}

export interface Testimonial {
  quote: string;
  author: string;
  projectRole?: string;
}

export interface CtaLink {
  type: 'phone' | 'email';
  label: string;
  value: string;
}

export interface FlagshipProject {
  id: 'flagship';
  title: string;
  location: string;
  services: string[];
  summary: string;
  heroImage: ImageAsset;
  resultMetric: string;
  testimonial?: Testimonial;
  primaryCta: CtaLink;
}

export type ServiceCategory = 'plastering' | 'soundproofing' | 'hybrid';

export interface FeaturedProject {
  id: string;
  title: string;
  location: string;
  serviceCategory: ServiceCategory;
  description: string;
  highlight?: string;
  testimonial?: Testimonial;
  image: ImageAsset;
}

export interface ServiceOffering {
  id: string;
  name: string;
  description: string;
  benefits: string[];
}

export interface ContactChannel {
  type: 'phone' | 'email';
  label: string;
  value: string;
  availability?: string;
}

export interface TrustSignal {
  id: string;
  title: string;
  description: string;
  proof: string;
}

export interface ThemePalette {
  primary: string;
  secondary: string;
  neutral: string;
  accent: string;
  gradient: string;
  technicalLines: string;
}

export interface LandingContent {
  flagshipProject: FlagshipProject;
  featuredProjects: FeaturedProject[];
  serviceOfferings: ServiceOffering[];
  contactChannels: ContactChannel[];
  themePalette: ThemePalette;
  trustSignals: TrustSignal[];
}
