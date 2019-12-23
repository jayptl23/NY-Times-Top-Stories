import React, {useState, useEffect} from 'react';
import Article from './components/Article';
import Header from './components/Header';
import './App.css';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [focus, setFocus] = useState("world");
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${focus}.json?api-key=${API_KEY}`)
    .then(response => response.json())
    .then(data => setArticles(data.results.slice(0,5)));
  }, [focus])

  const changeFocus = (e) => {
    setFocus(e.target.text.toLowerCase());
  }

  return (
    <div className="app">
      <Header focus={focus} changeFocus={changeFocus}/>
      <div className="container">
        {articles && articles.map((article, index) => (
          <Article key={index} article={article}/>
        ))}
      </div>
    </div>
  );
}

export default App;
