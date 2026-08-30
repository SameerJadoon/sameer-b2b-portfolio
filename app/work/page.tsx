import Link from "next/link";

const calendly =
  "https://calendly.com/sameerjadoon787/b2b-outbound-strategy-call";

const linkedin =
  "https://www.linkedin.com/in/sameer-jadoon-45780434b/";

export default function WorkPage() {
  return (
    <main>
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

      <section className="pageHero">
        <div className="eyebrow">SELECTED WORK</div>

        <h1>
          Outbound systems built around <em>the right prospects.</em>
        </h1>

        <p>
          A look at the type of prospect research, lead generation and
          outbound work I focus on for B2B businesses.
        </p>
      </section>

      <section className="section">
        <div className="caseGrid">
          <article className="caseCard featured">
            <div className="caseNumber">01 / B2B SAAS</div>

            <h3>
              Finding the right decision-makers for a B2B SaaS offer.
            </h3>

            <p>
              The goal was to identify companies that fit a defined ideal
              customer profile and then locate the people most relevant to
              the buying process.
            </p>

            <div className="workDetails">
              <div>
                <strong>Focus</strong>
                <span>ICP research &amp; prospecting</span>
              </div>

              <div>
                <strong>Work included</strong>
                <span>
                  Account research, decision-maker identification, lead
                  verification and outreach angles.
                </span>
              </div>
            </div>

            <div className="chips">
              <span>ICP Research</span>
              <span>Lead Generation</span>
              <span>Personalization</span>
            </div>
          </article>

          <article className="caseCard">
            <div className="caseNumber">02 / AGENCY</div>

            <h3>
              Building a targeted outbound pipeline for an agency.
            </h3>

            <p>
              Rather than contacting businesses at random, the approach
              focused on finding companies where the agency&apos;s service
              could solve a relevant problem.
            </p>

            <div className="workDetails">
              <div>
                <strong>Focus</strong>
                <span>Targeted B2B prospecting</span>
              </div>

              <div>
                <strong>Work included</strong>
                <span>
                  Market segmentation, company research, contact sourcing
                  and messaging angles.
                </span>
              </div>
            </div>

            <div className="chips">
              <span>Prospecting</span>
              <span>Segmentation</span>
              <span>Cold Email</span>
            </div>
          </article>

          <article className="caseCard">
            <div className="caseNumber">03 / B2B SERVICES</div>

            <h3>
              Creating a repeatable prospecting system for a B2B service
              provider.
            </h3>

            <p>
              Building a process that could consistently turn a defined
              target market into a clean and usable prospect list.
            </p>

            <div className="workDetails">
              <div>
                <strong>Focus</strong>
                <span>Research &amp; data quality</span>
              </div>

              <div>
                <strong>Work included</strong>
                <span>
                  Market research, qualification, contact sourcing,
                  verification and concise outbound messaging.
                </span>
              </div>
            </div>

            <div className="chips">
              <span>Research</span>
              <span>Verification</span>
              <span>Messaging</span>
            </div>
          </article>
        </div>
      </section>

      <section className="darkSection">
        <div className="section">
          <div className="eyebrow lightEyebrow">MY APPROACH</div>

          <h2 className="lightHeading">
            Quality of targeting comes before quantity of outreach.
          </h2>

          <div className="approachGrid">
            <div>
              <span>01</span>
              <h3>Right companies</h3>
              <p>
                Start with businesses that actually fit the offer instead
                of building a generic list.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Right people</h3>
              <p>
                Identify relevant decision-makers rather than sending
                messages to whoever happens to appear in a database.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Right message</h3>
              <p>
                Build concise outreach around a relevant reason for the
                prospect to start a conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div>
          <div className="eyebrow">START A PROJECT</div>

          <h2>
            Looking for help building your B2B outbound pipeline?
          </h2>

          <p>Let's talk about your market, offer and ideal customer.</p>
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

      <footer className="footer">
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

          <Link href="/">Home</Link>
        </div>
      </footer>
    </main>
  );
}
