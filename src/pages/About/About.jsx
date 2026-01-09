import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="left">
          <h1>ABOUT US</h1>
        </div>

        <div className="right">
          <h2>Hydration with Heart</h2>
          <p>
            This is a space to share more about the business: who's behind it,
            what it does and what this site has to offer. It's an opportunity to
            tell the story behind the business or describe a special service or
            product it offers.
          </p>

          <p>
            Let the writing speak for itself. Keep a consistent tone and voice
            throughout the website to stay true to the brand image and give
            visitors a taste of the company’s values and personality.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="card">
          <img src="IMAGE_URL_1" alt="" />
          <h3>Sustainability</h3>
          <p>
            Use this space to share a testimonial quote about the business, its
            products or services.
          </p>
        </div>

        <div className="card">
          <img src="IMAGE_URL_2" alt="" />
          <h3>Quality</h3>
          <p>
            Use this space to share a testimonial quote about the business, its
            products or services.
          </p>
        </div>

        <div className="card">
          <img src="IMAGE_URL_3" alt="" />
          <h3>Community</h3>
          <p>
            Use this space to share a testimonial quote about the business, its
            products or services.
          </p>
        </div>
      </section>

      <section className="faq">
        <h2>Frequently asked questions</h2>

        <details>
          <summary>What is an FAQ section?</summary>
          <p>
            An FAQ section can be used to quickly answer common questions about
            your business.
          </p>
        </details>

        <details>
          <summary>Why do FAQs matter?</summary>
          <p>They help customers find answers quickly.</p>
        </details>

        <details>
          <summary>Where can I add my FAQs?</summary>
          <p>You can add them on your About or Support page.</p>
        </details>
      </section>

      <section className="contact">
        <div className="left-text">
          <h1>
            HAVE A QUESTION?
            <br />
            WE’RE HAPPY TO HELP.
          </h1>
        </div>

        <form>
          <input placeholder="First name" />
          <input placeholder="Last name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <textarea placeholder="Your Message" />
          <button>SUBMIT</button>
        </form>
      </section>
    </div>
  );
}
