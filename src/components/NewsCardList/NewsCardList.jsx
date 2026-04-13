import { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { MAX_DISPLAY_CARDS } from '../../utils/constants';
import './NewsCardList.css';

function NewsCardList({ articles, savedArticles, onSaveArticle, keyword }) {
  const [visibleCount, setVisibleCount] = useState(MAX_DISPLAY_CARDS);

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  function handleShowMore() {
    setVisibleCount((prev) => prev + MAX_DISPLAY_CARDS);
  }

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <ul className="news-card-list__grid">
        {visibleArticles.map((article) => {
          const isSaved = savedArticles.some((a) => a.url === article.url);
          return (
            <li key={article.url} className="news-card-list__item">
              <NewsCard
                article={article}
                isSaved={isSaved}
                onSave={onSaveArticle}
                keyword={keyword}
              />
            </li>
          );
        })}
      </ul>
      {hasMore && (
        <button
          type="button"
          className="news-card-list__show-more"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
