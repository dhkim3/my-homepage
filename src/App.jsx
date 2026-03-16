import './App.css'

const metrics = [
  { value: '32%', label: 'faster rollout cycles' },
  { value: '99.98%', label: 'platform uptime SLA' },
  { value: '$1.8M', label: 'average annual efficiency gain' },
]

const features = [
  {
    title: 'Unified revenue operations',
    description:
      'Bring billing, usage analytics, renewals, and reporting into one calm workspace built for modern SaaS teams.',
  },
  {
    title: 'Automation with human control',
    description:
      'Launch approval flows, lifecycle messaging, and account health playbooks without losing visibility across teams.',
  },
  {
    title: 'Decision-ready intelligence',
    description:
      'Spot churn signals, expansion opportunities, and margin trends through real-time dashboards executives actually use.',
  },
]

const logos = ['OpenAI', 'Mercury', 'Ramp', 'Notion', 'Vercel', 'Amplitude']

const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    description: 'For early teams building a polished operating rhythm.',
    features: ['Up to 3 seats', 'Core workflows', 'Weekly insights'],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$149',
    description: 'For scaling SaaS teams standardizing revenue operations.',
    features: ['Unlimited automations', 'Advanced analytics', 'Priority support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For multi-product orgs with compliance and procurement needs.',
    features: ['SSO and audit logs', 'Custom onboarding', 'Dedicated success lead'],
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'How quickly can we launch?',
    answer:
      'Most teams connect data sources, configure workflows, and go live in less than two weeks.',
  },
  {
    question: 'Does it work with our existing stack?',
    answer:
      'Yes. The platform is designed to sit on top of your CRM, billing, support, and product analytics tools.',
  },
  {
    question: 'Can finance and GTM teams share the same workspace?',
    answer:
      'They can. Permissions, shared views, and approval flows let each team work from the same source of truth.',
  },
  {
    question: 'Is enterprise security included?',
    answer:
      'Enterprise plans include SSO, granular roles, audit logs, and dedicated security review support.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <div className="page-glow page-glow-left" aria-hidden="true" />
      <div className="page-glow page-glow-right" aria-hidden="true" />

      <main className="landing-page">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Revenue OS for premium SaaS teams</span>
            <h1>Run growth, retention, and billing from one elegant control center.</h1>
            <p className="hero-description">
              A focused operating layer for ambitious teams who want Stripe-grade
              polish, faster decisions, and cleaner execution across the customer
              lifecycle.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#pricing">
                Start free trial
              </a>
              <a className="secondary-button" href="#features">
                View product tour
              </a>
            </div>

            <div className="metrics-grid">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel card">
            <div className="panel-header">
              <span className="panel-pill">Live overview</span>
              <span className="panel-meta">Updated 4 min ago</span>
            </div>

            <div className="panel-chart">
              <div className="chart-line chart-line-main" />
              <div className="chart-line chart-line-soft" />
            </div>

            <div className="panel-stats">
              <div>
                <span>Net revenue retention</span>
                <strong>118.4%</strong>
              </div>
              <div>
                <span>Expansion pipeline</span>
                <strong>$428K</strong>
              </div>
            </div>

            <div className="panel-feed">
              <div className="feed-item">
                <div>
                  <strong>Automation triggered</strong>
                  <p>Enterprise renewal risk routed to CS + finance.</p>
                </div>
                <span>Now</span>
              </div>
              <div className="feed-item">
                <div>
                  <strong>Usage threshold hit</strong>
                  <p>Expansion playbook launched for 14 accounts.</p>
                </div>
                <span>12m</span>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-section">
          <p>Trusted by design-led teams building category-defining software</p>
          <div className="logo-grid">
            {logos.map((logo) => (
              <div key={logo} className="logo-chip">
                {logo}
              </div>
            ))}
          </div>
        </section>

        <section className="content-section" id="features">
          <div className="section-heading">
            <span className="eyebrow">Core features</span>
            <h2>Everything your SaaS business needs, without operational sprawl.</h2>
            <p>
              Purpose-built workflows and reporting wrapped in a clean interface
              that feels premium from the first click.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <article key={feature.title} className="card feature-card">
                <span className="feature-index">0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="pricing">
          <div className="section-heading">
            <span className="eyebrow">Pricing</span>
            <h2>Transparent plans that scale with your growth stage.</h2>
            <p>
              Start lean, upgrade when your workflows become more sophisticated,
              and keep procurement simple.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`card pricing-card${plan.highlighted ? ' pricing-card-highlighted' : ''}`}
              >
                <div className="pricing-header">
                  <div>
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                  </div>
                  {plan.highlighted && <span className="pricing-badge">Most popular</span>}
                </div>

                <div className="price-row">
                  <strong>{plan.price}</strong>
                  <span>{plan.price === 'Custom' ? 'tailored plan' : '/month'}</span>
                </div>

                <ul className="pricing-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a className={plan.highlighted ? 'primary-button' : 'secondary-button'} href="#cta">
                  {plan.price === 'Custom' ? 'Talk to sales' : 'Get started'}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Answers for teams evaluating a premium operating platform.</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="card faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section card" id="cta">
          <div>
            <span className="eyebrow">Ready to upgrade?</span>
            <h2>Build a calmer, sharper operating system for growth.</h2>
            <p>
              Replace fragmented tools with one refined workspace your finance,
              sales, and success teams will actually enjoy using.
            </p>
          </div>
          <div className="cta-actions">
            <a className="primary-button" href="#top">
              Book a demo
            </a>
            <a className="secondary-button" href="#pricing">
              Compare plans
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Northstar</span>
        <nav>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#cta">Contact</a>
        </nav>
      </footer>
    </div>
  )
}

export default App
