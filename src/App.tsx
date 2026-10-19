import { useCallback, useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { MotionConfig, motion } from 'motion/react';
import { profile, projects } from './data';
import { ProjectCard } from './components/ProjectCard';
import { CaseStudy } from './components/CaseStudy';

const navigation = ['Projects', 'About', 'Skills', 'Experience', 'Contact'];
function ContactLink({label, href, icon: Icon}: {label: string; href: string; icon: LucideIcon}) {
  return href ? <a className="contact-link" href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer"><Icon size={18}/><span>{label}</span><ArrowUpRight size={16}/></a>
    : <span className="contact-link unavailable" aria-disabled="true"><Icon size={18}/><span>{label}</span><small>To be added</small></span>;
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectId, setProjectId] = useState(() => location.hash.startsWith('#project/') ? location.hash.slice(9) : '');
  const activeProject = projects.find(project => project.id === projectId);
  useEffect(() => {
    const sync = () => setProjectId(location.hash.startsWith('#project/') ? location.hash.slice(9) : '');
    addEventListener('hashchange', sync);
    return () => removeEventListener('hashchange', sync);
  }, []);
  useEffect(() => { document.title = activeProject ? `${activeProject.title} | ${profile.name}` : `${profile.name} | Accounting & Finance`; }, [activeProject]);
  const openProject = (id: string) => { history.pushState({ portfolioCase: true }, '', `#project/${id}`); setProjectId(id); };
  const closeProject = useCallback(() => {
    if (history.state?.portfolioCase) history.back();
    else { history.replaceState(null, '', '#projects'); setProjectId(''); }
  }, []);
  return <MotionConfig reducedMotion="user">
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header"><div className="shell nav-shell"><a className="brand" href="#" aria-label={`${profile.name}, home`}><span className="monogram">{profile.initials}</span><span>Hiren Vasavishetti<span className="brand-sub">Accounting & Finance</span></span></a>
      <button className="icon-button mobile-menu" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav id="navigation" aria-label="Main navigation" className={menuOpen ? 'is-open' : ''} onKeyDown={e => {if(e.key === 'Escape') setMenuOpen(false);}}>{navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}{item === 'Contact' && <ArrowUpRight size={15}/>}</a>)}</nav></div></header>
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title"><motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5}} className="hero-content"><div className="education-label"><span/>{profile.degree} · {profile.university}</div><h1 id="hero-title">Hiren<br/>Vasavishetti<span className="name-period">.</span></h1><p className="hero-intro">{profile.introduction}</p><div className="hero-actions"><a href="#projects" className="button primary">Explore my projects <ArrowDown size={17}/></a><ContactLink label="LinkedIn" href={profile.linkedin} icon={Linkedin}/><ContactLink label="GitHub" href={profile.github} icon={Github}/></div></motion.div>
        <aside className="perspective" aria-label="Professional interests"><div className="perspective-top"><span>A developing perspective</span><span className="small-mark">HV / Finance</span></div><div className="perspective-art" aria-hidden="true"><div className="art-grid"/><span className="art-block block-one"/><span className="art-block block-two"/><span className="art-block block-three"/><span className="art-line"/></div><h2>Understanding value.<br/>Exploring possibility.</h2><p>Businesses, transactions and the<br/>technology connecting them.</p><div className="perspective-bottom">Finance meets curiosity <ArrowUpRight size={17}/></div></aside>
      </section>
      <div className="interest-strip"><div className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-3">{profile.interests.map(item => <span key={item}>{item}</span>)}</div></div>
      <section id="projects" className="section shell"><div className="section-heading"><div><p className="section-kicker">Research & independent work</p><h2>Featured projects</h2></div><p>A closer look at the questions,<br className="desktop-break"/> frameworks and thinking behind the work.</p></div><div className="project-grid">{projects.map(project => <ProjectCard key={project.id} project={project} onOpen={openProject}/>)}</div><p className="editorial-note">Independent educational projects. Financial results are conditional model outputs; each case study explains its assumptions and limitations.</p></section>
      <section id="about" className="about-section"><div className="shell about-grid"><div><p className="section-kicker">About me</p><h2>A curiosity for finance.<br/>A considered approach.</h2></div><div className="about-copy"><p className="lead">{profile.about}</p><p>{profile.motivation}</p></div></div></section>
      <section id="skills" className="section shell"><div className="section-heading"><div><p className="section-kicker">Knowledge & capabilities</p><h2>Skills & interests</h2></div><p>Areas of focus, with room for<br className="desktop-break"/> evidence of practical application.</p></div><div className="skills-grid">{profile.skillGroups.map(group => <article key={group.title} className="skill-group"><h3>{group.title}</h3><p className="skill-description">{group.description}</p>{group.items.length ? <ul>{group.items.map(item => <li key={item}>{item}{group.examples?.[item] && <p className="skill-example">{group.examples[item]}</p>}</li>)}</ul> : <p className="placeholder">{group.title === 'Technical' ? 'Add confirmed software, programming and data skills with examples of use.' : 'Add evidenced research, analysis and problem-solving experience.'}</p>}{group.footnote && <span className="skill-footnote">{group.footnote}</span>}</article>)}</div></section>
      <section id="experience" className="section shell experience-section"><div><p className="section-kicker">The journey so far</p><h2>Experience &<br/>development</h2><p className="muted max-w-sm mt-5">Professional experience and upcoming opportunities.</p></div><div className="experience-list"><div><h3>Professional experience</h3>{profile.experience.length ? profile.experience.map(item => <article key={item.title}><h4>{item.title} · {item.organisation}</h4><small>{item.dates}</small>{item.description && <p>{item.description}</p>}</article>) : <p>Placeholder — roles, responsibilities and dates to be added.</p>}</div>{profile.certifications.length > 0 && <div><h3>Certifications</h3>{profile.certifications.map(item => <p key={item.title}>{item.title} · {item.issuer} · {item.date}{item.url && <a className="text-link" href={item.url} target="_blank" rel="noreferrer">Verify credential <ArrowUpRight size={16}/></a>}</p>)}</div>}{profile.achievements.length > 0 && <div><h3>Achievements</h3><ul>{profile.achievements.map(item => <li key={item}>{item}</li>)}</ul></div>}</div></section>
      <section id="contact" className="contact-section"><div className="shell contact-grid"><div><p className="section-kicker">Connect</p><h2>Let’s start a<br/>conversation.</h2><p>Investment banking, M&A, financial markets<br className="desktop-break"/> and the ideas shaping their future.</p></div><div className="contact-options"><ContactLink label="Professional email" href={profile.email ? `mailto:${profile.email}` : ''} icon={Mail}/><ContactLink label="LinkedIn" href={profile.linkedin} icon={Linkedin}/><ContactLink label="GitHub" href={profile.github} icon={Github}/></div></div></section>
    </main><footer className="shell footer"><span>© {new Date().getFullYear()} {profile.name}</span><span>Thoughtful analysis. Continuous learning.</span><a href="#">Back to top ↑</a></footer>
    {activeProject && <CaseStudy key={activeProject.id} project={activeProject} onClose={closeProject}/>}
    {projectId && !activeProject && <dialog open className="not-found"><h2>Project not found</h2><p>This project link is no longer available.</p><button className="button primary" onClick={closeProject}>Back to projects</button></dialog>}
  </MotionConfig>;
}
