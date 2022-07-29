const cheerio = require("cheerio")
const axios = require("axios")
const prompt = require("prompt-sync")()

axios
  .get("https://developer.mozilla.org/de/docs/Web/API/Document")
  .then((response) => {
    const html = response.data
    const $ = cheerio.load(html)

    const items = []
    $(".page-not-created").each(function () {
      items.push($(this).text())
    })

    const n = prompt("Zahl: ")
    if (n >= 0 && n <= items.length - 1 && n % 1 === 0) {
      console.log(items[n])
    } else {
      console.log("Falscher Input")
    }
  })
