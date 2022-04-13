---
layout: post
title:  "Fold operators"
date:   2022-04-13 07:00:00 +0200
categories: modern cpp
---

A good example of _fold expression_ <sup>[1]</sup> usage is the following. In case you have a member defined as this: 
```cpp
std::tuple<Handler<Events>...> pool;
```
at some point, you'll fall in need of operating on every `Handler<Events>` instance saved in the pool. This is currently very easy to be written leveraging the fold expression as this: 
```cpp
void clear() noexcept {
    std::apply([](auto &&... args) {
        ((args.clear()), ...);
    }, pool);
}
```
This is far shorter than range-loop and `std::for_each`. It costs a bit in readability, though.


## Reference
1) https://en.cppreference.com/w/cpp/language/fold
   
2) https://github.com/stefanofiorentino/pool_type.git