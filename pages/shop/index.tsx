import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../../component/Navbar'
import Footer from '../../component/footer'
import StarIcon from '@mui/icons-material/Star';

function shop() {
  return (
    <main>
        <section
          id="new-products"
          className="new-products py bg-light-grey-color-shade"
        >
          <div className="container">
            <div className="section-title text-center">
              <h2>New Arrivals</h2>
              <p className="lead">In stock</p>
              <div className="line"></div>
            </div>

          <div className="featured-deals-content grid">
            <div className="featured-deals-item">
              <div className="image">
                <img src="images/BH.jpeg" />
              </div>
              <div className="info bg-white">
                <div className="ratings text-grey">
                 <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 94.99</span>
                </div>
                <p className="name">
                  Batman: Hush MAFEX No.126 Batman (Black Ver.)
                </p>
              </div>
            </div>

            <div className="featured-deals-item">
              <div className="image">
                <img src="images/nw.jpeg" />
              </div>
              <div className="info bg-white">
                <div className="ratings text-grey">
                  <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 104.99</span>
                </div>
                <p className="name">
                  Batman: Hush MAFEX No.175 Nightwing
                </p>
              </div>
            </div>

            <div className="featured-deals-item">
              <div className="image">
                <img src="images/bw.jpeg" />
              </div>
              <div className="info bg-white">
                <div className="ratings text-grey">
                  <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 104.99</span>
                </div>
                <p className="name">
                  Batman: Hush MAFEX No.170 Huntress
                </p>
              </div>
            </div>

            <div className="featured-deals-item">
              <div className="image">
                <img src="images/hush.jpeg" />
              </div>
              <div className="info bg-white">
                <div className="ratings text-grey">
                  <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 104.99</span>
                </div>
                <p className="name">
                  Batman: Hush MAFEX No.133 Hush
                </p>
              </div>
            </div>

            
            <div className="featured-deals-item">
              <div className="image">
                <img src="images/build.jpeg" />
              </div>
              <div className="info bg-white">
                <div className="ratings text-grey">
               <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                </div>  
                <div className="price">
                  <span className="new text-brown">$ 139.99</span>
                </div>
                <p className="name">
                  Kamen Rider S.H.Figuarts Kamen Rider Build Cross-ZBuild Form Exclusive
                </p>
              </div>
            </div>


            <div className="featured-deals-item">
              <div className="image">
                <img src="images/genius.jpeg" />
              </div>
              <div className="info bg-white">
                <div className="ratings text-grey">
                 <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 34.99</span>
                </div>
                <p className="name">
                  Kamen Rider Build S.H.Figuarts Kamen Rider Build (Genius Form) Exclusive
                </p>
              </div>
            </div>

            <div className="featured-deals-item">
              <div className="image">
                <img src="images/iron.jpeg" />
              </div>
              <div className="info bg-white">
                <div className="ratings text-grey">
                  <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 34.99</span>
                </div>
                <p className="name">Marvel Legends 20th Anniversary Series Iron Man</p>
              </div>
            </div>

            <div className="featured-deals-item">
              <div className="image">
                <img src="images/iron2.jpeg" />
              </div>
              <div className="info bg-white">
                <div className="ratings text-grey">
                 <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 34.99</span>
                </div>
                <p className="name">Marvel Comics 80th Anniversary Marvel Legends Iron Man</p>
              </div>
            </div>


            <div className="featured-deals-item">
              <div className="image">
                <img src="images/brock.jpeg" />
              </div>
              <div className="info bg-white">
                <div className="ratings text-grey">
                   <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 36.99</span>
                </div>
                <p className="name">WWE Ultimate Edition Brock Lesnar</p>
              </div>
            </div>

              <div className="featured-deals-item">
              <div className="image">
                <img src="images/rock.jpeg" />
              </div>
              <div className="info bg-white">
                <div className="ratings text-grey">
                  <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 36.99</span>
                </div>
                <p className="name">WWE Ultimate Edition The Rock Figure</p>
              </div>
            </div>


              <div className="featured-deals-item">
              <div className="image">
                <img src="images/trigger.jpeg" />
              </div>
              <div className="info bg-white">
                <div className="ratings text-grey">
                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 44.99</span>
                </div>
                <p className="name">Ultraman Trigger S.H.Figuarts Ultraman Trigger (Multi Type)</p>
              </div>
            </div>

              <div className="featured-deals-item">
              <div className="image">
                <img src="images/ginga.jpeg" />
              </div>
              <div className="info bg-white">
                <div className="ratings text-grey">
                  <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                </div>
                <div className="price">
                  <span className="new text-brown">$ 132.99</span>
                </div>
                <p className="name">Ultraman S.H.Figuarts Ultraman Ginga Strium Exclusive</p>
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
                <img src="images/bm.jpeg" />
                <div className="category-badge bg-white text-dark flex">
                  The Animated Series Batman and The Batmobile
                </div>
              </div>
              <div className="category-item">
                <img src="images/yj.jpeg" />
                <div className="category-badge bg-white text-dark flex">
                   Revoltech The Joker
                </div>
              </div>
              <div className="category-item">
                <img src="images/wa.jpeg" />
                <div className="category-badge bg-white text-dark flex">
                  Fighting Armor Wolverine
                </div>
              </div>
              <div className="category-item">
                <img src="images/ba.jpeg" />
                <div className="category-badge bg-white text-dark flex">
                  Fighting Armor Black Panther
                </div>
              </div>
              <div className="category-item">
                <img src="images/rj.jpeg" />
                <div className="category-badge bg-white text-dark flex">Revoltech Red Hood</div>
              </div>
              <div className="category-item">
                <img src="images/mai.jpeg" />
                <div className="category-badge bg-white text-dark flex">
                  The King of Fighters 98 Bishoujo Mai Shiranui
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
              <h2>Sale Products</h2>
              <p className="lead">In Stocks</p>
              <div className="line"></div>
            </div>

            <div className="featured-deals-content grid">
              <div className="featured-deals-item">
                <div className="image">
                  <img src="images/nz.jpeg" />
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
                    <span className="old text-grey">$ 29.99</span>
                    <span className="new text-brown">$ 19.00</span>
                  </div>
                  <p className="name">
                    DC Essentials Nightwing (DCeased) Figure
                  </p>
                  
                </div>
              </div>

              <div className="featured-deals-item">
                <div className="image">
                  <img src="images/bz.jpeg" />
                </div>
                <div className="info bg-white">
                <div className="ratings text-grey">
                  <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                  </div>
                  <div className="price">
                    <span className="old text-grey">$ 29.99</span>
                    <span className="new text-brown">$ 19.99</span>
                  </div>
                  <p className="name">
                    DC Essentials Batgirl (DCeased) Figure
                  </p>
                  
                </div>
              </div>

              <div className="featured-deals-item">
                <div className="image">
                  <img src="images/rz.jpeg" />
                </div>
                <div className="info bg-white">
                <div className="ratings text-grey">
                  <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                  </div>
                  <div className="price">
                    <span className="old text-grey">$ 29.99</span>
                    <span className="new text-brown">$ 19.99</span>
                  </div>
                  <p className="name">
                    DC Essentials Unkillables Red Hood (DCeased) Figure
                  </p>
                  
                </div>
              </div>

              <div className="featured-deals-item">
                <div className="image">
                  <img src="images/jz.jpeg" />
                </div>
                <div className="info bg-white">
                <div className="ratings text-grey">
                 <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                                <i className=""><StarIcon style={{fill:"black",fontSize:"10"}} /></i>
                  </div>
                  <div className="price">
                    <span className="old text-grey">$ 29.99</span>
                    <span className="new text-brown">$ 19.99</span>
                  </div>
                  <p className="name">
                    DC Essentials The Joker (DCeased) Figure
                  </p>
                </div>
              </div>
</div>
           </div> 
           
        </section>
</main>
        
      )
}

export default shop