import React from 'react';
import { Product } from '../types/types'; 

type ProductCardProps = {
  productInfo: Product;
}
const ProductCard = ({ productInfo }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={productInfo.image} alt={productInfo.name} className="product-image" />
      
    </div>
  );
};
export default ProductCard;