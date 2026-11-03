import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectScrollProgress } from '../../lib/project-scroll';

export default function ScrollProjects({ projects }) {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const shortViewport = window.matchMedia('(max-height: 560px)');
    const entries = [...list.querySelectorAll('.project-track')].map(track => ({
      track,
      header: track.querySelector('.editorial-header'),
      button: track.querySelector('button'),
      body: track.querySelector('.project-reveal'),
      content: track.querySelector('.project-content'),
      manual: null,
    }));
    let frame = null;
    let needsMeasure = true;
    let cardsFit = true;
    let previousScrollY = window.scrollY;

    const update = () => {
      frame = null;
      if (needsMeasure) {
        // Keep card centres close, reserving only enough room to avoid overlap.
        // Small viewports use ordinary disclosures when a full card cannot fit.
        const fullHeights = entries.map(({ header, content }) =>
          header.offsetHeight + content.offsetHeight + 48);
        cardsFit = fullHeights.every(height => height <= window.innerHeight * 0.86);
        const heights = fullHeights.map(height =>
          Math.max(height * 0.62, window.innerHeight * 0.415));
        entries.forEach(({ track }, index) => {
          track.style.setProperty('--project-track-height', `${heights[index]}px`);
        });
        // A centred card can grow beyond its slot. Contain that overhang at
        // the list's edges so it cannot cover the introduction or following link.
        const edgeSpace = index => Math.max(12, Math.ceil((fullHeights[index] - heights[index]) / 2) + 12);
        list.style.setProperty('--project-leading-space', `${edgeSpace(0)}px`);
        list.style.setProperty('--project-trailing-space', `${edgeSpace(entries.length - 1)}px`);
        needsMeasure = false;
      }
      const driven = !reducedMotion.matches && !shortViewport.matches && cardsFit;
      list.classList.toggle('is-scroll-driven', driven);
      const scrolled = Math.abs(window.scrollY - previousScrollY) > 1;
      previousScrollY = window.scrollY;
      // Read every stable slot before writing animated styles.
      const centers = entries.map(({ track }) => {
        const bounds = track.getBoundingClientRect();
        return bounds.top + bounds.height / 2;
      });
      entries.forEach((entry, index) => {
        const { track, button, body } = entry;
        const focused = track.contains(document.activeElement)
          && (document.activeElement !== button || button.matches(':focus-visible'));
        if (scrolled && !focused) entry.manual = null;
        const progress = entry.manual !== null ? Number(entry.manual)
          : focused || !driven ? 1 : projectScrollProgress(centers[index], window.innerHeight);
        const readable = progress >= 0.85;
        track.style.setProperty('--project-reveal', `${progress.toFixed(5)}fr`);
        track.style.setProperty('--project-scale', (0.88 + progress * 0.12).toFixed(5));
        track.style.setProperty('--project-opacity', (0.5 + progress * 0.5).toFixed(5));
        track.style.setProperty('--project-body-opacity', progress.toFixed(5));
        track.style.setProperty('--project-toggle', `${90 * (1 - progress)}deg`);
        track.dataset.expanded = String(readable);
        button.setAttribute('aria-expanded', String(readable));
        body.setAttribute('aria-hidden', String(!readable));
        body.inert = !readable;
      });
    };
    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    const measure = () => { needsMeasure = true; schedule(); };
    const listeners = entries.map(entry => {
      const toggle = () => {
        entry.manual = entry.button.getAttribute('aria-expanded') !== 'true';
        schedule();
      };
      entry.button.addEventListener('click', toggle);
      return () => entry.button.removeEventListener('click', toggle);
    });
    const resizeObserver = new ResizeObserver(measure);
    entries.forEach(({ header, content }) => {
      resizeObserver.observe(header);
      resizeObserver.observe(content);
    });
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', measure);
    list.addEventListener('focusin', schedule);
    list.addEventListener('focusout', schedule);
    reducedMotion.addEventListener('change', measure);
    shortViewport.addEventListener('change', measure);
    update();
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      listeners.forEach(remove => remove());
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', measure);
      list.removeEventListener('focusin', schedule);
      list.removeEventListener('focusout', schedule);
      reducedMotion.removeEventListener('change', measure);
      shortViewport.removeEventListener('change', measure);
    };
  }, []);

  return <div className="scroll-projects" ref={listRef}>
    {projects.map(project => <div className="project-track" key={project.number}>
      <article className="project editorial-project" aria-labelledby={`project-title-${project.number}`}>
        <h3 className="editorial-header">
          <button type="button" aria-expanded="true" aria-controls={`project-body-${project.number}`}>
            <span className="editorial-number">{project.number}</span>
            <span className="editorial-title">
              <span className="eyebrow">{project.type}</span>
              <span className="editorial-name" id={`project-title-${project.number}`}>{project.name}</span>
            </span>
            <span className="editorial-toggle" aria-hidden="true" />
          </button>
        </h3>
        <div className="project-reveal" id={`project-body-${project.number}`}>
          <div className="project-reveal-inner">
            <div className="project-content">
              <p className="editorial-description">{project.description}</p>
              <div className="editorial-panel">
                <div className="project-visual">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
                </div>
                <div className="editorial-engineering">
                  <h4>Engineering decision</h4>
                  <p>{project.engineering}</p>
                  <ul className="tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                  <div className="project-links">
                    {project.links.map(link => <a className="text-link" key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={`${project.name}: ${link.label}`}>
                      {link.label} <ArrowUpRight size={16} aria-hidden="true" />
                    </a>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>)}
  </div>;
}
