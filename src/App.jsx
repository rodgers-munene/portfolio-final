import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { featuredProjects, additionalProjects } from './services/projects';
import ScrollProjects from './components/home-components/ScrollProjects';

const sections = ['about', 'experience', 'work', 'contact'];
const experience = [
  { date: 'MAR 2026 to PRESENT', role: 'Junior Fullstack Developer', company: 'Gemba PMS', description: 'Building an employee management system that brings identity, work allocation, roles, and skills into one place. Implementing tenant isolation, role-based permissions, employee data imports, and real-time notifications.', tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'] },
  { date: 'SEP 2025 to MAR 2026', role: 'Co-founder & Fullstack Developer', company: 'EkShop', description: 'Co-founded a campus commerce platform serving 500+ students and local residents. Designed its full-stack architecture and reproducible AWS infrastructure, and worked with customers to shape the product through testing and feedback.', tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'AWS', 'Terraform'] },
];
function Tags({ items }) { return <ul className="tags" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>; }
function SectionHeading({ number, title, caption }) {
  return <div className="section-heading">
    <h2><span className="section-number">{number}</span>{title}</h2>
    <span className="tiny-mark">{caption}</span>
  </div>;
}
function App() {
  const [active, setActive] = useState('about');
  useEffect(() => {
    const intro = document.querySelector('.intro');
    // Let a tall profile scroll until its bottom reaches the viewport, then stick.
    const resizeObserver = new ResizeObserver(() => {
      intro.style.setProperty('--intro-height', `${intro.getBoundingClientRect().height}px`);
    });
    resizeObserver.observe(intro);
    const sectionElements = sections.map(id => document.getElementById(id));
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = null;
    const updateActiveSection = () => {
      const boundary = window.innerHeight * 0.3;
      let current = sections[0];
      sectionElements.forEach(element => {
        if (element.getBoundingClientRect().top <= boundary) current = element.id;
      });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        current = sections[sections.length - 1];
      }
      setActive(current);
      frame = null;
    };
    const scheduleUpdate = () => {
      if (frame === null) frame = requestAnimationFrame(updateActiveSection);
    };
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    updateActiveSection();

    // Content stays visible without animation support or with reduced motion enabled.
    const animations = new Set();
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        if (!motionPreference.matches && entry.target.animate) {
          const animation = entry.target.animate([
            { opacity: 0.55, transform: 'translateY(12px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ], { duration: 500, easing: 'cubic-bezier(0.2, 0.65, 0.3, 1)' });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -35px 0px', threshold: 0 });
    document.querySelectorAll('.section-heading, .experience-row').forEach(element => {
      revealObserver.observe(element);
    });
    const stopMotion = () => {
      if (motionPreference.matches) {
        animations.forEach(animation => animation.cancel());
        animations.clear();
      }
    };
    motionPreference.addEventListener('change', stopMotion);
    return () => {
      resizeObserver.disconnect();
      revealObserver.disconnect();
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      motionPreference.removeEventListener('change', stopMotion);
      if (frame !== null) cancelAnimationFrame(frame);
      animations.forEach(animation => animation.cancel());
    };
  }, []);
  return <>
    <a className="skip-link" href="#content">Skip to content</a>
    <div className="portfolio-shell">
      <header className="intro">
        <a href="#" className="monogram" aria-label="Rodgers Munene home">rm<span>.</span></a>
        <div className="intro-copy">
          <p className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEER</p>
          <h1>Rodgers<br /><span>Munene</span><span className="name-dot">.</span></h1>
          <h2>Thoughtful software.<br />Built for the real world.</h2>
          <p className="intro-description">I build web, mobile, and backend systems, with care for the people using them and the engineering underneath.</p>
          <p className="location"><MapPin size={13} /> Based in Kenya · Building everywhere</p>
        </div>
        <nav aria-label="Main navigation">{sections.map((section, index) => <a key={section} href={`#${section}`} className={active === section ? 'active' : ''} aria-current={active === section ? 'location' : undefined}><span className="nav-line" /><span className="nav-number">0{index + 1}</span>{section === 'work' ? 'Selected projects' : section}</a>)}</nav>
        <div className="intro-bottom"><div className="socials">
          <a href="https://github.com/rodgers-munene" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/rodgers-munene-19558135b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="mailto:munenerodgers72@gmail.com" aria-label="Email"><Mail size={20} /></a>
        </div><a className="resume-link" href="/Rodgers_Munene_Resume.pdf" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={15} /></a></div>
      </header>
      <main id="content">
        <section id="about" className="about-section"><SectionHeading number="01" title="About" caption="A LITTLE CONTEXT" />
          <h2>I like making complex things<br /><span>feel simple.</span></h2>
          <p>I'm Rodgers, a software engineer who enjoys connecting the dots between <strong>a useful product and a well-built system.</strong> My work spans interfaces, APIs, databases, and the infrastructure that holds them together.</p>
          <p>At <strong>Gemba PMS</strong>, I build enterprise HR tools with Next.js, NestJS, and PostgreSQL. That means thinking carefully about tenant boundaries, permissions, data flows, and the small interactions that make everyday work easier.</p>
          <p>Previously, I co-founded <strong>EkShop</strong>, taking a local commerce idea through development and user feedback. I also build mobile experiences, from farm management to learning platforms.</p>
          <div className="focus-note"><span className="note-line" /><p>Good interfaces on the surface.<br /><strong>Solid engineering underneath.</strong></p></div>
          <div className="toolbox"><span className="eyebrow">MY EVERYDAY TOOLKIT</span><Tags items={['TypeScript', 'React / Next.js', 'NestJS', 'PostgreSQL', 'React Native', 'Docker']} /></div>
        </section>
        <section id="experience"><SectionHeading number="02" title="Experience" caption="WHERE I’VE BUILT" />
          {experience.map(item => <article className="experience-row" key={item.company}><p className="date">{item.date}</p><div><h3>{item.role}<span className="company">{item.company}</span></h3><p>{item.description}</p><Tags items={item.tags} /></div></article>)}
          <a className="text-link" href="/Rodgers_Munene_Resume.pdf" target="_blank" rel="noreferrer">The full story, on my résumé <ArrowUpRight size={16} /></a>
        </section>
        <section id="work" className="projects-editorial">
          <SectionHeading number="03" title="Selected projects" caption="IDEAS INTO PRODUCTS" />
          <p className="project-list-intro">A few things I’ve built. Scroll to explore, or select a project.</p>
          <ScrollProjects projects={featuredProjects} />
          <div className="additional-work">
            <h3>Additional work</h3>
            {additionalProjects.map(project => <a className="additional-project" key={project.name} href={project.href} target="_blank" rel="noreferrer">
              <span><strong>{project.name}</strong><span>{project.description}</span></span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>)}
          </div>
          <a className="text-link" href="https://github.com/rodgers-munene" target="_blank" rel="noreferrer">More explorations on GitHub <ArrowUpRight size={16} /></a>
        </section>
        <section id="contact"><SectionHeading number="04" title="Contact" caption="LET’S TALK" /><h2>Have something<br /><span>worth building?</span></h2><p>A product idea, an engineering challenge, or a team you think I’d fit into, I’d love to hear about it.</p><a className="contact-link" href="mailto:munenerodgers72@gmail.com">Say hello <ArrowUpRight size={23} /></a><a className="email-address" href="mailto:munenerodgers72@gmail.com">munenerodgers72@gmail.com</a></section>
        <footer><p>Designed with intention. Built by Rodgers.</p><div><span>© {new Date().getFullYear()}</span><a href="#" aria-label="Back to top">Back to top <ArrowDown size={12} /></a></div></footer>
      </main>
    </div>
  </>;
}
export default App;
