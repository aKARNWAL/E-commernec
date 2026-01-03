export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="logo">BrandName</div>
        <div className="muted">
          © {new Date().getFullYear()} BrandName. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
