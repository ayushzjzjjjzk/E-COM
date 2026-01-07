const products = Array.from({ length: 1003 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: 1000 + (index % 50) * 500,
  description: `This is the description for Product ${index + 1}`,
}));

export default products;

