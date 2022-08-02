import logo from './logo.svg';
import './App.css';
import ArticlesAll from './Components/ArticlesAll'
import ArticleFull from './Components/ArticleFull'
import Home from './Components/Home'
import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

function App() {

  const [allArticles, addArticles] = useState(null)
  const [currentArticle, setCurrentArticle] = useState(null)
  const apiKey = 'TwP3k9RevRuGPfTGnqYZzp6GjPdYnFlv'

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`)
      .then(response => response.json())
      .then(data => addArticles(data.results))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
      <h1>The (Art) News.</h1>
      </Link>
    </div>
    <Routes>
      <Route exact path="/" element={allArticles && <Home allArticles={allArticles} setCurrentArticle={setCurrentArticle}/>} />
      <Route exact path="/articles/:title" element={currentArticle && <ArticleFull article={currentArticle}/>} />
    </Routes>
    </div>
  );
}

export default App;
