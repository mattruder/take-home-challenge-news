import '../Styles/Filter.css'
import { useState  } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Filter({allArticles, filterArticles}) {

  const navigate = useNavigate()

  const [filteredCategory, setCategory] = useState("all")

  const filterCategories = []

  function handleChange(event) {
    setCategory(event.target.value)
  }

  allArticles.map((article) => {
    if(!filterCategories.includes(article.section)) {
      filterCategories.push(article.section)
    }
  })

  const filterDropdownCategories = filterCategories.map((category) => {
    return (
      <option key={category} onSelect={() => setCategory(category)} value={category}>{category}</option>
    )
  })

  console.log(filteredCategory)

  function createFilteredArticles(filteredCategory) {
    console.log(filteredCategory)
    const allFilteredArticles = allArticles.filter((article) => {
      return article.section === filteredCategory
    })
    console.log(allFilteredArticles)
    filterArticles(allFilteredArticles)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(filteredCategory !== "all" ) {
      createFilteredArticles(filteredCategory)
      navigate('/filter')
    }

  }


  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
      <label className="filter-label" htmlFor="art-select">Filter By Category</label>
      <select value={filteredCategory} onChange={(event) => handleChange(event)}name="art-select" id="art-select">
        {filterDropdownCategories}
      </select>
      <input type="submit" value="Filter" />
      </form>
    </div>
  )
}

export default Filter
