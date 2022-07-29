const cheerio = require("cheerio")
const axios = require("axios")

axios
  .get("https://developer.mozilla.org/de/docs/Web/API/Document")
  .then((response) => {
    const $ = cheerio.load(response.data)

    const items = []
    $(".page-not-created").each(function () {
      if ($(this).siblings().hasClass("icon-nonstandard")) {
        items.push($(this).text())
      }
    })
    items.map((text) => console.log(text))
  })
