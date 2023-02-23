const apiKey = "765e6d14e97e4d86841a758c39cab2e5"
const apiUrl = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}` // substitua "br" pelo código do país desejado

const newsDiv = document.getElementById("news")

// Adicione o código abaixo ao final do arquivo script.js
window.addEventListener("load", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const articles = data.articles
      newsDiv.innerHTML = ""
      articles.forEach((article) => {
        const articleDiv = document.createElement("div")
        const title = document.createElement("h2")
        const description = document.createElement("p")
        const url = document.createElement("a")

        title.innerText = article.title
        description.innerText = article.description
        url.innerText = "Read More"
        url.href = article.url
        url.target = "_blank"

        articleDiv.appendChild(title)
        articleDiv.appendChild(description)
        articleDiv.appendChild(url)
        newsDiv.appendChild(articleDiv)
      })
    })
    .catch((error) => console.log(error))
})
