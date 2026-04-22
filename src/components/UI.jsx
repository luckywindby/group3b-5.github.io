import T from './T'

export function SectionHead({ en, zh, descEn, descZh, children, style }) {
  return (
    <div className="section-head" style={style}>
      <div>
        {en && <h2><T en={en} zh={zh} /></h2>}
        {descEn && <p><T en={descEn} zh={descZh} /></p>}
        {children}
      </div>
    </div>
  )
}

export function SubSectionHead({ en, zh, descEn, descZh, children, style }) {
  return (
    <div className="section-head" style={style}>
      <div>
        {en && <h3><T en={en} zh={zh} /></h3>}
        {descEn && <p><T en={descEn} zh={descZh} /></p>}
        {children}
      </div>
      {/* slot for badges etc. */}
    </div>
  )
}

export function Subhead({ en, zh }) {
  return (
    <span className="subhead">
      <T en={en} zh={zh} />
    </span>
  )
}

export function Chip({ en, zh }) {
  return (
    <span className="chip">
      <T en={en} zh={zh} />
    </span>
  )
}

export function Badge({ variant, en, zh }) {
  const cls = variant === 'good' ? 'badge is-good' : variant === 'warning' ? 'badge is-warning' : 'badge'
  return (
    <span className={cls}>
      <T en={en} zh={zh} />
    </span>
  )
}

export function Proof({ variant, en, zh }) {
  const cls = `proof proof-${variant}`
  return (
    <span className={cls}>
      <T en={en} zh={zh} />
    </span>
  )
}

export function Btn({ href, variant = 'primary', en, zh, target, rel }) {
  return (
    <a className={`btn btn-${variant}`} href={href} target={target} rel={rel}>
      <T en={en} zh={zh} />
    </a>
  )
}
