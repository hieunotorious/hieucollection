import React, { useEffect, useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import { useResponsive } from "app/hooks/useResponsive";
import { DefaultProduct } from "app/api/auth/data";
import { padding } from "@mui/system";
import { shuffle } from "lodash";
import {
  AllType,
  BrandType,
  CategoryType,
  ProductType,
} from "app/api/auth/models/product";
import Link from "next/link";

function Home() {
  const [products, setProduct] = useState(DefaultProduct);
  const [newProducts, setNewProducts] = useState(DefaultProduct);
  const [saleProducts, setSaleProducts] = useState(DefaultProduct);
  const [preProducts, setPreProducts] = useState(DefaultProduct);
  const { isMobile } = useResponsive();

  useEffect(() => {
    setNewProducts(
      shuffle(
        DefaultProduct.filter((item, index) => {
          return item.all === AllType.new;
        })
      ).slice(0, 4)
    );
    setSaleProducts(
      shuffle(
        DefaultProduct.filter((item, index) => {
          return item.all === AllType.sale;
        })
      ).slice(0, 4)
    );
    setPreProducts(
      shuffle(
        DefaultProduct.filter((item, index) => {
          return item.all === AllType.pre_order;
        })
      ).slice(0, 4)
    );
  }, [products]);

  const renderProducts = (item: ProductType, index: number) => {
    const ratingStars = new Array(item.rating).fill(0);

    return (
      <div className="new-product-item">
        <div className="image" style={{ height: 280 }}>
          <img src={item.img} alt="" />
        </div>
        <div className="info">
          <div
            className="ratings test-grey"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ display: "flex", width: 60 }}>
              {ratingStars.map((value, index) => {
                return (
                  <StarIcon
                    key={index}
                    style={{ fill: "black", fontSize: "10" }}
                  />
                );
              })}
            </div>

            <span>({item.review} Reviews)</span>
          </div>
          <div className="price">
            <span className="new text-amber-900">${item.price}</span>
          </div>
          <p className="name">{item.name}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <header
        style={{
          display: "grid",
          paddingTop: "1rem",
          lineHeight: "1.6",
          rowGap: "13rem",
          position: "relative",
          overflow: "hidden",
          minHeight: "730px",
        }}
        className="header bg-light-brown flex"
        id="home"
      >
        <div
          style={{
            maxWidth: "calc 1145+20 ",
            margin: "0 auto",
            padding: "0 1rem",
            textAlign: "center",
            lineHeight: 1.6,
            paddingTop: "10rem",
            paddingBottom: "1.2rem",
            display: "grid",
          }}
        >
          <div
            style={{
              paddingTop: 0,
              maxWidth: "100%",
              display: "grid",
              gridTemplateColumns: "40% 60%",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <h1
                style={{
                  opacity: 0.9,
                  fontSize: "4.5rem",
                  lineHeight: 1.6,
                }}
              >
                HIEUCOLLECTION
              </h1>
              <p
                style={{
                  lineHeight: 2,
                  opacity: 0.8,
                  fontWeight: 400,
                  textTransform: "uppercase",
                  fontSize: "1.6rem",
                }}
              >
                Action figures, Statue, Collectibles, and More!
              </p>
              <div
                style={{
                  textTransform: "uppercase",
                  fontWeight: 700,
                  padding: "1.4rem 4.2rem",
                  borderRadius: " 1rem",
                  textAlign: "center",
                  lineHeight: 1,
                  display: "inline-block",
                  cursor: "pointer",
                  backgroundColor: "white",
                }}
              >
                <Link href="/product">shop now</Link>
              </div>
            </div>

            <div style={{ width: "100%", position: "relative" }}>
              <img
                style={{
                  position: "absolute",
                  top: "-25%",
                  right: "50%",
                  width: "80%",
                  transform: "translateX(50%)",
                }}
                src="images/hieu2.jpg"
                alt=""
              />
              <img src="images/hieu3.jpeg" style={{}} />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section
          id="new-products"
          className="new-products py bg-light-grey-color-shade"
        >
          <div className="container">
            <div className="section-title text-center">
              <h2>Top new products</h2>
              <p className="lead">In stock.</p>
              <div className="line"></div>
            </div>
            <div className="new-products-content grid">
              {newProducts.map(renderProducts)}
            </div>
          </div>
        </section>

        <section
          id="sale-products"
          className="sale-products py bg-light-grey-color-shade"
        >
          <div className="container">
            <div className="section-title text-center">
              <h2>Top Sale products</h2>
              <p className="lead">In stock.</p>
              <div className="line"></div>
            </div>
            <div className="sale-products-content grid">
              {saleProducts.map(renderProducts)}
            </div>
          </div>
        </section>
        <section
          id="pre-products"
          className="pre-products py bg-light-grey-color-shade"
        >
          <div className="container">
            <div className="section-title text-center">
              <h2>Top Pre-Order products</h2>
              <p className="lead">In stock.</p>
              <div className="line"></div>
            </div>
            <div
              style={{
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "3rem",
                padding: "5rem 0",
              }}
              className="pre-products-content grid"
            >
              {preProducts.map(renderProducts)}
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
                <div className="bottom">
                  <a href="#" className="text-uppercase">
                    read more
                  </a>
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
                    Clothing covers the upper bodys joints, for an appearance so
                    natural youd mistake it for a sculpture!
                    <span>...</span>
                  </p>
                </div>
                <div className="bottom">
                  <a href="#" className="text-uppercase">
                    read more
                  </a>
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
                    Comic figure for only $9.99. Check out this SNEAK PEEK from
                    Todd McFarlane of what’s coming this year!<span>...</span>
                  </p>
                </div>
                <div className="bottom">
                  <a href="#" className="text-uppercase">
                    read more
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="feedback py bg-light-grey-color-shade"
          id="feedback"
        >
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

      <section
        className="newsletter py bg-light-grey-color-shade"
        id="newsletter"
      >
        <div className="container">
          <div className="section-title text-center">
            <h2>COMMENT</h2>
            <p className="lead">Would you like to tell us about??</p>
            <div className="line"></div>
          </div>

          <div className="newsletter-content">
            <form>
              <div className="input-group flex">
                <input type="email" className="form-control bg-light-grey" />
                <button
                  type="submit"
                  className="btn bg-dark text-white text-uppercase"
                >
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
