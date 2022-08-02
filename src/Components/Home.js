import ArticlesAll from './ArticlesAll'
import '../Styles/Home.css'


function Home({allArticles, setCurrentArticle}) {
  return (
    <div className="articles-area">
      <ArticlesAll allArticles={allArticles} setCurrentArticle={setCurrentArticle}/>
    </div>
  )
}

export default Home
