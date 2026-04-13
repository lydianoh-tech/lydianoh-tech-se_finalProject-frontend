import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__avatar" aria-hidden="true">
        <span className="about__avatar-initials">NE</span>
      </div>
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          News Explorer is a project built as part of the TripleTen Software
          Engineering program. This frontend application lets you search for the
          latest news articles from around the world using the News API. Simply
          type a keyword into the search box, and the app will fetch and display
          relevant articles published within the last seven days.
        </p>
        <p className="about__text">
          Sign in to save your favorite articles and revisit them later on your
          personal Saved Articles page. All your saved articles are grouped by
          the keyword you used when you saved them.
        </p>
      </div>
    </section>
  );
}

export default About;
