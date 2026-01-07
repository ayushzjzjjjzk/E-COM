export default function ProductDetails({ product, onBack }) {
  if (!product) return null;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
}
