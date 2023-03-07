import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, List } from 'antd';

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
    <div style={{margin: "48px"}}>
      {selectedNews ? (
        // If a news article is selected, show its details
        <div >
          <h2>{selectedNews.title}</h2>
          <p>{selectedNews.description}</p>
          <a href={selectedNews.url} target="_blank" rel="noopener noreferrer">Read more</a>
          <button onClick={() => setSelectedNews(null)}>Back to news list</button>
        </div>
      ) : (
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={news}
          renderItem={(item) => (
            <List.Item onClick={() => handleNewsClick(item)}>
              <Card title={item.title}>{item.description}</Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
}

export default NewsList;
