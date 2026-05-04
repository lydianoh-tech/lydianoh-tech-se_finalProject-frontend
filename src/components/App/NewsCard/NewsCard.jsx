import { useState } from "react";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import "./NewsCard.css";

function NewsCard({
  article,
  isSaved,
  onSave,
  showDeleteBtn = false,
  onDelete,
  keyword,
}) {
  const { isLoggedIn } = useCurrentUser();
  const [showTooltip, setShowTooltip] = useState(false);

  const { urlToImage, publishedAt, source, title, description, url } = article;

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  function handleSaveClick() {
    onSave({ ...article, keyword });
  }

  function handleDeleteClick() {
    onDelete(article);
  }

  return (
    <article className="news-card">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="news-card__link"
        aria-label={title}
      >
        {urlToImage && (
          <img
            src={urlToImage}
            alt={title}
            className="news-card__image"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        )}
        <div className="news-card__content">
          <p className="news-card__date">{formattedDate}</p>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__description">{description}</p>
          <p className="news-card__source">{source?.name}</p>
        </div>
      </a>

      {!showDeleteBtn && (
        <div
          className="news-card__save-wrapper"
          onMouseEnter={() => !isLoggedIn && setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {!isLoggedIn && showTooltip && (
            <span className="news-card__tooltip">Sign in to save articles</span>
          )}
          <button
            type="button"
            className={`news-card__save-btn${isSaved ? " news-card__save-btn_saved" : ""}`}
            onClick={handleSaveClick}
            aria-label={isSaved ? "Remove from saved" : "Save article"}
          >
            <span className="news-card__save-icon" />
          </button>
        </div>
      )}

      {showDeleteBtn && (
        <>
          <div className="news-card__keyword-badge">{keyword}</div>
          <button
            type="button"
            className="news-card__delete-btn"
            onClick={handleDeleteClick}
            aria-label="Delete article"
          >
            <span className="news-card__delete-icon" />
          </button>
        </>
      )}
    </article>
  );
}

export default NewsCard;
