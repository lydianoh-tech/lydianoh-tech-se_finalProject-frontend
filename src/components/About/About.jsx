import "./About.css";
import myPHOTO from "../../assets/my-photo.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-section__container">
        <div className="about-section__portrait">
          <img
            src={myPHOTO}
            alt="Lydia Noh"
            className="about-section__portrait-image"
          />
        </div>

        <div className="about-section__content">
          <h2 className="about-section__author">About the author</h2>
          <p className="about-section__text">
            My name is Lydia Noh, and I am a Computer Science student at the
            University of Maryland Global Campus (UMGC) and a software developer
            with a strong interest in full-stack web development and cloud
            technologies. I am currently building my skills to become a
            well-rounded software engineer, with hands-on experience in both
            frontend and backend development. I have worked with a variety of
            technologies, including JavaScript, React, Node.js, Express,
            MongoDB, PostgreSQL, as well as tools like Git, REST APIs, and
            JSON-based data systems. I am also familiar with Java, C++, Python,
            network security, and SQL, and I continue to expand my knowledge in
            software engineering principles, system design, and scalable
            application development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
