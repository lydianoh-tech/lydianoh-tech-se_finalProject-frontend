import Navigation from "../Navigation/Navigation";
import "./Footer.css";

function Footer() {
  const navigationItems = [
    { key: "home", label: "Home", to: "/", end: true },
    {
      key: "tripleten",
      label: "TripleTen",
      href: "https://tripleten.com",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <div className="footer__right">
        <Navigation
          className="footer__nav"
          items={navigationItems}
          itemClassName="footer__nav-link"
        />
        <div className="footer__social">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            <svg
              className="footer__social-icon"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            <svg
              className="footer__social-icon"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0 1.432C0 .641.657 0 1.468 0h17.064C19.343 0 20 .641 20 1.432v17.136C20 19.359 19.343 20 18.532 20H1.468C.657 20 0 19.359 0 18.568V1.432zM6.007 16.8V7.717H3.01V16.8h2.997zm-1.498-10.31c1.044 0 1.694-.692 1.694-1.557-.02-.883-.65-1.557-1.675-1.557-1.025 0-1.694.674-1.694 1.557 0 .865.65 1.557 1.655 1.557h.02zm5.63 10.31v-5.07c0-.27.02-.539.099-.731.217-.538.71-1.096 1.54-1.096 1.087 0 1.52.83 1.52 2.044V16.8h2.997v-4.985c0-2.773-1.48-4.062-3.454-4.062-1.619 0-2.33.905-2.723 1.52H9.14V7.717H6.142c.04.846 0 9.083 0 9.083h2.997z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
