---
layout: post
title:  "Fold expressions"
date:   2022-03-22 07:00:00 +0200
categories: modern cpp
---
Did you ever wonder when to use a fold expression? Here is a very simple example where fold expressions are really useful.
Imagine to have a _variadic_ `pool` variable defined like this: 
```cpp
std::tuple<Handler<Events>...> pool;
```
and you want to know if every event handler is _empty_. Than you can apply this fold expression in a _variadic_ way to all the event handlers owned by the pool at once (at least by the programmer point of view).
```cpp
[[nodiscard]] bool empty() const noexcept {
    auto empty{true};
    std::apply([&empty](auto const&... args) {
        ((empty &= args.empty()), ...);
    }, pool);
    return empty;
}
```
Is this the optimal way to perform such an action?
## Reference
1) https://eel.is/c++draft/expr.prim.fold
   
2) https://isocpp.org/files/papers/n4295.html