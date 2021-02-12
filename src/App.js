import React, {useEffect, useState} from 'react';
import {Grid} from "@material-ui/core";
import {CardContent} from "./components";
import axios from "axios";

function App() {

  let url = 'http://newsapi.org/v2/top-headlines?' +
          'country=br&' +
          'apiKey=a3f95c6548384898b17c4d2a437a324c';

  const [articles, setArticles] = useState([]);

  const getNoticias = async () => {
    try{
      const data = await axios.get(url);
      setArticles(data.data.articles);
    }catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getNoticias();
  }, [])

  const viewArticle = (url) => {
    window.location.href = url;
  }

  return (
    <div>
      <Grid container>
        {articles.map((item, index) => (
        <Grid item md={4}>
          <CardContent heading={item.title} subtitle={item.author} paragraph={item.description} titleButton="Ver notícia" onClick={() => viewArticle(item.url)} />
        </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;