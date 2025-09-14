import React from 'react';
import { Product } from '../types/types';
import './productCard.css'; 

type ProductCardProps = {
  productInfo: Product;
}
const ProductCard = ({ productInfo }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={productInfo.image} alt={productInfo.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{productInfo.name}</h3>
        <p className="product-price">{productInfo.price}</p>
        <span className={`stock-label ${productInfo.inStock ? 'available' : 'out-of-stock'}`}>
          {productInfo.inStock ? 'Available' : 'Out of Stock'}
        </span>
      </div>
    </div>
  );
};
export default ProductCard;