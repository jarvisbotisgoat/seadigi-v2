import './styles.css'

const CONTACT = 'mailto:payton@seatowndigital.com'

/* ── Data ── */

const services = [
  {
    num: '01',
    title: 'Web & App Development',
    description:
      'Custom websites and web apps built fast with modern tools. From marketing sites to full-stack platforms — designed to convert and built to scale.',
  },
  {
    num: '02',
    title: 'Lead Generation Systems',
    description:
      'Content and SEO infrastructure that brings clients to you passively. We build the pipeline once; it works for you continuously.',
  },
  {
    num: '03',
    title: 'Social Content',
    description:
      'Short form video and content strategy that builds local brand awareness. Consistent creative that earns attention in your market.',
  },
  {
    num: '04',
    title: 'Digital Growth Partnerships',
    description:
      'Long term retainer relationships focused on measurable revenue growth. We embed as your digital team — strategy through execution.',
  },
]

const work = [
  {
    index: '01',
    client: 'Korea House',
    location: 'Marysville, WA',
    description:
      'Restaurant app, waitlist system, and social content strategy that shifted the business toward direct orders and built a loyal repeat customer base.',
    tags: ['Restaurant App', 'Waitlist System', 'Social Content'],
  },
  {
    index: '02',
    client: 'Eastside Living WA',
    location: 'Bellevue, WA',
    description:
      'Real estate content site and lead gen system built for tech professionals relocating to the greater Seattle area. Organic-first, built to rank.',
    tags: ['Content Site', 'Lead Gen System', 'Real Estate SEO'],
  },
  {
    index: '03',
    client: 'Allan Jackson Real Estate',
    location: 'Seattle, WA',
    description:
      'Agent landing page with Calendly integration and neighborhood guides. Converts organic search traffic into qualified calls without manual effort.',
    tags: ['Landing Page', 'Calendly Integration', 'Neighborhood Guides'],
  },
]

/* ── Icons (inline SVG — no dependencies) ── */
const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

/* ── App ── */
const App = () => (
  <>
    <a className="skip-link" href="#main">
      Skip to main content
    </a>

    {/* ── Topbar ── */}
    <header className="topbar" role="banner">
      <div className="container topbar-inner">
        <a href="#" className="site-logo" aria-label="Seatown Digital — home">
          <span className="logo-mark" aria-hidden="true" />
          Seatown Digital
        </a>
        <a href={CONTACT} className="topbar-btn">
          Get in Touch
        </a>
      </div>
    </header>

    <main id="main">
      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-layout">

            {/* Left — primary content */}
            <div>
              <p className="hero-label" aria-hidden="true">
                Digital Growth Agency · Seattle, WA
              </p>
              <h1 id="hero-title" className="hero-headline">
                We Build the Digital Infrastructure That{' '}
                <span className="accent-word">Grows Your Business.</span>
              </h1>
              <p className="hero-sub">
                Websites, apps, content, and lead systems for local businesses
                in the Pacific Northwest.
              </p>
              <div className="hero-actions">
                <a href="#work" className="btn btn-primary">
                  See Our Work
                  <span className="btn-arrow" aria-hidden="true">
                    <ArrowRight />
                  </span>
                </a>
                <a href={CONTACT} className="btn btn-ghost">
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right — services panel, desktop only */}
            <aside className="hero-side" aria-label="Services overview">
              <div className="hero-panel">
                <p className="panel-label">What We Build</p>
                <ul className="panel-list">
                  {services.map((s) => (
                    <li key={s.num} className="panel-item">
                      <span className="panel-dot" aria-hidden="true" />
                      {s.title}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT WE DO
      ════════════════════════════════════════ */}
      <section
        id="services"
        className="section"
        aria-labelledby="services-title"
      >
        <div className="container">
          <div className="services-wrap">

            {/* Aside heading */}
            <div className="services-aside">
              <p className="section-eyebrow">What We Do</p>
              <h2 id="services-title" className="section-headline">
                Four ways we grow local business.
              </h2>
            </div>

            {/* Numbered rows */}
            <ul className="services-list" aria-label="Services">
              {services.map((s) => (
                <li key={s.num} className="service-row">
                  <span className="service-num" aria-hidden="true">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="service-title">{s.title}</h3>
                    <p className="service-desc">{s.description}</p>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OUR WORK
      ════════════════════════════════════════ */}
      <section id="work" className="section" aria-labelledby="work-title">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Our Work</p>
            <h2 id="work-title" className="section-headline">
              Selected projects.
            </h2>
          </div>

          <div className="work-grid">
            {work.map((item) => (
              <article key={item.client} className="work-card">
                <p className="work-index" aria-hidden="true">
                  {item.index}
                </p>
                <h3 className="work-client">{item.client}</h3>
                <p className="work-location">{item.location}</p>
                <p className="work-desc">{item.description}</p>
                <ul className="work-tags" aria-label="Services delivered">
                  {item.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>

    {/* ── Footer ── */}
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <a href="#" className="footer-brand" aria-label="Seatown Digital — home">
            <span className="logo-mark" aria-hidden="true" />
            Seatown Digital
          </a>
          <a href={CONTACT} className="footer-email">
            payton@seatowndigital.com
          </a>
          <p className="footer-copy">
            © {new Date().getFullYear()} Seatown Digital
          </p>
        </div>
      </div>
    </footer>
  </>
)

export default App
