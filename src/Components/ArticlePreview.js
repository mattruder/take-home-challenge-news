import { Link } from 'react-router-dom'
import '../Styles/ArticlePreview.css'

function ArticlePreview({article, setCurrentArticle}) {
  return (
    <div className="article-preview">
      <Link to={`/articles/${article.title}`} onClick={() => setCurrentArticle(article)}>
      <h3>{article.title}</h3>
      </Link>
      <img src={article.multimedia[2].url} />
      <hr></hr>
    </div>
  )
}

export default ArticlePreview
