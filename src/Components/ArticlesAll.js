import ArticlePreview from './ArticlePreview'
import ArticleFull from './ArticleFull'
import { Link } from 'react-router-dom'
import '../Styles/ArticlesAll.css'

function ArticlesAll({allArticles, setCurrentArticle}) {

  const articles = allArticles.map((article) => {
    return (
      <div key={article.title}>
      <ArticlePreview article={article} setCurrentArticle={setCurrentArticle} />
      </div>
    )
  })

  return (
    <div className='articles-scroll'>
      {articles}
    </div>
  )

}

export default ArticlesAll
