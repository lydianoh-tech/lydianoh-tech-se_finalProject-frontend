import { useState, useCallback } from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import About from "../../About/About";
import Footer from "../Footer/Footer";
import { searchNews } from "../../../utils/NewsApi";
import "./Main.css";

function Main({
  isLoggedIn,
  savedArticles,
  onSaveArticle,
  onLoginClick,
  onLogout,
}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSearch = useCallback((kw) => {
    setKeyword(kw);
    setIsLoading(true);
    setHasSearched(true);
    setSearchError("");
    setArticles([]);

    searchNews(kw)
      .then((data) => {
        setArticles(data.articles || []);
      })
      .catch((err) => {
        setSearchError(
          err.message || "Something went wrong. Please try again.",
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="main">
      <div className="main__hero">
        <Header
          isLoggedIn={isLoggedIn}
          onLoginClick={onLoginClick}
          onLogout={onLogout}
          isSearchPage
        />
        <SearchForm onSearch={handleSearch} isLoading={isLoading} />
      </div>

      {isLoading && <Preloader />}

      {!isLoading && hasSearched && searchError && (
        <section className="main__error">
          <p className="main__error-text">{searchError}</p>
        </section>
      )}

      {!isLoading && hasSearched && !searchError && articles.length === 0 && (
        <NothingFound />
      )}

      {!isLoading && articles.length > 0 && (
        <NewsCardList
          articles={articles}
          savedArticles={savedArticles}
          onSaveArticle={onSaveArticle}
          keyword={keyword}
        />
      )}

      <About />
      <Footer />
    </div>
  );
}

export default Main;
