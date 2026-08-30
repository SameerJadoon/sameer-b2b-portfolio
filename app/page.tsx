const linkedin =
  "https://www.linkedin.com/in/sameer-jadoon-45780434b/";
const alisonVerify = "https://alison.com/verify/fffd683d54";

// Replace this placeholder with the direct HubSpot credential URL
// from your HubSpot Academy certification page.
const hubspotCredential = "#hubspot-credential";

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#top">SJ<span>.</span></a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#credentials">Credentials</a>
          <a href="#about">About</a>
        </div>
        <a className="navCta" href="#contact">Let&apos;s Talk <span>↗</span></a>
      </nav>

      <section id="top" className="hero container">
        <div className="heroCopy">
          <p className="eyebrow">B2B LEAD GENERATION · COLD EMAIL · OUTBOUND</p>
          <h1>Turn the right prospects into <em>sales conversations.</em></h1>
          <p className="heroText">
            I help B2B agencies, SaaS companies, and service businesses identify
            qualified prospects, build targeted lists, and create thoughtful
            outbound campaigns.
          </p>
          <div className="actions">
            <a className="button primary" href="#work">View Case Studies <span>↗</span></a>
            <a className="button ghost" href={linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
          </div>
          <div className="toolLine">
            <span>Sales Navigator</span><i>·</i><span>Apollo</span><i>·</i>
            <span>Instantly</span><i>·</i><span>Smartlead</span><i>·</i>
            <span>HubSpot</span>
          </div>
        </div>

        <div className="portraitWrap">
          <div className="portraitGlow" />
          <img src="/images/sameer-profile.jpeg" alt="Sameer Jadoon" className="portrait" />
          <div className="portraitTag">
            <span className="statusDot" /> Available for B2B projects
          </div>
        </div>
      </section>

      <section className="marquee">
        <div className="container marqueeInner">
          <span>RESEARCH</span><b>→</b><span>BUILD</span><b>→</b>
          <span>VERIFY</span><b>→</b><span>PERSONALIZE</span><b>→</b>
          <span>OPTIMIZE</span>
        </div>
      </section>

      <section id="work" className="section container">
        <div className="sectionHead">
          <div><p className="eyebrow">SELECTED WORK</p><h2>Case Studies</h2></div>
          <p>Focused outbound systems built around the right audience, message, and data.</p>
        </div>
        <div className="caseGrid">
          <article className="caseCard featured">
            <div className="caseNumber">01 / B2B SaaS</div>
            <h3>Finding the right decision-makers for a B2B SaaS offer.</h3>
            <p>ICP research, account selection, decision-maker identification, lead verification and personalized outreach angles.</p>
            <div className="chips"><span>ICP Research</span><span>Lead Generation</span><span>Personalization</span></div>
            <div className="caseArrow">View Case Study ↗</div>
          </article>
          <article className="caseCard">
            <div className="caseNumber">02 / AGENCY</div>
            <h3>Building a targeted outbound pipeline for an agency.</h3>
            <p>Segmented prospect research designed to put a relevant offer in front of businesses with a clear reason to talk.</p>
            <div className="chips"><span>Prospecting</span><span>Segmentation</span><span>Cold Email</span></div>
            <div className="caseArrow">View Case Study ↗</div>
          </article>
          <article className="caseCard">
            <div className="caseNumber">03 / B2B SERVICES</div>
            <h3>Creating a repeatable prospecting system for a B2B service provider.</h3>
            <p>From market research and qualification to clean contact data and concise outbound messaging.</p>
            <div className="chips"><span>Research</span><span>Verification</span><span>Messaging</span></div>
            <div className="caseArrow">View Case Study ↗</div>
          </article>
        </div>
      </section>

      <section id="services" className="section darkSection">
        <div className="container">
          <div className="sectionHead light">
            <div><p className="eyebrow">WHAT I DO</p><h2>Outbound, without the guesswork.</h2></div>
            <p>A practical workflow that keeps targeting and message quality at the center.</p>
          </div>
          <div className="serviceGrid">
            {[
              ["01", "ICP Research", "Define exactly who should be targeted and why."],
              ["02", "B2B Lead Generation", "Find relevant companies and the people who matter."],
              ["03", "Lead Verification", "Clean prospect data before it reaches your campaign."],
              ["04", "Cold Email Copywriting", "Write concise, relevant messages built for replies."],
              ["05", "Campaign Setup", "Organize outreach in modern outbound platforms."],
              ["06", "Optimization", "Use campaign signals to improve targeting and messaging."]
            ].map(([n, title, text]) => (
              <div className="service" key={n}>
                <span>{n}</span><h3>{title}</h3><p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section container">
        <p className="eyebrow">THE PROCESS</p>
        <h2>A systematic approach to outbound.</h2>
        <div className="processGrid">
          {[
            ["01", "Research", "Understand the market, offer and ideal customer."],
            ["02", "Build", "Create a focused list of relevant accounts and contacts."],
            ["03", "Verify", "Check and clean data before outreach."],
            ["04", "Personalize", "Develop relevant angles and concise messaging."],
            ["05", "Launch", "Run a controlled outbound campaign."],
            ["06", "Optimize", "Review signals and refine the system."]
          ].map(([n, title, text]) => (
            <div className="processItem" key={n}>
              <span>{n}</span><h3>{title}</h3><p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="credentials" className="section credentials">
        <div className="container">
          <div className="sectionHead">
            <div><p className="eyebrow">CREDENTIALS</p><h2>Certifications</h2></div>
            <p>Professional development supporting my work across email marketing and B2B sales.</p>
          </div>
          <div className="credentialGrid">
            <article className="credentialCard">
              <div className="certificateImage"><img src="/images/hubspot-email-marketing.png" alt="HubSpot Email Marketing Certified certificate" /></div>
              <div className="credentialBody">
                <p className="issuer">HUBSPOT ACADEMY</p>
                <h3>Email Marketing Certified</h3>
                <p>Certification covering email marketing strategy, segmentation, email design, deliverability, and campaign optimization.</p>
                <a href={hubspotCredential}>View Credential →</a>
              </div>
            </article>
            <article className="credentialCard">
              <div className="certificateImage pdfPreview">
                <div className="pdfIcon">PDF</div>
                <strong>Understand B2B Business Development &amp; Sales</strong>
                <small>Alison · 29 August 2026</small>
              </div>
              <div className="credentialBody">
                <p className="issuer">ALISON</p>
                <h3>B2B Business Development &amp; Sales</h3>
                <p>Professional training in B2B business development and sales fundamentals.</p>
                <p className="credentialMeta">Certificate 4062-60405919</p>
                <a href={alisonVerify} target="_blank" rel="noreferrer">Verify Certificate →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="section about container">
        <div><p className="eyebrow">ABOUT</p><h2>Focused on the work behind a better outbound pipeline.</h2></div>
        <div>
          <p className="largeText">I’m a B2B Lead Generation &amp; Cold Email Specialist focused on helping businesses build a more targeted outbound pipeline.</p>
          <p>My approach combines prospect research, accurate data, personalization and thoughtful cold-email strategy rather than relying on mass outreach.</p>
          <p>Tools I work with include LinkedIn Sales Navigator, Apollo, Instantly, Smartlead, Google Sheets, HubSpot and Notion.</p>
        </div>
      </section>

      <section id="contact" className="contact container">
        <div>
          <p className="eyebrow">LET&apos;S CONNECT</p>
          <h2>Have a B2B offer worth putting in front of the right people?</h2>
          <p>Let&apos;s build an outbound system around it.</p>
        </div>
        <a className="button primary big" href={linkedin} target="_blank" rel="noreferrer">Start a Conversation ↗</a>
      </section>

      <footer className="footer container">
        <div><strong>Sameer Jadoon<span>.</span></strong><p>B2B Lead Generation &amp; Cold Email Specialist</p></div>
        <div className="footerLinks"><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
