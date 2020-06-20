import { useState, useEffect } from "react";

export function useNews(){
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch('https://finnhub.io/api/v1/news?category=general&token=brmjibvrh5re15om5k70').then(res=>res.json()).then(res => setNews(res));
  }, [])
  
  return news
}