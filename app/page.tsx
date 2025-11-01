import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ServicesOverview } from './components/ServicesOverview';
import { TrustSignals } from './components/TrustSignals';
import { ContactFooter } from './components/ContactFooter';
import { flagshipProject } from './content/flagshipProject';
import { featuredProjects } from './content/featuredProjects';
import { serviceOfferings } from './content/services';
import { trustSignals } from './content/trustSignals';
import { contactChannels, contactForm } from './content/contact';

export default function HomePage() {
  const anchors = [
    { href: '#featured-projects', label: 'Featured projects' },
    { href: '#services', label: 'Services' },
    { href: '#trust', label: 'Trust & certifications' }
  ];

  return (
    <main>
      <Hero project={flagshipProject} />
      <nav className="pageNav" aria-label="In-page navigation">
        <ul className="pageNavList">
          {anchors.map((anchor) => (
            <li key={anchor.href}>
              <a className="pageNavLink" href={anchor.href}>
                {anchor.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <FeaturedProjects projects={featuredProjects} />
      <ServicesOverview services={serviceOfferings} />
      <TrustSignals trustSignals={trustSignals} />
      <ContactFooter
        contactChannels={contactChannels}
        formEndpoint={contactForm.endpoint}
        redirectUrl={contactForm.redirect}
        fallbackMessage={contactForm.fallbackMessage}
      />
    </main>
  );
}
