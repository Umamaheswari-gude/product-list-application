import React from 'react';
import ProductCard from './productCard';
import { Product } from '../types/types'; 

const PRODUCTSDATA: Product[] = [
  { id: 1, name: 'Iphone', price: 139000, inStock: true, image: 'https://cdn.pixabay.com/photo/2014/12/10/12/26/iphone-563067_1280.jpg' },
  { id: 2, name: 'Watch', price: 39900, inStock: false, image: 'https://cdn.pixabay.com/photo/2016/11/21/13/58/analog-watch-1845547_1280.jpg' },
];

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <div className="product-list">
        {PRODUCTSDATA.map(product => (
          <ProductCard key= {product.id} productInfo={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;