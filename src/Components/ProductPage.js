// ProductsPage.js
import React from 'react';
import Product from './Product';
import product1Image from '../image/dearsu.webp';
import product2Image from '../image/manifest.jpg';
import product3Image from '../image/doepicshit.jpg';
import product4Image from '../image/whenudie.jpg';
import product5Image from '../image/TheAlchemistBook1.webp'

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10, image: product1Image },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20, image: product2Image },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 20, image: product3Image },
  { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 20, image: product4Image },
  { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 20, image: product5Image }

];

const ProductsPage = ({ addToCart }) => {
  return (
    <div className="container">
      <h2 className="my-4">Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-6 col-lg-4 mb-4">
            <Product {...product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
