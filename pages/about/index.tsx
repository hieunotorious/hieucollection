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
        <div>
          <div className="conternt"></div>
          <p style={{ fontSize: "1rem", lineHeight: 2 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
