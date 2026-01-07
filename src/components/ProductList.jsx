import ProductCard from "./ProductCard";

export default function ProductList({ products = [], onSelect }) {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
