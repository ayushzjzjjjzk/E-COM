export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search product..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{ padding: "8px", marginBottom: "10px" }}
    />
  );
}
