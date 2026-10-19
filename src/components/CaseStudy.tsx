import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import type { Project } from '../data';
import { ProjectVisual } from './ProjectVisual';
export function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    const element = dialog.current!;
    const previous = document.activeElement as HTMLElement | null;
    element.showModal();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { element.close(); document.body.style.overflow = oldOverflow; previous?.focus(); };
  }, []);
  return <dialog ref={dialog} className="case-dialog" aria-labelledby="case-title" onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{opacity: 1, y: 0}} transition={{duration: .22}} className="case-inner">
      <div className="case-toolbar"><span>Project case study</span><button className="icon-button" aria-label="Close case study" onClick={onClose} autoFocus><X size={22}/></button></div>
      <div className="case-heading"><span className="status">{project.status}</span><h2 id="case-title">{project.title}</h2><p>{project.summary}</p></div>
      <ProjectVisual kind={project.visual}/>
      <p className="case-notice">{project.notice}</p>
      {project.takeaway && <aside className="case-takeaway"><h3>Key insight</h3><p>{project.takeaway}</p></aside>}
      <div className="case-sections">{project.sections.map(section => <section key={section.title}><h3>{section.title}</h3><ul className="case-points">{section.points.map(point => <li key={point}>{point}</li>)}</ul></section>)}
      {project.images.length > 0 && <section><h3>Project images</h3>{project.images.map(image => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy"/><figcaption>{image.caption}</figcaption></figure>)}</section>}
      <section><h3>Project links</h3>{project.links.length ? project.links.map(link => <a className="text-link" key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={16}/></a>) : <p>Repository, live demo and report links will appear here once provided.</p>}</section></div>
      <button className="button secondary" onClick={onClose}>Back to projects</button>
    </motion.div>
  </dialog>;
}
