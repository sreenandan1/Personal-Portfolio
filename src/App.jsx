import { useEffect, useState } from 'react'
import useTyped from './useTyped.js'
import { Instagram, WhatsApp } from './Icons.jsx'
import { MAIL, WA, IG, PHONE_LABEL, ROLES, TECH, CODE, JOBS, PROJ, SKILLS } from './data.js'

const CV_URL = `${import.meta.env.BASE_URL}Sreenandan_P_P_CV.pdf`
const NAV = [['about', 'About'], ['work', 'Experience'], ['projects', 'Projects'], ['skills', 'Skills']]

function downloadCV() {
  const a = document.createElement('a')
  a.href = CV_URL
  a.download = 'Sreenandan_P_P_CV.pdf'
  a.click()
}

function Nav({ onTheme }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <nav>
      <div className="wrap">
        <a className="logo" href="#top"><i>SN</i>Sreenandan</a>
        <div className={'links' + (open ? ' o' : '')}>
          {NAV.map(([id, label]) => <a key={id} className="l" href={`#${id}`} onClick={close}>{label}</a>)}
          <a className="btn p" style={{ padding: '10px 20px' }} href="#contact" onClick={close}>Hire me</a>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn ic" aria-label="Switch light or dark theme" onClick={onTheme}>◐</button>
          <button className="btn ic burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const role = useTyped(ROLES)
  return (
    <header className="hero" id="top">
      <div className="orb o1" /><div className="orb o2" /><div className="orb o3" />
      <div className="wrap">
        <div>
          <span className="pill"><i />Open to work · Kochi, India</span>
          <p className="hi">Hi, I’m</p>
          <h1 className="grad">Sreenandan P P</h1>
          <p className="role">{role}<b /></p>
          <p className="lead">I build fast, scalable web apps from the Angular interface to the Node.js API. My focus is enterprise ERP and POS systems with real-time data.</p>
          <div className="cta">
            <a className="btn p" href="#projects">View my work</a>
            <button className="btn" onClick={downloadCV}>Download CV</button>
            <a className="btn ic" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><WhatsApp /></a>
            <a className="btn ic" href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="code">
            <div className="bar"><s /><s /><s /><span>developer.ts</span></div>
            <pre>
              {CODE.map((line, i) => (
                <div key={i}>{line.map(([c, t], j) => <span key={j} className={c}>{t}</span>)}</div>
              ))}
            </pre>
          </div>
          <span className="float f1">Angular 17+</span>
          <span className="float f2">NgRx · RxJS</span>
          <span className="float f3">Node.js · MongoDB</span>
        </div>
      </div>
      <div className="mq" aria-hidden="true">
        <div className="mt">{[...TECH, ...TECH].map((x, i) => <span key={i}>{x}</span>)}</div>
      </div>
    </header>
  )
}

const Section = ({ id, title, sub, children }) => (
  <section id={id}>
    <div className="wrap">
      <h2>{title}</h2>
      <p className="sub">{sub}</p>
      {children}
    </div>
  </section>
)

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about">
          <div>
            <h2>Building apps that <span className="grad">run a business.</span></h2>
            <p>I’m a full stack developer with a frontend core. I design the architecture, manage complex state with NgRx, and connect it to REST and .NET APIs.</p>
            <p>My recent work is a restaurant ERP and POS where billing, kitchen screens and reports must stay in sync live. I care about clean code, speed and interfaces people enjoy using.</p>
          </div>
          <div className="st">
            {[['3+', 'years of experience'], ['10+', 'modules shipped'], ['3', 'languages spoken'], ['100%', 'responsive builds']].map(([n, l]) => (
              <div className="glass" key={l}><b>{n}</b><span>{l}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Experience = () => (
  <Section id="work" title="Experience" sub="From education portals to enterprise POS.">
    <div className="tl">
      {JOBS.map((j) => (
        <div className="job glass" key={j.c}>
          <div className="top"><h3>{j.r}</h3><span className="d">{j.d}</span></div>
          <div className="co">{j.c}</div>
          <ul>{j.p.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      ))}
    </div>
  </Section>
)

const Projects = () => (
  <Section id="projects" title="Featured projects" sub="Production systems with complex business logic.">
    <div className="pg">
      {PROJ.map((p) => (
        <article className="pc glass" key={p.n}>
          <div className="ph" style={{ background: p.g }}><span>{p.n}</span></div>
          <div className="pb">
            <h3>{p.t}</h3>
            <p>{p.s}</p>
            {p.b.length > 0 && <ul>{p.b.map((x) => <li key={x}>{x}</li>)}</ul>}
            <div className="chips" style={{ marginTop: 'auto' }}>{p.k.map((k) => <span className="chip" key={k}>{k}</span>)}</div>
          </div>
        </article>
      ))}
    </div>
  </Section>
)

const Skills = () => (
  <Section id="skills" title="Tech stack" sub="The tools I use every day.">
    <div className="sk">
      {SKILLS.map(([t, list]) => (
        <div className="glass" key={t}>
          <h3>{t}</h3>
          <div className="chips">{list.map((x) => <span className="chip" key={x}>{x}</span>)}</div>
        </div>
      ))}
    </div>
  </Section>
)

const Contact = () => (
  <section id="contact">
    <div className="wrap">
      <div className="end glass">
        <h2>Let’s build <span className="grad">something great.</span></h2>
        <p>I’m open to full stack and Angular roles. Tell me about your project.</p>
        <div className="cta" style={{ justifyContent: 'center' }}>
          <a className="btn p" href={`mailto:${MAIL}`}>{MAIL}</a>
          <a className="btn" href={WA} target="_blank" rel="noopener noreferrer"><WhatsApp /> WhatsApp {PHONE_LABEL}</a>
          <a className="btn" href={IG} target="_blank" rel="noopener noreferrer"><Instagram /> @sreenandan_</a>
          <button className="btn" onClick={downloadCV}>Download CV</button>
        </div>
      </div>
    </div>
  </section>
)

export default function App() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    try { const s = localStorage.getItem('theme'); if (s) setTheme(s) } catch (e) {}
  }, [])
  useEffect(() => {
    if (!theme) return
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch (e) {}
  }, [theme])

  const toggle = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
      (!theme && matchMedia('(prefers-color-scheme: dark)').matches)
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <>
      <Nav onTheme={toggle} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer>© 2026 Sreenandan P P · Edathala, Kochi, Kerala · English, Malayalam, Tamil</footer>
    </>
  )
}
