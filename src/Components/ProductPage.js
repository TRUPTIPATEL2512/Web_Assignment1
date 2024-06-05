import React from 'react';
import Product from './Product';
import product1Image from '../image/dearsu.webp';
import product2Image from '../image/manifest.jpg';
import product3Image from '../image/doepicshit.jpg';
import product4Image from '../image/whenudie.jpg';
import product5Image from '../image/TheAlchemistBook1.webp';

const products = [
  { id: 1, name: 'Dear STRANGER, YOU DESERVE TO BE LOVED', description: 'Whatever may be the reason, love is what we all demand, and love is what we all want. But very often, we find ourselves without love. Some of us have lost love, some of us have lost ourselves in love and some of us dont believe in love. And for so many of us, it is worse because we dont feel we deserve to be loved.', price: 25, image: product1Image },
  { id: 2, name: 'MANIFEST', description: 'The author emphasizes that acknowledging and understanding your fears is the first step in conquering them. She then offers practical exercises and techniques to help readers reframe their thought patterns, build self-confidence, and silence the inner critic, ultimately clearing the way to manifest their dreams. of Product 2', price: 45, image: product2Image },
  { id: 3, name: 'DO EPIC SHIT 3', description: '"Do Epic Shit" is a compelling guide that encourages us to push boundaries, shatter limitations, and achieve greatness in every aspect of our lives. It is not just a book;it is a roadmap to personal growth and success.', price: 35, image: product3Image },
  { id: 4, name: 'WHO WILL CRY WHEN YOU DIE', description: 'Who Will Cry When You Die?  by Robin Sharma is a book that suggests practical and inspiring ways to live a fulfilling life. The book offers advice on how to live with purpose, passion, and prosperity. It is a guide for self-improvement and personal transformation.', price: 25, image: product4Image },
  { id: 5, name: 'THE ALCHEMIST', description: 'What is The Alchemist about? The Alchemist (1988) follows the story of a young Andalusian shepherd, who travels to the pyramids of Egypt to find a treasure he has recurrently dreamed about. On his journey, he has to overcome multiple obstacles – through which he learns valuable life lessons.', price: 50, image: product5Image }
];

const ProductsPage = ({ addToCart }) => {
  return (
    <div className="container">
      <h2 className="my-4">Products</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map(product => (
          <div key={product.id} className="col">
            <Product {...product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
