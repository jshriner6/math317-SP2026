var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "labs-3",
  "level": "1",
  "url": "labs-3.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 2: Preliminaries",
  "body": " Chapter 2: Preliminaries   \\documentclass{article} \\usepackage{amssymb} \\begin{document} \\title{Math 317: Chapter 2 Portfolio} \\author{Your name here} \\maketitle \\begin{enumerate} \\item[Problem 2.1] Let $A$ be a set. Prove that \\begin{enumerate} \\item $A \\subseteq A$ \\item $\\emptyset \\subseteq A$ \\end{enumerate} \\item[Solution 2.1] Solution here. Signify the end with a QED. \\hfill $\\blacksquare$ \\item[Problem 2.2] Prove that if $A, B,$ and $C$ are sets such that $A \\subseteq B$ and $B \\subseteq C$, then $A \\subseteq C$. \\item[Solution 2.2] \\item[Problem 2.3] Prove that if $A$ and $B$ are sets with $A \\subseteq B$, then $B^c \\subseteq A^c$. \\item[Solution 2.3] \\item[Problem 2.5] Prove that if $A$ and $B$ are sets, then $A \\setminus B = A \\cap B^c$. \\item[Solution 2.5] \\item[Problem 2.6] Give an example where $A \\neq B$, but $A \\setminus B = \\emptyset$. \\item[Solution 2.6] \\end{enumerate} \\end{document}   "
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
