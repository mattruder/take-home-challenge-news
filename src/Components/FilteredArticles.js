import ArticlesAll from './ArticlesAll'

function FilteredArticles({filteredArticles, setCurrentArticle}) {
  return (
    <div className="articles-area">
      <ArticlesAll allArticles={filteredArticles} setCurrentArticle={setCurrentArticle}/>
    </div>
  )
}

export default FilteredArticles
