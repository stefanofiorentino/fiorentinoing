---
layout: post
title:  "Push switch-cases at the edge."
date:   2022-09-08 07:00:00 +0200
categories: modern cpp
---

The only place where conditionals can be accepted is at the edge of your application, 
everywhere else polymorphism is the way to go.

Whenever you find a conditional in your code, you can replace it with a polymorphic action.
You can do it by pushing to the edge of your application this conditional, i.e., the selection of the action to be performed. Chances are you can reuse this same (brand-new) action again and again in other places.


This video is where I started thinking about this: https://youtube.com/watch?v=os6ssw1qylU&feature=share

#polymorphism #software #continuousintegration
