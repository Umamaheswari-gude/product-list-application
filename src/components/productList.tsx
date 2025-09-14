import React from 'react';
import ProductCard from './productCard';
import { Product } from '../types/types'; 
import './productList.css';

const PRODUCTSDATA: Product[] = [
  { id: 1, name: 'Iphone', price: 139000, inStock: true, image: 'https://cdn.pixabay.com/photo/2014/12/10/12/26/iphone-563067_1280.jpg' },
  { id: 2, name: 'Watch', price: 39900, inStock: false, image: 'https://cdn.pixabay.com/photo/2016/11/21/13/58/analog-watch-1845547_1280.jpg'  },
  { id: 3, name: 'Camera', price: 59000, inStock: true, image: 'https://cdn.pixabay.com/photo/2014/11/22/00/51/camera-541213_1280.jpg' },
  { id: 4, name: 'Smartwatch', price: 40000, inStock: true, image: 'https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_1280.jpg' },
  { id: 5, name: 'Headset', price: 8000, inStock: false, image: 'https://cdn.pixabay.com/photo/2019/09/17/21/32/piano-4484621_1280.jpg' },
  { id: 6, name: 'Airpods', price: 30000, inStock: true, image: 'https://cdn.pixabay.com/photo/2023/05/07/10/20/airpods-7976095_1280.jpg' },
  { id: 7, name: 'Airconditioner', price: 40000, inStock: true, image: 'https://cdn.pixabay.com/photo/2021/09/08/07/20/air-conditioner-6605973_1280.jpg' },
  { id: 8, name: 'Microwave', price: 20500, inStock: false, image: 'https://cdn.pixabay.com/photo/2022/01/04/05/29/kitchen-6914223_1280.jpg' },
  { id: 9, name: 'Drone', price: 80000, inStock: false, image: 'https://cdn.pixabay.com/photo/2017/09/10/02/56/technology-2734236_1280.jpg' },
  { id: 10, name: 'Speaker', price: 30000, inStock: true, image: 'https://cdn.pixabay.com/photo/2019/07/02/07/39/bluetooth-4311748_1280.jpg' },
  { id: 11, name: 'Projector', price: 70000, inStock: false, image: 'https://cdn.pixabay.com/photo/2019/08/25/16/51/slide-projector-4429878_1280.jpg' },
  { id: 12, name: 'Webcam', price: 25000, inStock: false, image: 'https://cdn.pixabay.com/photo/2020/04/26/15/42/videoanruf-5095868_1280.jpg' },
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