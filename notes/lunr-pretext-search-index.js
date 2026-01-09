var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "intro",
  "level": "1",
  "url": "intro.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction",
  "body": " Introduction   Why?   We'll be motivated by content and communication:     How?   Our approach to learning real analysis will mimic how mathematicians discover new mathematics:    Attempt 1 (Individual)   Prove that the sum of two odd integers is even.     Attempt 2 (Small Group)   Prove that the sum of two odd integers is even.     Attempt 3 (Large Group)   Prove that the sum of two odd integers is even.      Summary: Our Process   The previous exercise illustrates our process for working through most course content:    "
},
{
  "id": "xr-why",
  "level": "2",
  "url": "intro.html#xr-why",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Why?",
  "body": " Why?   We'll be motivated by content and communication:   "
},
{
  "id": "xr-how",
  "level": "2",
  "url": "intro.html#xr-how",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "How?",
  "body": " How?   Our approach to learning real analysis will mimic how mathematicians discover new mathematics:    Attempt 1 (Individual)   Prove that the sum of two odd integers is even.     Attempt 2 (Small Group)   Prove that the sum of two odd integers is even.     Attempt 3 (Large Group)   Prove that the sum of two odd integers is even.    "
},
{
  "id": "intro-4",
  "level": "2",
  "url": "intro.html#intro-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Summary: Our Process.",
  "body": " Summary: Our Process   The previous exercise illustrates our process for working through most course content:   "
},
{
  "id": "proof",
  "level": "1",
  "url": "proof.html",
  "type": "Worksheet",
  "number": "",
  "title": "Elements of Style for Proof",
  "body": " Elements of Style for Proof   Motivation: Style for Proof        There are proofs of several statements below that assume the following definitions:             A number is even if there exists an integer such that .    A number is odd if there exists an integer such that .     For each proof, identify (with explanation)   the good (is anything done well?),    the bad (is anything mathematically incorrect?),    the ugly (is anything difficult to read\/follow?).             Note       Since the last equality is known to be true, the first equality must also be true.         The sum of two even integers is even.    Let , .   , which is even.         Let . If , then .    Let and . Then clearly .         The square of an odd integer is also odd.    Let be an odd integer. Then for some integer , , which is odd.         Every constant function is a continuous function.    Let be the constant function . Then is a horizontal line at , which can be sketched without picking up your pencil. Therefore, they are continuous.        Summary: Style for Proofs       "
},
{
  "id": "proof-2",
  "level": "2",
  "url": "proof.html#proof-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Motivation: Style for Proof.",
  "body": " Motivation: Style for Proof      "
},
{
  "id": "proof-3-2",
  "level": "2",
  "url": "proof.html#proof-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "good bad ugly "
},
{
  "id": "proof-4",
  "level": "2",
  "url": "proof.html#proof-4",
  "type": "Claim",
  "number": "1",
  "title": "",
  "body": "       Note       Since the last equality is known to be true, the first equality must also be true.      "
},
{
  "id": "proof-5",
  "level": "2",
  "url": "proof.html#proof-5",
  "type": "Claim",
  "number": "2",
  "title": "",
  "body": "  The sum of two even integers is even.    Let , .   , which is even.      "
},
{
  "id": "proof-6",
  "level": "2",
  "url": "proof.html#proof-6",
  "type": "Claim",
  "number": "3",
  "title": "",
  "body": "  Let . If , then .    Let and . Then clearly .      "
},
{
  "id": "proof-7",
  "level": "2",
  "url": "proof.html#proof-7",
  "type": "Claim",
  "number": "4",
  "title": "",
  "body": "  The square of an odd integer is also odd.    Let be an odd integer. Then for some integer , , which is odd.      "
},
{
  "id": "proof-8",
  "level": "2",
  "url": "proof.html#proof-8",
  "type": "Claim",
  "number": "5",
  "title": "",
  "body": "  Every constant function is a continuous function.    Let be the constant function . Then is a horizontal line at , which can be sketched without picking up your pencil. Therefore, they are continuous.      "
},
{
  "id": "proof-9",
  "level": "2",
  "url": "proof.html#proof-9",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Summary: Style for Proofs.",
  "body": " Summary: Style for Proofs      "
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
