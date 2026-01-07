import { useState } from "react";
import productsData from "./data/products";
import ProductList from "./components/ProductList";
import SearchBar from "./components/searchbar";
import ProductDetails from "./components/ProductDetails";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {!selectedProduct && (
        <>
          <SearchBar query={query} setQuery={setQuery} />
          <ProductList
            products={filteredProducts}
            onSelect={setSelectedProduct}
          />
        </>
      )}

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
