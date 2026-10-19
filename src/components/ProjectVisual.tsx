import type { Project } from '../data';
// Original schematic artwork. These are not screenshots or financial results.
export function ProjectVisual({ kind }: { kind: Project['visual'] }) {
  return <div className={`project-visual ${kind}`} aria-hidden="true">
    {kind === 'financing' ? <div className="funding-diagram"><div className="diagram-heading">Acquisition funding</div><div className="funding-sources"><span>Debt</span><span>Equity</span></div><div className="connector"/><div className="funding-target">Transaction structure</div></div>
      : kind === 'valuation' ? <div className="valuation-diagram"><span className="diagram-heading">A framework for value</span><div className="value-row"><span>Cash flows</span><i style={{width:'79%'}}/></div><div className="value-row"><span>Comparables</span><i style={{width:'58%'}}/></div><div className="value-row"><span>Assumptions</span><i style={{width:'91%'}}/></div><div className="diagram-foot">Research → Analysis → Perspective</div></div>
      : <div className="analytics-diagram"><div className="diagram-heading">Data. Context. Insight.</div><svg viewBox="0 0 340 110"><path d="M0 25H340 M0 55H340 M0 85H340" stroke="currentColor" opacity=".12"/><path d="M0 85L30 65L60 76L95 40L125 55L155 29L187 43L220 20L245 37L285 12L310 27L340 5" fill="none" stroke="currentColor" strokeWidth="2"/></svg></div>}
    <span className="illustration-label">Concept illustration</span>
  </div>;
}
