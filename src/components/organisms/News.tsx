import React from 'react';
import { useNews } from 'src/hooks/useNews';
import NewsCard from '../molecules/NewsCard';
import { Flex } from '@chakra-ui/core';

const News = () => {
  const news = useNews();
  return (
    <div>
      <Flex flexWrap="wrap">
      {news.map((newsItem: any) => {
        return (
          <NewsCard key={newsItem.id} {...newsItem} imageUrl={newsItem.image} imageAlt={newsItem.headline} />
        )
      })}
      </Flex>
    </div>
  );
};

export default News;