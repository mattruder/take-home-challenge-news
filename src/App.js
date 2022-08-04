import logo from './logo.svg';
import './App.css';
import ArticlesAll from './Components/ArticlesAll'
import ArticleFull from './Components/ArticleFull'
import Home from './Components/Home'
import FilteredArticles from './Components/FilteredArticles'
import Filter from './Components/Filter'
import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

function App() {

  const [allArticles, addArticles] = useState(null)
  const [currentArticle, setCurrentArticle] = useState(null)
  const [filteredArticles, filterArticles] = useState(null)
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
      <Link onClick={() => filterArticles(null)} to="/" style={{ textDecoration: 'none', color: 'black' }}>
      <h1>The (Art) News.</h1>
      </Link>
      {allArticles && <Filter allArticles={allArticles} filterArticles={filterArticles} />}
    </div>
    <div className="articles-area">
    <Routes>
      <Route exact path="/" element={allArticles && !filteredArticles && <Home allArticles={allArticles} setCurrentArticle={setCurrentArticle}/>} />
      <Route exact path="/filter" element={filteredArticles && allArticles && <FilteredArticles filteredArticles={filteredArticles} setCurrentArticle={setCurrentArticle}/> } />
      <Route exact path="/articles/:title" element={currentArticle && <ArticleFull article={currentArticle}/>} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
