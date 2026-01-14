var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "labs-3",
  "level": "1",
  "url": "labs-3.html",
  "type": "Section",
  "number": "",
  "title": "Chapter 2: Preliminaries",
  "body": " Chapter 2: Preliminaries   \\documentclass{article} \\usepackage{amssymb} \\begin{document} \\title{Math 317: Chapter 2 Portfolio} \\author{Your name here} \\maketitle \\begin{enumerate} \\item[Problem 2.1] Let $A$ be a set. Prove that \\begin{enumerate} \\item $A \\subseteq A$ \\item $\\emptyset \\subseteq A$ \\end{enumerate} \\item[Solution 2.1] Solution here. Signify the end with a QED. \\hfill $\\blacksquare$ \\item[Problem 2.2] Prove that if $A, B,$ and $C$ are sets such that $A \\subseteq B$ and $B \\subseteq C$, then $A \\subseteq C$. \\item[Solution 2.2] \\item[Problem 2.3] Prove that if $A$ and $B$ are sets with $A \\subseteq B$, then $B^C \\subseteq A^C$. \\item[Solution 2.3] \\item[Problem 2.5] Prove that if $A$ and $B$ are sets, then $A \\setminus B = A \\cap B^C$. \\item[Solution 2.5] \\item[Problem 2.6] Give an example where $A \\neq B$, but $A \\setminus B = \\emptyset$. \\item[Solution 2.6] \\item[Problem 2.7] Let $\\{A_n\\}_{n=1}^{26}$ be the collection discussed previously. Find \\begin{enumerate} \\item $\\displaystyle \\bigcup_{n=1}^{26}A_n$ \\item $\\displaystyle \\bigcap_{n=1}^{26}A_n$ \\end{enumerate} \\item[Solution 2.7] \\item[Problem 2.8] For each $r \\in \\mathbb{Q}$, let $N_r = \\mathbb{R} \\setminus \\{r\\}$. Find \\begin{enumerate} \\item $\\displaystyle \\bigcup_{r \\in \\mathbb{Q}}N_r$ \\item $\\displaystyle \\bigcap_{r \\in \\mathbb{Q}}N_r$ \\end{enumerate} \\item[Solution 2.8] \\item[Problem 2.9] Draw a Venn diagram of a collection of three sets that are pairwise disjoint. \\item[Solution 2.9] \\item[Problem 2.10] Provide an example of a collection of three sets $\\{A_1, A_2, A_3\\}$ that are \\textit{not} pairwise disjoint, but $\\displaystyle \\bigcap_{n=1}^3 A_n = \\emptyset$. \\item[Solution 2.10] \\item[Problem 2.11] Find a collection of nonempty sets $S_i \\subseteq \\mathbb{N}$ indexed by $i \\in \\mathbb{N}$ such that $S_{i+1} \\subsetneq S_i$ and $\\displaystyle \\bigcap_{i=1}^{\\infty} S_i = \\emptyset$. \\item[Solution 2.11] \\item[Problem 2.12] Find a collection of nonempty sets $S_i \\subseteq \\mathbb{N}$ indexed by $i \\in \\mathbb{N}$ such that $S_{i} \\subsetneq S_{i+1}$ and $\\displaystyle \\bigcup_{i=1}^{\\infty} S_i \\neq \\mathbb{N}$. \\item[Solution 2.12] \\item[Problem 2.13] Let $\\{A_\\alpha\\}_{\\alpha \\in \\Delta}$ be a collection of sets. Prove \\textit{one} of the following. \\begin{enumerate} \\item $\\left[ \\displaystyle \\bigcup_{\\alpha \\in \\Delta} A_\\alpha\\right]^C = \\displaystyle \\bigcap_{\\alpha \\in \\Delta} A_\\alpha^C$ \\item $\\left[ \\displaystyle \\bigcap_{\\alpha \\in \\Delta} A_\\alpha\\right]^C = \\displaystyle \\bigcup_{\\alpha \\in \\Delta} A_\\alpha^C$ \\end{enumerate} \\item[Solution 2.13] \\item[Problem 2.14] Let $\\{A_\\alpha\\}_{\\alpha \\in \\Delta}$ be a collection of sets and let $B$ be any set. Prove \\textit{one} of the following. \\begin{enumerate} \\item $B \\cup \\left[ \\displaystyle \\bigcap_{\\alpha \\in \\Delta} A_\\alpha\\right] = \\displaystyle \\bigcap_{\\alpha \\in \\Delta}(B\\cup A_\\alpha)$ \\item $B \\cap \\left[ \\displaystyle \\bigcup_{\\alpha \\in \\Delta} A_\\alpha\\right] = \\displaystyle \\bigcup_{\\alpha \\in \\Delta} (B \\cap A_\\alpha)$ \\end{enumerate} \\item[Solution 2.14] \\item[Problem 2.16] If $A$ is a set, what is $A \\times \\emptyset$ equivalent to? \\item[Solution 2.16] \\item[Problem 2.17] Given sets $A$ and $B$, when does $A \\times B = B \\times A$? \\item[Solution 2.17] \\end{enumerate} \\end{document}   "
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
