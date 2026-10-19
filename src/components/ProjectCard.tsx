import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data';
import { ProjectVisual } from './ProjectVisual';
export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (id: string) => void }) {
  return <article className="project-card"><button className="project-open" onClick={() => onOpen(project.id)} aria-label={`Explore ${project.title}`} aria-haspopup="dialog"><ProjectVisual kind={project.visual}/><div className="project-copy"><div className="project-meta"><span>{project.category}</span><span className="status">{project.status}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-action">Explore case study <ArrowUpRight size={18}/></span></div></button></article>;
}
