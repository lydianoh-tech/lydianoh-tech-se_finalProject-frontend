import { useState } from "react";
import "./SearchForm.css";

function SearchForm({
  chips,
  isLoggedIn,
  currentUser,
  isSearching,
  onAuthOpen,
  onChipClick,
  onInfoOpen,
  onQueryChange,
  onSearch,
  onSignOut,
  query,
}) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = keyword.trim();
    if (!trimmed) {
      setError("Please enter a keyword");
      return;
    }
    setError("");
    onSearch(trimmed);
  }

  return (
    <section className="search">
      <h1 className="search__title">What&apos;s going on in the world?</h1>
      <p className="search__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <input
          id="news-search"
          className="search__input"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter topic"
          required
          aria-label="Search keyword"
        />
        <button className="search__btn" type="submit">
          {isSearching ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className="search__error">{error}</p>}
    </section>
  );
}

export default SearchForm;
