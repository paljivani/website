import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="row1 header">
      <div className="logo">
      </div>
      <nav>
        <div className="row1">
                <Link to='/' className='header-text'>Home</Link>
                <Link to='/About' className='header-text'>About-us</Link>
                 <Link to='/Product' className='header-text'>Product</Link>
        </div>
      </nav>
      
    </div>
  );
}
