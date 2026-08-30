const hubspotCredential =
  "https://app-na2.hubspot.com/academy/achievements/9lh0vr6n/en/1/sameer-jadoon/email-marketing-certified";

const alisonVerify =
  "https://alison.com/verify/fffd683d54";

export default function CredentialsPage() {
  return (
    <main className="innerPage">
      <section className="innerHero">
        <div className="container">
          <p className="eyebrow">CREDENTIALS</p>

          <h1>
            Continuous
            <span> learning.</span>
          </h1>

          <p className="innerHeroText">
            Professional development supporting my work across email
            marketing, outbound and B2B sales.
          </p>
        </div>
      </section>

      <section className="innerContent">
        <div className="container">
          <div className="credentialPageGrid">

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

                <h2>Email Marketing Certified</h2>

                <p>
                  Certification covering email marketing strategy,
                  segmentation, email design, deliverability and campaign
                  optimization.
                </p>

                <a
                  href={hubspotCredential}
                  target="_blank"
                  rel="noreferrer"
                  className="textLink"
                >
                  View HubSpot Credential ↗
                </a>
              </div>
            </article>

            {/* ALISON */}
            <article className="credentialCard">
              <div className="certificateImage pdfPreview">
                <div className="pdfIcon">A</div>

                <strong>
                  Understand B2B Business Development &amp; Sales
                </strong>

                <small>
                  Alison · 29 August 2026
                </small>
              </div>

              <div className="credentialBody">
                <p className="issuer">ALISON</p>

                <h2>
                  B2B Business Development &amp; Sales
                </h2>

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
                  className="textLink"
                >
                  Verify Alison Certificate ↗
                </a>
              </div>
            </article>

          </div>

          {/* WHY CREDENTIALS */}
          <div className="credentialIntro">
            <p className="eyebrow">WHY IT MATTERS</p>

            <h2>
              Learning that supports practical outbound work.
            </h2>

            <p>
              Certifications are one part of my professional development.
              I focus on applying what I learn to real-world prospect
              research, lead generation, email marketing and outbound
              campaigns.
            </p>
          </div>

          {/* BACK LINK */}
          <div className="backLink">
            <a href="/">
              ← Back to Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
