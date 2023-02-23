const apiKey = "289f81960f0969aec52e9047460b106f"
const url = `https://gnews.io/api/v4/search?q=technology&token=${apiKey}`

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const articles = data.articles
    const newsContainer = document.querySelector("#news-container")

    articles.forEach((article) => {
      const newsItem = document.createElement("div")
      newsItem.classList.add("news-item")

      const title = document.createElement("h2")
      title.textContent = article.title

      const image = document.createElement("img")
      image.src = article.image

      const description = document.createElement("p")
      description.textContent = article.description

      const url = document.createElement("a")
      url.href = article.url
      url.textContent = "Leia mais"

      newsItem.appendChild(title)
      newsItem.appendChild(image)
      newsItem.appendChild(description)
      newsItem.appendChild(url)

      newsContainer.appendChild(newsItem)
    })
  })
  .catch((error) => console.log(error))
