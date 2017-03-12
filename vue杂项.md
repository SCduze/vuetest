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