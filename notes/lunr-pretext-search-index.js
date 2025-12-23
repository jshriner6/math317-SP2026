var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "intro",
  "level": "1",
  "url": "intro.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction and Setting the Stage",
  "body": " Introduction and Setting the Stage    Why?   Linear algebra provides the language and tools for:     How?  Our approach to learning linear algebra will include the following aspects:    Setting the Stage   On the grid below, you may only move vertically\/horizontally, and you must move exactly 2 spaces at a time. In groups, determine if it is possible to begin on the \"start\" square and end on the \"finish\" square.   Grid with 5 rows and 4 columns. The upper left square is labeled with \"Start\" and and bottom right square is labeled with \"Finish\".        Two more grids   Repeate the previous task for the two grids below    Grid with 5 rows and 4 columns. The upper left square is labeled with \"Start\" and and the square in row 3 column 4 is labeled with \"Finish\".    Grid with 5 rows and 5 columns. The upper left square is labeled with \"Start\" and and bottom right square is labeled with \"Finish\".       "
},
{
  "id": "xr-why",
  "level": "2",
  "url": "intro.html#xr-why",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Why?",
  "body": " Why?   Linear algebra provides the language and tools for:   "
},
{
  "id": "xr-how",
  "level": "2",
  "url": "intro.html#xr-how",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "How?",
  "body": " How?  Our approach to learning linear algebra will include the following aspects:  "
},
{
  "id": "xr-set-stage",
  "level": "2",
  "url": "intro.html#xr-set-stage",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Setting the Stage.",
  "body": " Setting the Stage   On the grid below, you may only move vertically\/horizontally, and you must move exactly 2 spaces at a time. In groups, determine if it is possible to begin on the \"start\" square and end on the \"finish\" square.   Grid with 5 rows and 4 columns. The upper left square is labeled with \"Start\" and and bottom right square is labeled with \"Finish\".    "
},
{
  "id": "xr-set-stage2",
  "level": "2",
  "url": "intro.html#xr-set-stage2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Two more grids.",
  "body": " Two more grids   Repeate the previous task for the two grids below    Grid with 5 rows and 4 columns. The upper left square is labeled with \"Start\" and and the square in row 3 column 4 is labeled with \"Finish\".    Grid with 5 rows and 5 columns. The upper left square is labeled with \"Start\" and and bottom right square is labeled with \"Finish\".     "
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
