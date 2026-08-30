import Link from "next/link";

const calendly =
  "https://calendly.com/sameerjadoon787/b2b-outbound-strategy-call";

const linkedin =
  "https://www.linkedin.com/in/sameer-jadoon-45780434b/";

const steps = [
  {
    number: "01",
    title: "Research",
    text:
      "Understand the business, offer, market and ideal customer before building a prospect list.",
  },
  {
    number: "02",
    title: "Build",
    text:
      "Create a focused list of companies and contacts that match the defined targeting criteria.",
  },
  {
    number: "03",
    title: "Verify",
    text:
      "Review and clean prospect information before it is used for outreach.",
  },
  {
    number: "04",
    title: "Personalize",
    text:
      "Develop relevant angles and concise messaging based on the prospect and offer.",
  },
  {
    number: "05",
    title: "Launch",
    text:
      "Organize the campaign and run controlled outbound activity with the right infrastructure.",
  },
  {
    number: "06",
    title: "Optimize",
    text:
      "Review replies, engagement and campaign signals to identify what should be improved.",
  },
];

export default function ProcessPage() {
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
        <div className="eyebrow">THE PROCESS</div>

        <h1>
          A systematic approach to <em>outbound.</em>
        </h1>

        <p>
          Good outbound is not simply about sending more emails. It starts
          with understanding who should be contacted and why they should care.
        </p>
      </section>

      <section className="section">
        <div className="processLargeGrid">
          {steps.map((step) => (
            <article className="processLargeItem" key={step.number}>
              <div className="processNumber">{step.number}</div>

              <div>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="darkSection">
        <div className="section">
          <div className="eyebrow lightEyebrow">CORE PRINCIPLES</div>

          <h2 className="lightHeading">
            Targeting first. Messaging second. Volume last.
          </h2>

          <div className="principlesGrid">
            <div>
              <h3>Relevance</h3>
              <p>
                Every prospect should have a logical reason for being in the
                campaign.
              </p>
            </div>

            <div>
              <h3>Accuracy</h3>
              <p>
                Clean and reliable data creates a stronger foundation for
                outbound.
              </p>
            </div>

            <div>
              <h3>Clarity</h3>
              <p>
                Messages should be simple enough for a prospect to understand
                quickly.
              </p>
            </div>

            <div>
              <h3>Iteration</h3>
              <p>
                Outbound improves when campaign signals are reviewed and used
                to refine the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div>
          <div className="eyebrow">READY TO START?</div>

          <h2>Let's build a more focused outbound system.</h2>

          <p>Bring your offer and target market. We'll start from there.</p>
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
