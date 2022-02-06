---
layout: post
title:  "Erase-remove idiom"
date:   2022-02-16 18:00:00 +0200
categories: modern cpp
---
If you're are working with a C++ STL container, chances are at some point you'll need to _delete_ some entries.
Here is the idiom you usually want to implement to both remove the entries from the collection and cancel (i.e., erase) their content (C++20 provides better solution for this).
```
std::vector<int> v = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
...
v.erase(std::remove(v.begin(), v.end(), 5), v.end());
```

Did you know `std::unique` has similar behaviors? That is, you need to erase the _duplicates_ by yourself.


References

1) Meyers, Scott (2001). Effective STL : 50 specific ways to improve your use of the standard template library
2) https://en.wikipedia.org/wiki/Erase%E2%80%93remove_idiom


For the more formal readers: 

1) https://eel.is/c++draft/alg.remove
2) https://eel.is/c++draft/alg.unique