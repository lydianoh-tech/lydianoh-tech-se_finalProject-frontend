import {
  NEWS_API_BASE_URL,
  SEARCH_PAGE_SIZE,
  SEARCH_DAYS_RANGE,
} from "./constants";
import { VITE_NEWS_API_KEY } from "./constants.js";

function getDateRange() {
  const toDate = new Date();
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - SEARCH_DAYS_RANGE);

  const format = (d) => d.toISOString().split("T")[0];
  return { from: format(fromDate), to: format(toDate) };
}

export function searchNews(keyword) {
  const { from, to } = getDateRange();

  const url = new URL(`${NEWS_API_BASE_URL}/everything`);
  url.searchParams.set("q", keyword);
  url.searchParams.set("from", from);
  url.searchParams.set("to", to);
  url.searchParams.set("pageSize", SEARCH_PAGE_SIZE);
  url.searchParams.set("sortBy", "relevancy");
  url.searchParams.set("language", "en");
  url.searchParams.set("apiKey", VITE_NEWS_API_KEY);

  return fetch(url.toString()).then((res) => {
    if (!res.ok) {
      return res.json().then((data) => {
        throw new Error(data.message || "Failed to fetch news");
      });
    }
    return res.json();
  });
}
