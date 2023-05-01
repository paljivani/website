import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'

const Product = () => {
  let [data, setdata] = useState([]);
  let pro = JSON.parse(localStorage.getItem('data')) || [];
  useEffect(() => {
    get();
  }, []);
  let get = async () => {
    let req = await fetch(`https://dummyjson.com/products?pages=1&limit=60`);
    let res = await req.json();
    setdata(res.products)};
    return (
      <div>
        <Header />
              <div className="container product">
                <div className="main">
                  {data.map((v, i) => {
                    return (
                      <Link to={pro.length > 0 ? `/details/${v.id}` : `/signup`} className="product-text">
                        <div key={i}>
                          <div className="box">
                            <div>
                              <img src={v.thumbnail} />
                              <h2>{v.title}</h2>
                              <h3>💲 {v.price}</h3>
                              <p>{v.description}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
        <Footer />
      </div>
    );
  }

export default Product;

