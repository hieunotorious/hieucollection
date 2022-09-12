import React, { useState } from "react";
import Link from 'next/link'

function Navbar() {

    return(
        <div className="holder">
            <nav className="navbar bg-brown flex">
                <div className="container flex">
                    <div className="toggler-and-category bg-brown text-white flex">
                        <button type="button" className="btn navbar-show-btn text-white">
                            <i className="fas fa-bars"></i>
                        </button>
                    <div className="category-list">
                        <span>Category</span>
                        <button type="button" className="btn category-toggler-btn text-white">
                            <i className="fas fa-circle-arrow-down"></i>
                        </button>
                    </div>

                    
                    <ul id="side-navbar" className="bg-white text-uppercase">
                        <button type="button" className="btn navbar-hide-btn text-dark">
                            <i className="fas fa-times"></i>
                        </button>
                        <Link href="/index">
                            <a>Home</a>
                        </Link>
                        <Link href="/about">
                            <a>About us</a>
                         </Link>
                        <Link href="/shop">
                            <a>Shop</a>
                        </Link>
                        <Link href="/featured">
                            <a>Featured</a>
                        </Link>
                        <Link href="/signup">
                            <a>Sign up</a>
                         </Link>
                    </ul>


            <ul id="category-list-items" className="bg-white">
              <li><a href="#">MCFARLANE</a></li>
              <li><a href="#">MARVEL LEGEND</a></li>
              <li><a href="#">SHF</a></li>
              <li><a href="#">FIGMA</a></li>
              <li><a href="#">MATTEL</a></li>
              <li><a href="#">STATUE</a></li>
              <li><a href="#">JZAWARES</a></li>
            </ul>

                    </div>   
                    <div className="navbar-collapse flex">
                        <ul className="navbar-nav text-uppercase">
                            <li className="nav-item">
            
                                <Link href='/' className="nav-link active-link">
                                    <span className="nav-link-text">Home</span>
                   
                                 </Link>
                                 
                            </li>

                            <li className="nav-item">
                                <Link href="/about" className="nav-link">
                                    <span className="nav-link-text">About</span>
                                </Link>
                            </li>
              
                            <li className="nav-item">
                                <Link href="/shop" className="nav-link">
                                    <span className="nav-link-text">Shop</span>
                  
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="/signin" className="nav-link">
                                    <span className="nav-link-text">Sign in</span>
                                        
                                </Link>
                            </li> 
                        </ul>
                    </div>    
                </div>
            </nav>

            
                        
        </div>
        
      
    )
}

export default Navbar