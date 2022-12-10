import React, { useContext, useEffect, useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import { useResponsive } from "app/hooks/useResponsive";
import { DefaultProduct } from "app/api/auth/data";
import { padding } from "@mui/system";
import { shuffle } from "lodash";
import { css } from "@emotion/react";
import { Button, ButtonGroup, Image } from "@chakra-ui/react";
import {
  AllType,
  BrandType,
  CategoryType,
  ProductType,
} from "app/api/auth/models/product";
import Link from "next/link";
import Section from "app/component/Section";
import useTranslation from "next-translate/useTranslation";
function Home() {
  const [products, setProduct] = useState(DefaultProduct);
  const [newProducts, setNewProducts] = useState(DefaultProduct);
  const [saleProducts, setSaleProducts] = useState(DefaultProduct);
  const [preProducts, setPreProducts] = useState(DefaultProduct);
  const { isMobile } = useResponsive();
  const { t } = useTranslation();
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
      <div>
        <div className="new-product-item">
          <div
            css={css`
              overflow: hidden;
              img {
                object-fit: cover;
              }
              &:hover img {
                scale: 1.2;
              }
            `}
            className="image"
            style={{ height: 280 }}
          >
            <Image
              style={{ transition: "all 300ms ease-in-out" }}
              src={item.img}
              alt=""
            />
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
            <ButtonGroup spacing="2">
              <Link href="/checkout">
                <Button variant="solid" colorScheme="blue">
                  {t("buy_now")}
                </Button>
              </Link>
              <Link href="/cart">
                <Button variant="ghost" colorScheme="blue">
                  {t("add_to_cart")}
                </Button>
              </Link>
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Section />

      <main>
        <section
          id="new-products"
          className="new-products py bg-light-grey-color-shade"
        >
          <div className="container">
            <div className="section-title text-center">
              <h2>{t("top_new_products")}</h2>
              <p className="lead">{t("in_stock")}</p>
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
              <h2>{t("top_sale_products")}</h2>
              <p className="lead">{t("in_stock")}</p>
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
              <h2>{t("top_pre_order_products")}</h2>
              <p className="lead">{t("in_stock")}</p>
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
              <h2>{t("latest_news")}</h2>
              <p className="lead">{t("information_about_upcoming_prodcuts")}</p>
              <div className="line"></div>
            </div>

            <div className="latest-news-content grid">
              <article className="latest-news-item bg-white">
                <div className="top">
                  <Image alt="" src="images/MIS.jpeg" />
                  <div className="author">
                    <Image alt="" src="images/MIS2.jpeg" />
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
                  <Image alt="" src="images/MDL.jpeg" />
                  <div className="author">
                    <Image alt="" src="images/MDL2.jpeg" />
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
                  <Image src="images/m.jpeg" alt="" />
                  <div className="author">
                    <Image src="images/m2.jpeg" alt="" />
                  </div>
                </div>
                <div className="body">
                  <span className="date">Brand NEW line coming in 2022</span>
                  <h3 className="title text-uppercase">PAGE PUNCHERS</h3>
                  <p className="text">
                    Comic figure for only $9.99. Check out this SNEAK PEEK from
                    Todd McFarlane of what’s coming this year!
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
              <h2>{t("feedback")}</h2>
              <p className="lead">{t("your_thought_about_us")}</p>
              <div className="line"></div>
            </div>

            <div className="feedback-inner">
              <div className="feedback-container grid">
                <div className="feedback-item bg-white text-center" data-id="1">
                  <Image src="images/f22.jpeg" className="quote-icon" alt="" />
                  <p className="text text-grey">
                    Absolutely the best Batman action figure I’ve ever seen or
                    owned. Arrived in perfect condition and you can’t beat the
                    price at $20 for the quality you get.
                  </p>
                  <div className="client">
                    <Image src="images/f1.jpeg" alt="" />
                  </div>
                </div>

                <div
                  className="feedback-item bg-white text-center"
                  data-id="2"
                  id="feedback-display"
                >
                  <Image alt="" src="images/f11.jpeg" className="quote-icon" />
                  <p className="text text-grey">
                    Japanese. Definitely worth the price compared to the chinese
                    fakes. Tamashii nations is legit
                  </p>
                  <div className="client">
                    <Image alt="" src="images/f2.jpeg" />
                  </div>
                </div>

                <div className="feedback-item bg-white text-center" data-id="3">
                  <Image alt="" src="images/f33.jpeg" className="quote-icon" />
                  <p className="text text-grey">
                    WARNING: Small parts may be generated. Not for children
                    under 3 years.
                  </p>
                  <div className="client">
                    <Image alt="" src="images/f3.jpeg" />
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
            <h2>{t("comment")}</h2>
            <p className="lead">{t("would_you_like_to_tell_us_about??")}</p>
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
