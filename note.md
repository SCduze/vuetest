VUE NOTE
========

# 核心知识

> 这是对vue核心的一些笔记

#### 响应的数据绑定
* 当数据发生改变 -> 自动更新视图
* 利用Object.definedProperty中的setter/getter代理数据，监控对数据的操作（这也是为什么不支持ie8的原因，es5）

#### 组合的数据
