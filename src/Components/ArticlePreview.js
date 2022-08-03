import { Link } from 'react-router-dom'
import '../Styles/ArticlePreview.css'

function ArticlePreview({article, setCurrentArticle}) {
  return (
    <div className="article-preview">
      <div className="article-title">
      <Link to={`/articles/${article.title}`} style={{ color: 'black' }} onClick={() => setCurrentArticle(article)}>
      <h3>{article.title}</h3>
      </Link>
      </div>
      <div className="article-img">
      <img src={article.multimedia[2].url} />
      </div>
      <hr></hr>
    </div>
  )
}

export default ArticlePreview
