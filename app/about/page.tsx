```tsx
import Link from "next/link";

const calendly =
  "https://calendly.com/sameerjadoon787/b2b-outbound-strategy-call";

const linkedin =
  "https://www.linkedin.com/in/sameer-jadoon-45780434b/";

export default function About() {
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
        <div className="eyebrow">ABOUT</div>

        <h1>
          Focused on the work behind a{" "}
          <em>better outbound pipeline.</em>
        </h1>

        <p>
          I help B2B businesses turn a defined target market into a more
          organized and focused prospecting system.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="section">
        <div className="aboutLargeGrid">
          <div>
            <div className="eyebrow">WHO I AM</div>

            <h2>
              B2B Lead Generation & Cold Email Specialist.
            </h2>
          </div>

          <div className="aboutText">
            <p className="largeText">
              My focus is simple: help businesses find the right people to
              talk to.
            </p>

            <p>
              I work across prospect research, B2B lead generation, lead
              verification, personalization and cold-email strategy.
            </p>

            <p>
              Instead of relying on mass outreach, I prefer a more
              structured approach where the target market, prospect and
              message all make sense together.
            </p>

            <p>
              My toolkit includes LinkedIn Sales Navigator, Apollo,
              Instantly, Smartlead, Google Sheets, HubSpot and Notion.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="darkSection">
        <div className="section">
          <div className="eyebrow lightEyebrow">HOW I WORK</div>

          <h2 className="lightHeading">
            A few principles I bring to every project.
          </h2>

          <div className="valuesGrid">
            <div>
              <span>01</span>
              <h3>Research before outreach</h3>
              <p>
                Understand the market and prospect before deciding what
                should be said.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Quality over volume</h3>
              <p>
                A smaller list of relevant prospects can be more useful
                than a large list of poorly matched contacts.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Clear communication</h3>
              <p>
                Keep messages concise, understandable and focused on a
                legitimate reason to start a conversation.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Continuous improvement</h3>
              <p>
                Use campaign feedback and results to improve the system
                rather than repeating the same approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="section">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">TOOLS</div>

            <h2>My outbound toolkit.</h2>
          </div>

          <p>
            Tools help execute the process, but the strategy starts with
            understanding the customer.
          </p>
        </div>

        <div className="toolsGrid">
          <div>LinkedIn Sales Navigator</div>
          <div>Apollo</div>
          <div>Instantly</div>
          <div>Smartlead</div>
          <div>HubSpot</div>
          <div>Google Sheets</div>
          <div>Google Workspace</div>
          <div>Notion</div>
        </div>
      </section>

      {/* CTA */}
      <section className="finalCta">
        <div>
          <div className="eyebrow">LET'S CONNECT</div>

          <h2>
            Have a B2B offer and a market you want to reach?
          </h2>

          <p>
            Let's talk about your target customer and outbound goals.
          </p>
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
