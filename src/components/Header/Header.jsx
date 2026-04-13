import { Link, useLocation } from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import './Header.css';

function Header({ isLoggedIn, onLoginClick, onLogout, isSearchPage = true }) {
  const { currentUser } = useCurrentUser();
  const { pathname } = useLocation();

  return (
    <header className={`header ${isSearchPage ? 'header_theme_dark' : ''}`}>
      <div className="header__content">
        <Link to="/" className="header__logo">
          NewsExplorer
        </Link>
        <nav className="header__nav">
          <Link
            to="/"
            className={`header__nav-link${pathname === '/' ? ' header__nav-link_active' : ''}`}
          >
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                to="/saved-news"
                className={`header__nav-link${pathname === '/saved-news' ? ' header__nav-link_active' : ''}`}
              >
                Saved articles
              </Link>
              <button
                type="button"
                className="header__nav-btn header__nav-btn_outlined"
                onClick={onLogout}
              >
                {currentUser?.name || 'Log out'}
              </button>
            </>
          ) : (
            <button
              type="button"
              className="header__nav-btn"
              onClick={onLoginClick}
            >
              Sign in
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
