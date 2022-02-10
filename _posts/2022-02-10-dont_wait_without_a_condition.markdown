---
layout: post
title:  "Don’t wait without a condition"
date:   2022-02-10 14:00:00 +0200
categories: modern cpp
---
# Don’t wait without a condition

A wait without a condition can miss a wakeup or wake up simply to find that there is no work to do <sup>[1]</sup>.

What you need to know (or remember) is that also `std::timed_mutex::try_lock_for` _is allowed to fail spuriously and return false even if the mutex was not locked by any other thread at some point during timeout_duration_ <sup>[2]</sup>.

## Reference
1) https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#cp42-dont-wait-without-a-condition
2) https://en.cppreference.com/w/cpp/thread/timed_mutex/try_lock_for