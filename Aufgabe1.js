const cheerio = require("cheerio")
const axios = require("axios")

axios
  .get("https://developer.mozilla.org/de/docs/Web/API/Document")
  .then((response) => {
    $ = cheerio.load(response.data)

    const items = []
    $(".page-not-created").each(function () {
      items.push($(this).text())
    })
    items.map((text) => console.log(text))
  })
