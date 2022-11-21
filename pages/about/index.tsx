import React from "react";
import link from "next/link";
import Header from "../../component/Navbar";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

function About() {
  return (
    <section
      className="featured-deals bg-light-grey-color-shade py"
      id="featured-deals"
    >
      <div style={{ minHeight: 900 }} className="container">
        <div className="section-title text-center">
          <h2>About</h2>
          <p className="lead">About Us</p>
          <div className="line"></div>
        </div>

        <div className="text-center">
          <p className="about-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
            enim iure. Architecto magnam iure recusandae dolorem quibusdam at
            placeat, odio ratione magni labore laborum sunt alias similique
            perferendis officia omnis!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
