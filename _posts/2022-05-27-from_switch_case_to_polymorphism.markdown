---
layout: post
title:  "From switch-case to polymorphism"
date:   2022-05-27 07:00:00 +0200
categories: modern cpp
---

In the C language, neither function overload and polymorphism are present. So to be able to act polymorphically, you have to define several functions with different names (or leverage the type erasure technique).

Here is a simple code that is aiming to perform a specific action given the type name (here represented as a string).

```cpp
namespace details {
std::string print_foo() { return "char* details::print_foo()"; }
std::string print_bar() { return "char* details::print_bar()"; }
} // namespace details

std::string perform_action_based_on_type(std::string const &action_to_perform) {
  if ("foo" == action_to_perform) {
    return details::print_foo();
  } else if ("bar" == action_to_perform) {
    return details::print_bar();
  }
}

TEST(from_switch_case_to_polymorphism, C_style_polymorphism) {
  ASSERT_EQ("char* details::print_foo()", perform_action_based_on_type("foo"));
  ASSERT_EQ("char* details::print_bar()", perform_action_based_on_type("bar"));
}
```

In the C++ language, this same code can be translated into the following: 
```cpp
class base {
protected:
  virtual std::string do_print() const = 0;

public:
  std::string print() const { return do_print(); }
};
class foo : public base {
  std::string do_print() const override { return details::print_foo(); }
};

class bar : public base {
  std::string do_print() const override { return details::print_bar(); }
};

std::shared_ptr<base> factory(std::string const &action_to_perform) {
  if ("foo" == action_to_perform) {
    return std::make_shared<foo>();
  } else if ("bar" == action_to_perform) {
    return std::make_shared<bar>();
  }
}

TEST(from_switch_case_to_polymorphism, Cpp_style_polymorphism) {
  ASSERT_EQ("char* details::print_foo()", factory("foo")->print());
  ASSERT_EQ("char* details::print_bar()", factory("bar")->print());
}
```

Here the call to the action t oobe performed is easier. The factory method here acts as a type selector. Given the result of this factory method, the function call, from the callee point of view, is exaclty the same.

This is the only reflection currently available in cpp, kind-of.

NOTE: if the smart_ptr and the NVI pattern disturbs your understanding, just let me know.

## Reference
1) https://github.com/stefanofiorentino/experimental/blob/develop/test/from_switch_case_to_polymorphism.cpp
