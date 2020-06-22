import React, { useContext, useEffect, useState } from 'react';
import NewsCard from '../molecules/NewsCard';
import { Flex } from '@chakra-ui/core';
import fetchCompanyNews from '../../services/fetchCompanyNews';
import { ActiveCompany } from '../../context/ActiveCompanyContext';

const FALLBACK_IMAGE = 'https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=d03WAFvJ'
const News = () => {
  const { stockName } = useContext(ActiveCompany)
  const [news, setNews] = useState([])
  useEffect(() => {
    fetchCompanyNews(stockName).then(setNews)
  }, [stockName])
  return (
    <div>
      <Flex flexWrap="wrap">
      {news.slice(0,20).map((newsItem: any) => {
        return (
          <NewsCard key={newsItem.id} {...newsItem} imageUrl={newsItem.image || FALLBACK_IMAGE} imageAlt={newsItem.headline} />
        )
      })}
      </Flex>
    </div>
  );
};

export default News;