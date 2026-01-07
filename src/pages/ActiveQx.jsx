export default function ActiveQx() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title center">Portfolio</h2>
        <p className="subtitle center">Ye hamare recent kaam hain.</p>

        <div className="grid-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="square placeholder"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
