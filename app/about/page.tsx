import Link from "next/link";

const linkedin =
  "https://www.linkedin.com/in/sameer-jadoon-45780434b/";

const calendly =
  "https://calendly.com/sameerjadoon787/b2b-outbound-strategy-call";

export default function AboutPage() {
  return (
    <main className="innerPage">
      <section className="innerHero">
        <div className="container">
          <p className="eyebrow">ABOUT</p>

          <h1>
            I focus on the work
            <span> behind the meeting.</span>
          </h1>

          <p className="innerHeroText">
            I’m a B2B Lead Generation & Cold Email Specialist focused on
            helping businesses build a more targeted outbound pipeline.
          </p>
        </div>
      </section>

      <section className="innerContent">
        <div className="container">
          <div className="contentGrid">
            <div>
              <p className="eyebrow">MY APPROACH</p>

              <h2>
                Better outbound starts with better targeting.
              </h2>
            </div>

            <div className="contentText">
              <p>
                My approach combines prospect research, accurate data,
                personalization and thoughtful cold-email strategy rather than
                relying on mass outreach.
              </p>

              <p>
                I focus on understanding who a business actually wants to
                reach, identifying the right decision-makers and creating
                relevant reasons for those prospects to start a conversation.
              </p>

              <p>
                The goal is simple: build an outbound system that is focused,
                organized and repeatable.
              </p>
            </div>
          </div>

          <div className="aboutCards">
            <article>
              <span>01</span>
              <h3>Research First</h3>
              <p>
                Understand the offer, market and ideal customer before
                building a prospect list.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Quality Data</h3>
              <p>
                Find relevant contacts and verify prospect information before
                it reaches an outreach campaign.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Relevant Messaging</h3>
              <p>
                Create concise outreach around the prospect’s situation rather
                than sending generic mass messages.
              </p>
            </article>
          </div>

          <div className="toolsSection">
            <p className="eyebrow">TOOLS</p>

            <div className="toolsGrid">
              <span>LinkedIn Sales Navigator</span>
              <span>Apollo</span>
              <span>Instantly</span>
              <span>Smartlead</span>
              <span>HubSpot</span>
              <span>Google Sheets</span>
              <span>Google Workspace</span>
              <span>Notion</span>
            </div>
          </div>

          <div className="innerCta">
            <div>
              <p className="eyebrow">LET&apos;S CONNECT</p>

              <h2>
                Have a B2B offer worth putting in front of the right people?
              </h2>
            </div>

            <div className="innerActions">
              <a
                className="button primary"
                href={calendly}
                target="_blank"
                rel="noreferrer"
              >
                Book a Strategy Call <span>↗</span>
              </a>

              <a
                className="button ghost"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span>↗</span>
              </a>
            </div>
          </div>

          <div className="backLink">
            <Link href="/">← Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
