import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import NewsList from '../src/news/NewsList';

jest.mock('axios');

const mockNews = [
  {
    title: 'Mock News 1',
    description: 'This is the first mock news',
    url: 'http://mocknews.com/1',
  },
  {
    title: 'Mock News 2',
    description: 'This is the second mock news',
    url: 'http://mocknews.com/2',
  },
];

describe('NewsList', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { articles: mockNews } });
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<NewsList />);
  });

  test('renders a list of news articles', async () => {
    const newsItems = await screen.findAllByRole('listitem');
    expect(newsItems).toHaveLength(2);

    const firstNewsItem = newsItems[0];
    expect(firstNewsItem).toHaveTextContent('Mock News 1');
    expect(firstNewsItem).toHaveTextContent('This is the first mock news');

    const secondNewsItem = newsItems[1];
    expect(secondNewsItem).toHaveTextContent('Mock News 2');
    expect(secondNewsItem).toHaveTextContent('This is the second mock news');
  });

  test('clicking a news article shows its details', async () => {
    const newsItem = await screen.findByText('Mock News 1');
    fireEvent.click(newsItem);

    const newsTitle = await screen.findByText('Mock News 1');
    const newsDescription = await screen.findByText('This is the first mock news');
    const newsLink = screen.getByRole('link', { name: 'Read more' });

    expect(newsTitle).toBeInTheDocument();
    expect(newsDescription).toBeInTheDocument();
    expect(newsLink).toHaveAttribute('href', 'http://mocknews.com/1');
  });
});
