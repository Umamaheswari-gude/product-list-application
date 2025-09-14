import React from 'react';
import ProductCard from './productCard';
import { Product } from '../types/types'; 

const PRODUCTSDATA: Product[] = [
  { id: 1, name: 'Iphone', price: 139000, inStock: true, image: 'https://cdn.pixabay.com/photo/2014/12/10/12/26/iphone-563067_1280.jpg' },
  { id: 2, name: 'Watch', price: 39900, inStock: false, image: 'https://cdn.pixabay.com/photo/2016/11/21/13/58/analog-watch-1845547_1280.jpg' },
  { id: 3, name: 'Camera', price: 59000, inStock: true, image: 'https://cdn.pixabay.com/photo/2014/11/22/00/51/camera-541213_1280.jpg' },
  { id: 4, name: 'Smartwatch', price: 40000, inStock: true, image: 'https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_1280.jpg' },
  { id: 5, name: 'Headset', price: 8000, inStock: false, image: 'https://cdn.pixabay.com/photo/2019/09/17/21/32/piano-4484621_1280.jpg' },
  { id: 6, name: 'Airpods', price: 30000, inStock: true, image: 'https://cdn.pixabay.com/photo/2023/05/07/10/20/airpods-7976095_1280.jpg' },
  { id: 7, name: 'Airconditioner', price: 40000, inStock: true, image: 'https://cdn.pixabay.com/photo/2021/09/08/07/20/air-conditioner-6605973_1280.jpg' },
  { id: 8, name: 'Microwave', price: 20500, inStock: false, image: 'https://cdn.pixabay.com/photo/2022/01/04/05/29/kitchen-6914223_1280.jpg' },
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