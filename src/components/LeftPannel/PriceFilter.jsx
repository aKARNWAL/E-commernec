export default function PriceFilter({ maxPrice, setMaxPrice }) {
  return (
    <>
      <label>Price</label>
      <input
        type="range"
        min="50"
        max="150"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
      <p>${maxPrice}</p>
    </>
  );
}
