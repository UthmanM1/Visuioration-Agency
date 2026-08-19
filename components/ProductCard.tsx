export default function ProductCard({ name, price }: { name: string; price: string }) {
  return (
    <div className="product-card">
      <div className="p-swatch" aria-hidden="true"></div>
      <h5>{name}</h5>
      <div className="p-price">{price}</div>
    </div>
  );
}
