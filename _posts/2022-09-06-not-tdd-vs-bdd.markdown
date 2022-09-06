---
layout: post
title:  "It's neither about TDD or BDD."
date:   2022-09-06 07:00:00 +0200
categories: modern cpp
---

It's neither about TDD or BDD. And we are not talking about specific paradigm (e.g., OOP vs functional). I guess we agree we need to assert contracts and not implementation details. 

By contract I mean the set of public APIs of your code. 

It's not about classes. If you have a C file with 2 functions exposed by its header and all other functions being "private" to the translation unit, you need to test only these 2 "publicly exposed" functions. 

If any line of code is not reachable from the public APIs, chances are you didn't apply TDD well (or at all).