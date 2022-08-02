import '../Styles/ArticleFull.css'

function ArticleFull({article}) {



  return (
    <div className="article-full">
      <img src={article.multimedia[1].url} />
      <div className="article-abstract">
      {article.abstract}
      </div>
    </div>
  )
}

export default ArticleFull
