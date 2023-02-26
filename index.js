const API_KEY = "D4Py7ztFBmGOpnKh9c-w0UG-2yqFI0WQ43SkUfa0aOk"
const URL = `https://api.newscatcherapi.com/v2/search?q=noticias&lang=pt&sort_by=relevancy&page=1`

fetch(URL, { headers: { "x-api-key": API_KEY } })
  .then((response) => response.json())
  .then((data) => {
    const noticias = data.articles
    const divNoticias = document.getElementById("news")
    noticias.forEach((noticia) => {
      const { title, link, pubDate } = noticia
      const pTitulo = document.createElement("p")
      const aLink = document.createElement("a")
      const pData = document.createElement("p")
      pTitulo.textContent = title
      aLink.href = link
      aLink.textContent = link
      pData.textContent = pubDate
      divNoticias.appendChild(pTitulo)
      divNoticias.appendChild(aLink)
      divNoticias.appendChild(pData)
    })
  })
  .catch((error) => console.error(error))
