```tsx
import Link from "next/link";

const calendly =
  "https://calendly.com/sameerjadoon787/b2b-outbound-strategy-call";

const linkedin =
  "https://www.linkedin.com/in/sameer-jadoon-45780434b/";

const hubspotCredential =
  "https://app-na2.hubspot.com/academy/achievements/9lh0vr6n/en/1/sameer-jadoon/email-marketing-certified";

const alisonVerify =
  "https://alison.com/verify/fffd683d54";

export default function Credentials() {
  return (
    <main>
      {/* NAVIGATION */}
      <nav className="nav">
        <div className="navInner">
          <Link href="/" className="brand">
            SJ<span>.</span>
          </Link>

          <div className="navLinks">
            <Link href="/">Home</Link>
            <Link href="/work">Work</Link>
            <Link href="/services">Services</Link>
            <Link href="/process">Process</Link>
            <Link href="/credentials">Credentials</Link>
            <Link href="/about">About</Link>
          </div>

          <a
            className="navCta"
            href={calendly}
            target="_blank"
            rel="noreferrer"
          >
            Book a Call <span>↗</span>
          </a>
        </div>
      </nav>

      {/* HEADER */}
      <section className="pageHero">
        <div className="eyebrow">CREDENTIALS</div>

        <h1>
          Certifications supporting my{" "}
          <em>outbound work.</em>
        </h1>

        <p>
          Professional learning across email marketing, B2B business
          development and sales.
        </p>
      </section>

      {/* CREDENTIALS */}
      <section className="section">
        <div className="credentialGrid">
          {/* HUBSPOT */}
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
                Certification covering email marketing strategy,
                segmentation, email design, deliverability and campaign
                optimization.
              </p>

              <a
                href={hubspotCredential}
                target="_blank"
                rel="noreferrer"
                className="credentialLink"
              >
                Verify HubSpot Credential ↗
              </a>
            </div>
          </article>

          {/* ALISON */}
          <article className="credentialCard">
            <div className="certificateImage pdfPreview">
              <div className="pdfIcon">PDF</div>

              <strong>
                Understand B2B Business Development & Sales
              </strong>

              <small>Alison · 29 August 2026</small>
            </div>

            <div className="credentialBody">
              <p className="issuer">ALISON</p>

              <h3>B2B Business Development & Sales</h3>

              <p>
                Professional training covering B2B business development
                and sales fundamentals.
              </p>

              <p className="credentialMeta">
                Certificate 4062-60405919
              </p>

              <a
                href={alisonVerify}
                target="_blank"
                rel="noreferrer"
                className="credentialLink"
              >
                Verify Alison Certificate ↗
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* NOTE */}
      <section className="credentialNote">
        <div>
          <div className="eyebrow">CONTINUOUS LEARNING</div>

          <h2>
            Building skills that support better outbound execution.
          </h2>

          <p>
            Certifications are one part of my development. I continue
            building practical knowledge around prospect research, email
            deliverability, outbound infrastructure, CRM workflows and
            appointment setting.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="finalCta">
        <div>
          <div className="eyebrow">WORK TOGETHER</div>

          <h2>
            Looking for practical B2B outbound support?
          </h2>

          <p>Let's discuss what you're trying to achieve.</p>
        </div>

        <a
          href={calendly}
          target="_blank"
          rel="noreferrer"
          className="button primary big"
        >
          Book a Strategy Call ↗
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <strong>
            Sameer Jadoon<span>.</span>
          </strong>

          <p>B2B Lead Generation & Cold Email Specialist</p>
        </div>

        <div className="footerLinks">
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <Link href="/">Home</Link>
        </div>
      </footer>
    </main>
  );
}
```
