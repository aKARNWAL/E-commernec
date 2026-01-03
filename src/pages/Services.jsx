export default function Services() {
  const list = [
    "Web Design",
    "Brand Identity",
    "Digital Marketing",
    "UI/UX Design",
    "E‑commerce",
    "Content Creation",
  ];

  return (
    <section className="section gray">
      <div className="container">
        <h2 className="title center">Our Services</h2>
        <p className="subtitle center">
          Ham apke brand ko grow karne me help karte hain.
        </p>

        <div className="grid-3">
          {list.map((t) => (
            <div className="card" key={t}>
              <h3>{t}</h3>
              <p>High‑quality {t.toLowerCase()} service milegi yaha 🙂</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
