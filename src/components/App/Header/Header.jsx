import { Link } from "react-router-dom";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, onLoginClick, onLogout, isSearchPage = true }) {
  const { currentUser } = useCurrentUser();
  const navigationItems = [
    { key: "home", label: "Home", to: "/", end: true },
    ...(isLoggedIn
      ? [{ key: "saved-news", label: "Saved articles", to: "/saved-news" }]
      : []),
  ];

  return (
    <header className={`header ${isSearchPage ? "header_theme_dark" : ""}`}>
      <div className="header__content">
        <Link to="/" className="header__logo">
          NewsExplorer
        </Link>
        <div className="header__nav">
          <Navigation
            className="header__nav-links"
            items={navigationItems}
            itemClassName="header__nav-link"
            activeItemClassName="header__nav-link_active"
          />
          {isLoggedIn ? (
            <button
              type="button"
              className="header__nav-btn header__nav-btn_outlined"
              onClick={onLogout}
            >
              {currentUser?.name || "Log out"}
            </button>
          ) : (
            <button
              type="button"
              className="header__nav-btn"
              onClick={onLoginClick}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
