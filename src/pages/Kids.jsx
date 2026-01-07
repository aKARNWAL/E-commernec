export default function Kids() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title center">What Clients Say</h2>
        <p className="subtitle center">Clients hamse khush rehte hain 😄</p>

        <div className="grid-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="card">
              <p>“Amazing experience! Highly recommended.”</p>
              <strong>Client Name</strong>
              <div className="muted">Company</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
