const url = `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=765e6d14e97e4d86841a758c39cab2e5
`

axios
  .get(url)
  .then((response) => {
    const articles = response.data.articles
    const table = document
      .getElementById("newsTable")
      .getElementsByTagName("tbody")[0]

    articles.forEach((article) => {
      const row = table.insertRow(-1)
      const sourceCell = row.insertCell(0)
      const titleCell = row.insertCell(1)
      const dateCell = row.insertCell(2)

      sourceCell.innerHTML = article.source.name
      titleCell.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`
      dateCell.innerHTML = new Date(article.publishedAt).toLocaleString()
    })
  })
  .catch((error) => {
    console.error(error)
  })
