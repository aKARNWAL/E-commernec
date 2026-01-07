import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-columns">

          <div className="footer-col">
            <h3>SHOP</h3>
            <p>All products</p>
            <p>Best Sellers</p>
            <p>Active QX</p>
            <p>Artisanal</p>
            <p>Kids</p>
            <p>About Us</p>
          </div>

          <div className="footer-col">
            <h3>POLICIES</h3>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Shipping Policy</p>
            <p>Refund Policy</p>
            <p>Accessibility Statement</p>
          </div>

          <div className="footer-col">
            <h3>CONTACT</h3>
            <p>500 Terry Francine St.</p>
            <p>San Francisco, CA 94158</p>
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
          </div>

          <div className="footer-col">
            <h3>SOCIAL</h3>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>X</p>
            <p>Tik Tok</p>
          </div>

          <div className="footer-col">
            <h3>STAY IN THE LOOP</h3>
            <p>Sign up to receive updates and special offers</p>

            <input
              type="email"
              placeholder="Email Address *"
              className="email-input"
            />

            <label className="checkbox">
              <input type="checkbox" /> Yes, subscribe me to your newsletter.
            </label>

            <button className="subscribe-btn">SIGN UP</button>
          </div>
        </div>

        <div className="footer-bottom">
          <h1 className="brand">QUENX.</h1>

          <p>© 2035 by Quenx. Built on Wix Studio</p>
        </div>
      </div>
    </footer>
  );
}
