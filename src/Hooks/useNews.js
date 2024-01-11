import React, { useEffect, useState } from 'react';

function useNews({ country, category, postSize, qry }) {

  const [news, setNews] = useState(null);

  console.log(news)
  console.log(qry)

  const API_KEY = import.meta.env.VITE_API_KEY
  console.log(API_KEY)

  
  useEffect(() => {

    const api = qry ? `https://newsapi.org/v2/everything?q=${qry}&apiKey=${API_KEY}&page=1&pageSize=${postSize}` : `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&page=1&pageSize=${postSize}`

      fetch(api) 
    // console.log(api)
        .then((response) => {
          console.log(response)

          if (response.ok) {
            return response.json();  // This returns a promise
          } else {
            throw new Error('Network response was not ok.');
          }
        })

        .then((data) => {

          // console.log(data.totalResults)
          setNews(data);
          console.log(data)
          // console.log(data)
          console.log(data.articles);

        })

        .catch((err) => console.log('Error:', err));

  }, [category, postSize]);  // The empty dependency array ensures that this effect runs only once

  return news;
}

export default useNews;
