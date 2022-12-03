function About() {
  return (
    <section
      style={{
        padding: "5rem 0",
        background: "var(--light-grey-color-shade)",
        gap: "3rem",
      }}
    >
      <div style={{ minHeight: 900, margin: "0 auto", padding: "0 1rem" }}>
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
