import Header from '../Header/Header';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

function SavedNewsHeader({ savedArticles, isLoggedIn, onLoginClick, onLogout }) {
  const { currentUser } = useCurrentUser();

  const keywords = Array.from(
    new Set(savedArticles.map((a) => a.keyword).filter(Boolean))
  );

  const keywordSummary =
    keywords.length === 0
      ? 'No keywords'
      : keywords.length <= 2
      ? keywords.join(', ')
      : `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} other${keywords.length - 2 > 1 ? 's' : ''}`;

  return (
    <div className="saved-news-header">
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onLogout={onLogout}
        isSearchPage={false}
      />
      <div className="saved-news-header__content">
        <p className="saved-news-header__eyebrow">Saved articles</p>
        <h1 className="saved-news-header__title">
          {currentUser?.name
            ? `${currentUser.name}, you have ${savedArticles.length} saved article${savedArticles.length !== 1 ? 's' : ''}`
            : `${savedArticles.length} saved article${savedArticles.length !== 1 ? 's' : ''}`}
        </h1>
        {savedArticles.length > 0 && (
          <p className="saved-news-header__keywords">
            By keywords:{' '}
            <strong>{keywordSummary}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default SavedNewsHeader;
