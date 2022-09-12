import React from 'react'
import Head from 'next/head'
import Navbar from '../component/Navbar'
import Footer from '../component/footer'
import link from 'next/link'
import Image from 'next/image'


function index() {
  return (
    <div className=''>
    <header className="header bg-light-brown flex" id="home">
        <div className="container">
          <div className="header-content grid text-center">
            <div className="header-left">
              <h1>HIEUCOLLECTION</h1>
              <p className="text">
                Action figures, Statue, Collectibles, and More!
              </p>
              <a href="shop" className="btn-header text-white bg-brown">shop now</a>
            </div>

            <div className="header-right">
              <img src="images/hieu2.jpeg" 
                    alt=''
              />
            </div>
            <img src="images/hieu3.jpeg" className="header-shape" />
          </div>
        </div>
      </header>       

        <main>
        <section
                id="new-products"
                className="new-products py bg-light-grey-color-shade"
            >
                <div className='container'>
                <div className='section-title text-center'>
                    <h2>Top new products</h2>
                    <p className="lead">In stock.</p>
                    <div className="line"></div>
                </div>
                <div className='new-products-content grid'>
                    <div className='new-product-item'>
                        <div className='image'>
                        <img src="images/NS.jpeg" alt="" />
                        </div>
                        <div className='info'>
                            <div className='ratings test-grey'>
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <span>(10 Reviews)</span>
                            </div>
                            <div className='price'>
                                <span className='new text-amber-900'>$ 24.99</span>
                            </div>
                            <p className='name'>
                            Spider-Man Marvel Legends Series 6-inch Symbiote Action
                            Figure Toy
                            </p>
                        </div>
                    </div>

                    <div className='new-product-item'>
                        <div className='image'>
                        <img src="images/NB.jpeg" alt="" />
                        </div>
                        <div className='info'>
                            <div className='ratings test-grey'>
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <span>(10 Reviews)</span>
                            </div>
                            <div className='price'>
                                <span className='new text-amber-900'>$ 24.99</span>
                            </div>
                            <p className='name'>
                            Spider-Man Marvel Legends Series 6-inch Symbiote Action
                            Figure Toy
                            </p>
                        </div>
                    </div>

                    <div className='new-product-item'>
                        <div className='image'>
                        <img src="images/NJ.jpeg" alt="" />
                        </div>
                        <div className='info'>
                            <div className='ratings test-grey'>
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <span>(10 Reviews)</span>
                            </div>
                            <div className='price'>
                                <span className='new text-amber-900'>$ 24.99</span>
                            </div>
                            <p className='name'>
                            Spider-Man Marvel Legends Series 6-inch Symbiote Action
                            Figure Toy
                            </p>
                        </div>
                    </div>

                    <div className='new-product-item'>
                        <div className='image'>
                        <img src="images/ND.jpeg" alt="" />
                        </div>
                        <div className='info'>
                            <div className='ratings test-grey'>
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-brown"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <i className="fas fa-star text-light-grey"></i>
                                <span>(10 Reviews)</span>
                            </div>
                            <div className='price'>
                                <span className='new text-amber-900'>$ 24.99</span>
                            </div>
                            <p className='name'>
                            Spider-Man Marvel Legends Series 6-inch Symbiote Action
                            Figure Toy
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section
          id="sale-products"
          className="sale-products py bg-light-grey-color-shade"
        >
          <div className="container">
            <div className="section-title text-center">
              <h2>top sale products</h2>
              <p className="lead">In stock.</p>
              <div className="line"></div>
            </div>

            <div className="sale-products-content grid">
              <div className="sale-product-item">
                <div className="image">
                  <img src="images/goku.jpeg" alt="" />
                  <span
                    className="badge bg-brown text-white text-center text-uppercase"
                    >sale</span
                  >
                </div>
                <div className="info">
                  <div className="ratings text-grey">
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <span>(90 Reviews)</span>
                  </div>
                  <div className="price">
                    <span className="old text-grey">$ 50.00</span>
                    <span className="new text-brown">$ 35.00</span>
                  </div>
                  <p className="name">
                    Tamashii Nations S.H. Figuarts Ultra Instinct Son Goku Dragon Ball Super
                  </p>
                  
                </div>
              </div>

              <div className="sale-product-item">
                <div className="image">
                  <img src="images/loki.jpeg" alt="" />
                  <span
                    className="badge bg-brown text-white text-center text-uppercase"
                    >sale</span
                  >
                </div>
                <div className="info">
                <div className="ratings text-grey">
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <span>(5 Reviews)</span>
                  </div>
                  <div className="price">
                    <span className="old text-grey">$ 24.99</span>
                    <span className="new text-brown">$ 22.00</span>
                  </div>
                  <p className="name">
                    Marvel Legends Series Loki Agent of Asgard 6-inch Retro
                  </p>
                  
                </div>
              </div>

              <div className="sale-product-item">
                <div className="image">
                  <img src="images/randy.jpeg" alt="" />
                  <span
                    className="badge bg-brown text-white text-center text-uppercase"
                    >sale</span
                  >
                </div>
                <div className="info">
                <div className="ratings text-grey">
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <span>(18 Reviews)</span>
                  </div>
                  <div className="price">
                    <span className="old text-grey">$ 21.00</span>
                    <span className="new text-brown">$ 15.00</span>
                  </div>
                  <p className="name">
                    WWE Randy Orton Elite Collection Action Figure, Series # 90
                  </p>
                  
                </div>
              </div>

              <div className="sale-product-item">
                <div className="image">
                  <img src="images/batman.jpeg" alt="" />
                  <span
                    className="badge bg-brown text-white text-center text-uppercase"
                    >sale</span
                  >
                </div>
                <div className="info">
                <div className="ratings text-grey">
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <span>(30 Reviews)</span>
                  </div>
                  <div className="price">
                    <span className="old text-grey">$ 35.00</span>
                    <span className="new text-brown">$ 30.00</span>
                  </div>
                  <p className="name">
                    McFarlane Multiverse The Batman from Batman Movie  Deluxe
                    Figure
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="category py bg-light-brown" id="category">
        
        <div className="container">
          <div className="section-title text-center">
            <h2> Product Images</h2>
           
            
          </div>
        <div className="container">
          <div className="category-content grid">
            <div className="category-item">
              <img src="images/stargirl.jpeg" />
              <div className="category-badge bg-white text-dark flex">
                  StarGirl
              </div>
            </div>
            <div className="category-item">
              <img src="images/2.jpeg" />
              <div className="category-badge bg-white text-dark flex">
                Spiderman 2099
              </div>
            </div>
            <div className="category-item">
              <img src="images/3.jpeg" />
              <div className="category-badge bg-white text-dark flex">
                Songoku Super saiyan 4
              </div>
            </div>
            <div className="category-item">
              <img src="images/4.jpeg" />
              <div className="category-badge bg-white text-dark flex">
                Songoku Raised on Earth
              </div>
            </div>
            <div className="category-item">
              <img src="images/5.jpeg" />
              <div className="category-badge bg-white text-dark flex"> Gojo Satoru</div>
            </div>
            <div className="category-item">
              <img src="images/psy.jpeg" />
              <div className="category-badge bg-white text-dark flex">
                Psylocke
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section
        className="featured-deals bg-light-grey-color-shade py"
        id="featured-deals"
      >
        <div className="container">
          <div className="section-title text-center">
            <h2>featured Pre-orders</h2>
            <p className="lead">Featured Pre-Orders List</p>
            <div className="line"></div>
          </div>

          <div className="featured-deals-content grid">
            <div className="featured-deals-item">
              <div className="image">
                <img src="images/Pgoku.jpeg" />
              </div>
              <div className="info bg-white">
                <div className="ratings text-grey">
                <div className="ratings text-grey">
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 59.99</span>
                </div>
                <p className="name">
                  Dragon Ball Super S.H.Figuarts Super Saiyan God Super Saiyan
                  Gogeta
                </p>
                
              </div>
            </div>
          </div>
            <div className="featured-deals-item">
              <div className="image">
                <img src="images/Pbat.jpeg" />
              </div>
              <div className="info bg-white">
              <div className="ratings text-grey">
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 174.99</span>
                </div>
                <p className="name">
                  The Batman 1/10 Art Scale Limited Edition Statue
                </p>
                
              </div>
            </div>

            <div className="featured-deals-item">
              <div className="image">
                <img src="images/Pbroly.jpeg" />
              </div>
              <div className="info bg-white">
              <div className="ratings text-grey">
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 83.99</span>
                </div>
                <p className="name">
                  Dragon Ball Super S.H.Figuarts Super Saiyan Broly (Full
                  Power)
                </p>
                
              </div>
            </div>

            <div className="featured-deals-item">
              <div className="image">
                <img src="images/spider.jpeg" />
              </div>
              <div className="info bg-white">
              <div className="ratings text-grey">
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-brown"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                    <i className="fas fa-star text-light-grey"></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 94.99</span>
                </div>
                <p className="name">Avengers: Endgame S.H.Figuarts Iron Spider (Final Battle Edition)</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

 

      <section
        className="latest-news bg-light-grey-color-shade py"
        id="latest-news"
      >
        <div className="container">
          <div className="section-title text-center">
            <h2>latest news</h2>
            <p className="lead">Information about upcoming prodcuts.</p>
            <div className="line"></div>
          </div>

          <div className="latest-news-content grid">
            <article className="latest-news-item bg-white">
              <div className="top">
                <img src="images/MIS.jpeg" />
                <div className="author">
                  <img src="images/MIS2.jpeg" />
                </div>
              </div>
              <div className="body">
                <span className="date">Posted January 20, 2022</span>
                <h3 className="title text-uppercase">
                  New Marvel Legends Iron Spider
                </h3>
                <p className="text">
                  We have a single figure preview from Hasbro Pulse showing
                  off
                  <span>...</span>
                </p>
              </div>
              <div className="bottom" >
                <a href="#" className="text-uppercase">read more</a>
              </div>
            </article>

            <article className="latest-news-item bg-white">
              <div className="top">
                <img src="images/MDL.jpeg" />
                <div className="author">
                  <img src="images/MDL2.jpeg" />
                </div>
              </div>
              <div className="body">
                <span className="date">Posted August 2, 2022</span>
                <h3 className="title text-uppercase">
                  Monkey. D. Luffy joins the ultimate action figure series!
                </h3>
                <p className="text">
                  Clothing covers the upper bodys joints, for an appearance
                  so natural youd mistake it for a sculpture!
                  <span>...</span>
                </p>
              </div>
              <div className="bottom" >
                <a href="#" className="text-uppercase">read more</a>
              </div>
            </article>

            <article className="latest-news-item bg-white">
              <div className="top">
                <img src="images/m.jpeg" />
                <div className="author">
                  <img src="images/m2.jpeg" />
                </div>
              </div>
              <div className="body">
                <span className="date">Brand NEW line coming in 2022</span>
                <h3 className="title text-uppercase">PAGE PUNCHERS</h3>
                <p className="text">
                  Comic  figure for only $9.99. Check out this SNEAK PEEK
                  from Todd McFarlane of what’s coming this year!<span
                    >...</span
                  >
                </p>
              </div>
              <div className="bottom" >
                <a href="#" className="text-uppercase">read more</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="feedback py bg-light-grey-color-shade" id="feedback">
        <div className="container">
          <div className="section-title text-center">
            <h2>Feedback</h2>
            <p className="lead">Your thought about us.</p>
            <div className="line"></div>
          </div>

          <div className="feedback-inner">
            <div className="feedback-container grid">
              <div className="feedback-item bg-white text-center" data-id="1">
                <img src="images/f22.jpeg" className="quote-icon" />
                <p className="text text-grey">
                  Absolutely the best Batman action figure I’ve ever seen or
                  owned. Arrived in perfect condition and you can’t beat the
                  price at $20 for the quality you get.
                </p>
                <div className="client">
                  <img src="images/f1.jpeg" />
                </div>
              </div>

              <div
                className="feedback-item bg-white text-center"
                data-id="2"
                id="feedback-display"
              >
                <img src="images/f11.jpeg" className="quote-icon" />
                <p className="text text-grey">
                  Japanese. Definitely worth the price compared to the chinese
                  fakes. Tamashii nations is legit
                </p>
                <div className="client">
                  <img src="images/f2.jpeg" />
                </div>
              </div>

              <div className="feedback-item bg-white text-center" data-id="3">
                <img src="images/f33.jpeg" className="quote-icon" />
                <p className="text text-grey">
                  WARNING: Small parts may be generated. Not for children
                  under 3 years.
                </p>
                <div className="client">
                  <img src="images/f3.jpeg" />
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-btns flex">
            <button className="feedback-btn feedback-active-btn"></button>
            <button className="feedback-btn"></button>
            <button className="feedback-btn"></button>
          </div>
        </div>
      </section>
    </main>

<section className = "newsletter py bg-light-grey-color-shade" id = "newsletter">
              <div className = "container">
                  <div className = "section-title text-center">
                      <h2>COMMENT</h2>
                      <p className = "lead">Would you like to tell us about??</p>
                      <div className = "line"></div>
                  </div>

                  <div className = "newsletter-content">
                      <form>
                          <div className = "input-group flex">
                              <input type = "email" className = "form-control bg-light-grey" />
                              <button type = "submit" className = "btn bg-dark text-white text-uppercase">subscribe</button>
                          </div>
                      </form>
                  </div>
              </div>
          </section>

            
    </div>
 
  )
}

export default index