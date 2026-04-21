import { useState, useCallback } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "./Main/Main";
import SavedNews from "./SavedNews/SavedNews";
import LoginPopup from "./LoginPopup/LoginPopup";
import RegisterPopup from "./RegisterPopup/RegisterPopup";
import InfoTooltip from "./InfoTooltip/InfoTooltip";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [activePopup, setActivePopup] = useState("");

  const closePopup = useCallback(() => setActivePopup(""), []);

  const handleLoginSubmit = useCallback(
    ({ email }) => {
      // Simulate login — replace with real API call when backend is available
      setCurrentUser({ email, name: email.split("@")[0] });
      setIsLoggedIn(true);
      closePopup();
    },
    [closePopup],
  );

  const handleRegisterSubmit = useCallback((_values) => {
    // Simulate registration — replace with real API call when backend is available
    setActivePopup("info");
  }, []);

  const handleLogout = useCallback(() => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setSavedArticles([]);
  }, []);

  const handleSaveArticle = useCallback(
    (article) => {
      if (!isLoggedIn) {
        setActivePopup("login");
        return;
      }
      setSavedArticles((prev) => {
        const alreadySaved = prev.some((a) => a.url === article.url);
        if (alreadySaved) {
          return prev.filter((a) => a.url !== article.url);
        }
        return [...prev, { ...article, keyword: article.keyword || "" }];
      });
    },
    [isLoggedIn],
  );

  const handleDeleteArticle = useCallback((article) => {
    setSavedArticles((prev) => prev.filter((a) => a.url !== article.url));
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                savedArticles={savedArticles}
                onSaveArticle={handleSaveArticle}
                onLoginClick={() => setActivePopup("login")}
                onLogout={handleLogout}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <SavedNews
                savedArticles={savedArticles}
                onDeleteArticle={handleDeleteArticle}
                isLoggedIn={isLoggedIn}
                onLoginClick={() => setActivePopup("login")}
                onLogout={handleLogout}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {activePopup === "login" && (
          <LoginPopup
            onClose={closePopup}
            onSubmit={handleLoginSubmit}
            onSwitchToRegister={() => setActivePopup("register")}
          />
        )}
        {activePopup === "register" && (
          <RegisterPopup
            onClose={closePopup}
            onSubmit={handleRegisterSubmit}
            onSwitchToLogin={() => setActivePopup("login")}
          />
        )}
        {activePopup === "info" && (
          <InfoTooltip
            onClose={closePopup}
            onSwitchToLogin={() => setActivePopup("login")}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
