export default function ProductCard({ product, onSelect }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => onSelect(product)}>
        View Details
      </button>
    </div>
  );
}
