const linkedin =
  "https://www.linkedin.com/in/sameer-jadoon-45780434b/";

const calendly =
  "https://calendly.com/sameerjadoon787/b2b-outbound-strategy-call";

const alisonVerify =
  "https://alison.com/verify/fffd683d54";

const hubspotCredential = "#hubspot-credential";

const services = [
  {
    number: "01",
    title: "ICP Research",
    text: "Define exactly who should be targeted, why they fit, and where to find them.",
  },
  {
    number: "02",
    title: "B2B Lead Generation",
    text: "Build focused prospect lists around your ideal customers and decision-makers.",
  },
  {
    number: "03",
    title: "Lead Verification",
    text: "Clean and verify prospect data before it reaches your outbound campaign.",
  },
  {
    number: "04",
    title: "Cold Email Copy",
    text: "Write concise, relevant messaging designed to start genuine sales conversations.",
  },
  {
    number: "05",
    title: "Campaign Setup",
    text: "Organize your outbound workflow using modern prospecting and email platforms.",
  },
  {
    number: "06",
    title: "Optimization",
    text: "Use campaign signals to improve targeting, messaging, and overall performance.",
  },
];

const process = [
  ["01", "Research", "Understand the offer, market and ideal customer."],
  ["02", "Build", "Create a focused list of relevant accounts and contacts."],
  ["03", "Verify", "Clean and validate prospect data before outreach."],
  ["04", "Personalize", "Develop relevant angles and concise messaging."],
  ["05", "Launch", "Run a controlled and structured outbound campaign."],
  ["06", "Optimize", "Review results and continuously improve the system."],
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <nav className="nav container">
        <a className="brand" href="#top">
          SJ<span>.</span>
        </a>

        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#credentials">Credentials</a>
          <a href="#about">About</a>
        </div>

        <a
          className="navCta"
          href={calendly}
          target="_blank"
          rel="noreferrer"
        >
          Book a Call
          <span>↗</span>
        </a>
      </nav>

      {/* HERO */}
      <section id="top" className="hero container">
        <div className="heroCopy">
          <div className="heroBadge">
            <span className="statusDot" />
            Available for B2B projects
          </div>

          <p className="eyebrow">
            B2B LEAD GENERATION · COLD EMAIL · OUTBOUND
          </p>

          <h1>
            Turn the right prospects into{" "}
            <span>sales conversations.</span>
          </h1>

          <p className="heroText">
            I help B2B agencies, SaaS companies and service businesses build
            targeted outbound systems through better research, cleaner data
            and thoughtful cold email.
          </p>

          <div className="actions">
            <a
              className="button primary"
              href={calendly}
              target="_blank"
              rel="noreferrer"
            >
              Book a Strategy Call
              <span>↗</span>
            </a>

            <a className="button ghost" href="#work">
              View My Work
              <span>↓</span>
            </a>
          </div>

          <div className="toolLine">
            <span>LinkedIn Sales Navigator</span>
            <i>·</i>
            <span>Apollo</span>
            <i>·</i>
            <span>Instantly</span>
            <i>·</i>
            <span>Smartlead</span>
            <i>·</i>
            <span>HubSpot</span>
          </div>
        </div>

        <div className="portraitWrap">
          <div className="portraitGlow" />

          <div className="portraitFrame">
            <img
              src="/images/sameer-profile.jpeg"
              alt="Sameer Jadoon"
              className="portrait"
            />
          </div>

          <div className="floatingCard">
            <div className="floatingIcon">↗</div>
            <div>
              <strong>Outbound Focus</strong>
              <span>Research → Verify → Convert</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trustBar">
        <div className="container trustInner">
          <span>BUILT AROUND</span>
          <strong>RESEARCH</strong>
          <b>→</b>
          <strong>TARGETING</strong>
          <b>→</b>
          <strong>DATA</strong>
          <b>→</b>
          <strong>PERSONALIZATION</strong>
          <b>→</b>
          <strong>OUTBOUND</strong>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section container">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Outbound built with intent.</h2>
          </div>

          <p>
            Good outbound starts long before the first email. The focus is on
            finding the right companies, people and reasons to start a
            conversation.
          </p>
        </div>

        <div className="caseGrid">
          <article className="caseCard featured">
            <div className="caseTop">
              <span>01</span>
              <span>B2B SAAS</span>
            </div>

            <div className="caseContent">
              <p className="caseLabel">TARGETING + LEAD GENERATION</p>

              <h3>
                Finding the right decision-makers for a B2B SaaS offer.
              </h3>

              <p>
                ICP research, account selection, decision-maker identification,
                lead verification and personalized outreach angles designed
                around relevance.
              </p>
            </div>

            <div className="caseBottom">
              <div className="chips">
                <span>ICP Research</span>
                <span>Lead Generation</span>
                <span>Personalization</span>
              </div>

              <span className="caseArrow">01 / 03</span>
            </div>
          </article>

          <article className="caseCard">
            <div className="caseTop">
              <span>02</span>
              <span>AGENCY</span>
            </div>

            <div className="caseContent">
              <p className="caseLabel">PROSPECTING</p>

              <h3>
                Building a targeted outbound pipeline for an agency.
              </h3>

              <p>
                Segmented prospect research designed to put a relevant offer
                in front of businesses with a clear reason to talk.
              </p>
            </div>

            <div className="caseBottom">
              <div className="chips">
                <span>Prospecting</span>
                <span>Segmentation</span>
              </div>

              <span className="caseArrow">02 / 03</span>
            </div>
          </article>

          <article className="caseCard">
            <div className="caseTop">
              <span>03</span>
              <span>B2B SERVICES</span>
            </div>

            <div className="caseContent">
              <p className="caseLabel">OUTBOUND SYSTEM</p>

              <h3>
                Creating a repeatable prospecting system for a B2B service.
              </h3>

              <p>
                From market research and qualification to clean contact data
                and concise outbound messaging.
              </p>
            </div>

            <div className="caseBottom">
              <div className="chips">
                <span>Research</span>
                <span>Verification</span>
              </div>

              <span className="caseArrow">03 / 03</span>
            </div>
          </article>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="darkSection">
        <div className="section container">
          <div className="sectionHead light">
            <div>
              <p className="eyebrow">WHAT I DO</p>
              <h2>Everything behind a better outbound campaign.</h2>
            </div>

            <p>
              A practical workflow that puts targeting, data quality and
              relevance ahead of mass outreach.
            </p>
          </div>

          <div className="serviceGrid">
            {services.map((service) => (
              <div className="service" key={service.number}>
                <div className="serviceNumber">{service.number}</div>

                <div className="serviceIcon">↗</div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section container">
        <p className="eyebrow">THE PROCESS</p>

        <div className="processHeading">
          <h2>A systematic approach to outbound.</h2>

          <p>
            No random lists. No generic messaging. Each step is designed to
            make the next one more effective.
          </p>
        </div>

        <div className="processGrid">
          {process.map(([number, title, text]) => (
            <div className="processItem" key={number}>
              <span>{number}</span>

              <h3>{title}</h3>

              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CREDENTIALS */}
      <section id="credentials" className="credentials">
        <div className="section container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">CREDENTIALS</p>
              <h2>Continuous learning.</h2>
            </div>

            <p>
              Professional development supporting my work across email
              marketing, outbound and B2B sales.
            </p>
          </div>

          <div className="credentialGrid">
            <article className="credentialCard">
              <div className="certificateImage">
                <img
                  src="/images/hubspot-email-marketing.png"
                  alt="HubSpot Email Marketing Certified certificate"
                />
              </div>

              <div className="credentialBody">
                <p className="issuer">HUBSPOT ACADEMY</p>

                <h3>Email Marketing Certified</h3>

                <p>
                  Training covering email marketing strategy, segmentation,
                  design, deliverability and campaign optimization.
                </p>

                <a href={hubspotCredential}>
                  View Credential →
                </a>
              </div>
            </article>

            <article className="credentialCard">
              <div className="certificateImage pdfPreview">
                <div className="pdfIcon">A</div>

                <strong>
                  Understand B2B Business Development &amp; Sales
                </strong>

                <small>Alison · 29 August 2026</small>
              </div>

              <div className="credentialBody">
                <p className="issuer">ALISON</p>

                <h3>B2B Business Development &amp; Sales</h3>

                <p>
                  Professional training covering B2B business development and
                  sales fundamentals.
                </p>

                <p className="credentialMeta">
                  Certificate 4062-60405919
                </p>

                <a
                  href={alisonVerify}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify Certificate →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section container about">
        <div>
          <p className="eyebrow">ABOUT</p>

          <h2>
            I focus on the work behind the meeting.
          </h2>
        </div>

        <div className="aboutCopy">
          <p className="largeText">
            I’m a B2B Lead Generation &amp; Cold Email Specialist focused on
            helping businesses build a more targeted outbound pipeline.
          </p>

          <p>
            My approach combines prospect research, accurate data,
            personalization and thoughtful cold-email strategy rather than
            relying on mass outreach.
          </p>

          <p>
            I work with tools including LinkedIn Sales Navigator, Apollo,
            Instantly, Smartlead, Google Sheets, HubSpot and Notion.
          </p>

          <a
            className="textLink"
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Connect with me on LinkedIn ↗
          </a>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="finalCta">
        <div className="container finalCtaInner">
          <div>
            <p className="eyebrow">LET&apos;S TALK</p>

            <h2>
              Have a B2B offer worth putting in front of the right people?
            </h2>

            <p>
              Let&apos;s build an outbound system around it.
            </p>
          </div>

          <a
            className="button ctaButton"
            href={calendly}
            target="_blank"
            rel="noreferrer"
          >
            Book a Strategy Call
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer container">
        <div>
          <strong>
            Sameer Jadoon<span>.</span>
          </strong>

          <p>B2B Lead Generation &amp; Cold Email Specialist</p>
        </div>

        <div className="footerLinks">
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href={calendly}
            target="_blank"
            rel="noreferrer"
          >
            Book a Call ↗
          </a>

          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
