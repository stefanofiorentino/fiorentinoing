---
layout: post
title:  "Safely remove uncovered code"
date:   2022-09-10 18:00:00 +0200
categories: modern cpp testing
---
What if part of your codebase cannot be covered by tests?

If a line of code is not reachable by testing the public APIs of your system or library, chances are you didn’t apply test-driven development well (or at all).

Do yourself a favour and (safely) remove the code.

Clarification: by "cannot be covered" I don't mean "is not covered".

#cpp #software #continuousintegration
