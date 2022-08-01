import logo from './logo.svg';
import './App.css';
import ArticlesAll from './Components/ArticlesAll'
import { useState, useEffect } from 'react'

function App() {

  const [allArticles, addArticles] = useState([])
  const apiKey = 'TwP3k9RevRuGPfTGnqYZzp6GjPdYnFlv'

  useEffect() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`)
      .then(response => response.json())
      .then(data => addArticles(data.results))
      .catch(error => console.log(error))
  }

  return (
    <div className="App">
    <div className="header">
      <h1>The News.</h1>
    </div>
    <div className="news-scroll-container">
      {allArticles && <ArticlesAll allArticles={allArticles}/>}
    </div>
    </div>
  );
}

export default App;
