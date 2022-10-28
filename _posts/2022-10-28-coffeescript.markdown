---
layout: post
title:  "CoffeeScript is not that bad"
date:   2022-10-28 07:00:00 +0200
categories: javascript
---
Back in 2014, I had the chance to investigate a little bit the CoffeeScript language. You know what? I just met it again after years thanks to learnxinyminutes.com and here is a good example of why coffeescript (and other languages like TypeScript) should be used instead of plain vanilla Javascript (maybe if you're not experienced enough).

Existence test like:

`alert "I knew it!" if elvis?`

becomes (transpiled):

`if(typeof elvis !== "undefined" && elvis !== null) { alert("I knew it!"); }`

#javascript #languages #computerscience
