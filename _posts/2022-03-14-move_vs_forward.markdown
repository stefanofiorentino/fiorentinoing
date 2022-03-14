---
layout: post
title:  "std::move vs std::forward"
date:   2022-03-14 07:00:00 +0200
categories: modern cpp
---

Pass-by-value and `std::move` is suggested by clang-tidy whenever your function is just a _wrapper_. And that's why I used this idiom in the [pool_type](https://github.com/stefanofiorentino/pool_type.git) playground repository. But during the last [meetup](https://www.meetup.com/lugano-c-meetup/events/283927602/) came out that I can improve it, at least at some extent, by leveraging the _more generic_ `std::forward` instead of `std::move`. That's why, in the following code, both `Connection` and `Listener` are template alias:
```cpp
Connection on(Listener f) noexcept {
    return onL.emplace(onL.cend(), std::move(f));
}
```
So `std::forward` can be leveraged yielding the following code:
```cpp
Connection on(Listener&& f) noexcept {
    return onL.emplace(onL.cend(), std::forward<Listener>(f));
}
```
This is an improvement in performance (verified by [godbolt](https://godbolt.org/)). But I'm not sure about the lifetime safety. I guess if someone is using this _pool_type_ template class passing to the `::on` a **local** instantiation of a `std::function`, it will simply segfault. 

I will talk with the maintainer of [uvw](https://github.com/skypjack/uvw) to understand if this improvement can be ported on the upstream repo too.

<!---
NOTE: The use of `std::forward` is not necessarly yielding the universal reference idiom to be in place. Here for example, `Listener` depends on `E` (i.e., `using Listener = std::function<void(E const&, T &)>;`), so being not a complete template parameter we're still not sure compilers would gracefully accept this.
-->

## Reference
1) https://isocpp.org/blog/2012/11/universal-references-in-c11-scott-meyers
   
2) (https://github.com/stefanofiorentino/pool_type.git
   
3) https://www.meetup.com/lugano-c-meetup/events/283927602/
   
4) https://godbolt.org/