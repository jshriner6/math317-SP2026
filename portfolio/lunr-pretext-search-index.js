var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "labs-3",
  "level": "1",
  "url": "labs-3.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 2: Preliminaries",
  "body": " Chapter 2: Preliminaries   \\documentclass{article} \\usepackage{amssymb} \\begin{document} \\title{Math 317: Chapter 2 Portfolio} \\author{Your name here} \\maketitle \\begin{enumerate} \\item[Problem 2.1] Problem statement here. \\item[Solution 2.1] Solution here. Signify the end with a QED. \\hfill $\\blacksquare$ \\end{enumerate} \\end{document}   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
