import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCard from '../NewsCard/NewsCard';
import Footer from '../Footer/Footer';
import './SavedNews.css';

function SavedNews({ savedArticles, onDeleteArticle, isLoggedIn, onLoginClick, onLogout }) {
  return (
    <div className="saved-news">
      <SavedNewsHeader
        savedArticles={savedArticles}
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onLogout={onLogout}
      />

      <section className="saved-news__cards">
        {savedArticles.length === 0 ? (
          <p className="saved-news__empty">You haven&apos;t saved any articles yet.</p>
        ) : (
          <ul className="saved-news__grid">
            {savedArticles.map((article) => (
              <li key={article.url} className="saved-news__item">
                <NewsCard
                  article={article}
                  isSaved
                  onSave={() => {}}
                  showDeleteBtn
                  onDelete={onDeleteArticle}
                  keyword={article.keyword}
                />
              </li>
            ))}
          </ul>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default SavedNews;
