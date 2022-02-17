---
layout: post
title:  "Custom type traits"
date:   2022-02-17 7:00:00 +0200
categories: modern cpp
---
# Write your own type traits

There is an old but fascinating way to bind feature implementation to types. This is tag dispatching and it is almost everywhere in codebases.

For example if you want to manage different kind of messages under the (apparentyl) same signature, you can write your own `type_trait` as the following:

```cpp
template<typename __Message>
struct message_traits
{
    typedef typename __Message::message_category message_category;
};
```

This allows you to write the caller code in a uniform way, i.e.,
```cpp
mqtt_message_t mqtt_message;
...
notify(mqtt_message);
```

To be able to do this, you need to define a tag type as `struct mqtt_message_tag{};` and your type to be manageable by the type_traits should declare a message category as a public type definition:
```cpp
struct mqtt_message_t final
{
    typedef mqtt_message_tag message_category;
};
```

And your `notify` function will look something like:
```cpp
namespace details
{
    inline void notify_dispatch(std::string const &notification, boilerplate::mqtt_message_tag)
    {
        // implementation details
    }
}
template<class __Message>
void notify(__Message const &message)
{
    typedef typename message_traits<__Message>::message_category category;
    details::notify_dispatch(message.getMessage(), category());
}
```

## Reference
1) https://github.com/stefanofiorentino/message_traits/blob/master/libs/dispatcher/include/message_traits.hpp
2) https://www.fluentcpp.com/2018/04/27/tag-dispatching/