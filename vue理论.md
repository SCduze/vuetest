VUE NOTE
========

## 核心知识

> 这是对vue核心的一些笔记

#### 响应的数据绑定
* 当数据发生改变 -> 自动更新视图
* 利用Object.definedProperty中的setter/getter代理数据，监控对数据的操作（这也是为什么不支持ie8的原因，es5）

#### 组合的视图组件
* ui页面映射为组件树
* 划分组件可维护、可重用、可测试

#### 虚拟DOM
* 运行js的速度是很快的，大量操作DOM就会汗漫，时常在更新数据后会重新渲染页面，这样造成没有改变数据的地方也重   新渲染了DOM节点，这样就造成了很大程度上的资源浪费
* 利用在内存中生存与真实DOM与之对应的数据结构，这个在内存中生成的结构称之为虚拟DOM
* 当数据发生改变时，能够智能地计算出重新渲染组件的最小大家并运用到Dom操作上

#### mvvm 模式
* M: Model 数据模型
* v: view 视图模板
* vm:view-model 视图模型

#### 声明式渲染
* 声明式 只需要声明在where ，whta to do,不需要关心如何实现（how）
* 命令式 需要以具体代码必答在哪里（where），做什么(what)，如何实现(how)
* 例子
    命令式：使用for循环拿出每一项，然后求知完成后，再放入到另一数组中
    声明式：使用map方法，关注如何求值
* vue声明式渲染 初始化根实例，vue将自动数据绑定在DOM模板上（如果你有足够的水平，可以自己去实    现）




*****
## 指令
>
>是一种特殊的自定义行间属性,指令的职责就是当其表达式的值改变时对应的将其某些行为对应到Dom上
>
#### 内置指令
* v-bind   动态绑定数据。               简写为:
* v-on     绑定时间监听器。             简写为@
* v-text   更新数据txt，会覆盖已有结构
* v-html   解析数据中的html结构
* v-show   根据值得真假，切换display
* v-if     根据值得真假，切换元素会被摧毁、重建
* v-else-if多条件判断，为真泽渲染
* v-else   条件都不符合渲染
* v-for    多次渲染元素或者模板快
* v-model 表单控件元素上
* v-pre   跳过元素和子元素的编译过程
* v-once  只渲染一次，随后数据更新不渲染
* v-cloak 隐藏未编译的Munstache语言，css中设置[v-cloak]{display:none;} 如果直接用html模板，这个非常有用

## 模板
* html模板，基于dom的模板，模板都是可解析的html
* template,字符串模板 可以用<script type="x-template" id=''></script>,可以用直接用字符串拼接这种方式，这时候用es6的语法更好。
* 模板render函数,createElement(标签名，[数据对象]，子元素)