import Link from "next/link";

const calendly =
  "https://calendly.com/sameerjadoon787/b2b-outbound-strategy-call";

const linkedin =
  "https://www.linkedin.com/in/sameer-jadoon-45780434b/";

const services = [
  {
    number: "01",
    title: "ICP Research",
    text:
      "Define exactly which companies are worth targeting based on your offer, market and ideal customer profile.",
  },
  {
    number: "02",
    title: "B2B Lead Generation",
    text:
      "Find relevant companies and decision-makers using structured prospect research and modern B2B data sources.",
  },
  {
    number: "03",
    title: "Lead Verification",
    text:
      "Review and clean prospect data before it reaches your outbound campaign.",
  },
  {
    number: "04",
    title: "Cold Email Copywriting",
    text:
      "Create concise, relevant messages focused on starting conversations rather than sending generic sales pitches.",
  },
  {
    number: "05",
    title: "Campaign Setup",
    text:
      "Organize prospect data, messaging and campaign structure inside modern outbound platforms.",
  },
  {
    number: "06",
    title: "Outbound Optimization",
    text:
      "Review campaign signals and continuously improve targeting, messaging and overall outbound performance.",
  },
];

export default function ServicesPage() {
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
        <div className="eyebrow">WHAT I DO</div>

        <h1>
          Practical outbound support for <em>B2B businesses.</em>
        </h1>

        <p>
          From finding the right prospects to preparing targeted outreach, I
          focus on the research and systems behind a stronger outbound
          pipeline.
        </p>
      </section>

      <section className="darkSection">
        <div className="section">
          <div className="serviceGrid largeServices">
            {services.map((service) => (
              <article className="service" key={service.number}>
                <span>{service.number}</span>

                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <div>
            <div className="eyebrow">WHO I WORK WITH</div>

            <h2>Built for B2B.</h2>
          </div>

          <p>
            My services are designed around businesses where targeted
            prospecting and outbound conversations can support growth.
          </p>
        </div>

        <div className="audienceGrid">
          <div className="audienceCard">
            <span>01</span>
            <h3>B2B Agencies</h3>
            <p>
              Find businesses that are likely to need your service and reach
              relevant decision-makers.
            </p>
          </div>

          <div className="audienceCard">
            <span>02</span>
            <h3>SaaS Companies</h3>
            <p>
              Build targeted account lists and identify the people most
              relevant to your software offer.
            </p>
          </div>

          <div className="audienceCard">
            <span>03</span>
            <h3>B2B Service Providers</h3>
            <p>
              Turn a defined target market into a structured prospecting
              system.
            </p>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div>
          <div className="eyebrow">LET&apos;S TALK</div>

          <h2>Have a market you want to reach?</h2>

          <p>
            Let's discuss your offer, target customer and outbound goals.
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
