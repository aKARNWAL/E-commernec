import { Phone, Mail } from "lucide-react";

export default function About() {
  return (
    <section className="section gray">
      <div className="container contact-grid">
        <form className="card form">
          <input placeholder="Name" />
          <input placeholder="Email" type="email" />
          <textarea placeholder="Message" rows={4} />
          <button className="btn btn-primary">Send Message</button>
        </form>

        <div className="card">
          <h3>Get in Touch</h3>
          <div className="contact-row">
            <Phone size={18} /> +1 234 567 890
          </div>
          <div className="contact-row">
            <Mail size={18} /> info@example.com
          </div>
        </div>
      </div>
    </section>
  );
}
