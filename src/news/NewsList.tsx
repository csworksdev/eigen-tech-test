import React, { useState, useEffect } from 'react';
import axios from 'axios';

type News = {
  title: string;
  description: string;
  url: string;
};

function NewsList() {
  const [news, setNews] = useState<News[]>([]);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  useEffect(() => {
    // Fetch news from the News API using Axios
    axios.get<{ articles: News[] }>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      .then(response => {
        // Set the fetched news to the state
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function handleNewsClick(news: News) {
    // Set the selected news to the state when it's clicked
    setSelectedNews(news);
  }

  return (
    <div>
      {selectedNews ? (
        // If a news article is selected, show its details
        <div>
          <h2>{selectedNews.title}</h2>
          <p>{selectedNews.description}</p>
          <a href={selectedNews.url} target="_blank" rel="noopener noreferrer">Read more</a>
          <button onClick={() => setSelectedNews(null)}>Back to news list</button>
        </div>
      ) : (
        // If no news article is selected, show the list of news
        <ul>
          {news.map(news => (
            <li key={news.title} onClick={() => handleNewsClick(news)}>
              <h2>{news.title}</h2>
              <p>{news.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NewsList;
