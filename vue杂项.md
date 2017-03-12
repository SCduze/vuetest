#### vue事件
>事件处理函数只有纯粹的逻辑判断，不处理dom事件的细节，例如阻止冒泡、取消默认行为、判断按键等
* 修饰符的位置 v-on:eventName.修饰符
    .stop 阻止冒泡
    .prevent 取消默认行为
    .captrue 
    .self
    .once 只触发一次
* 按键修饰符：
    .enter .tap .delete .esc .space .up .down .left .right .ctrl .alt .meta .键值
* 传值
    v-on:keyup.13="add(param1,param2,$event)"
#### vue列表
vue提供了一组方法，对数组进行操作的时候，会触发视图更新push pop shift unshift splice sort reverse
*****
#### vue组件
1. 组件的的基本组成：
* 样式结构
* 行为逻辑
* 数据
2. 注册组件
* ###### 全局注册 
    * 可以在任何模板中使用，使用之前要先注册，语法：使用vue.component(组件名，选项对象)
    * 组件命名约定：驼峰：camelCase /烤串（kebab-case)
    * 在html中使用：kebab-case 命名法：
    * 例如注册：Vue.component("my-component",{}):使用：`<my-component></my-component>`
* ###### 局部注册
* ###### 传值
    * 父组件->子组件 组件实例的作用域是孤立的，不能再子组件直接使用父组件的数据。可以在组件上使用自定义属性绑定数据，在组件中需要显示的用props声明自定义属性名
    *  子组件 ->父组件, 父组件用$on监听自定义事件，$emit触发父组件所关心的自定义事件
* ###### 单向数据流
    * 数据从父组件流向（传递）给子组件，只能单向绑定。在子组件的内部不应该修改父组件传递过来的数据
    * 改变props的情况 1、作为data中局部数据的初始值使用，2、作为子组件中的computed属性