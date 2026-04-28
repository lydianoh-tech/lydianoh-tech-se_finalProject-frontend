// src/utils/auth.js

/*const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://put-your-deployed-backend-url-here"
    : "http://localhost:3001";*/

export const register = (username, password, email) => {
  return fetch(`${baseUrl}/auth/local/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, email }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};
