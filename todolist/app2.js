var store = {
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    fetch(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }
}
/*
var list = [
    {
        title:"吃饭睡觉打豆豆0",
        isChecked:false
    },
    {
        title:"吃饭睡觉打豆豆1",
        isChecked:false
    },
    {
        title:"吃饭睡觉打豆豆2",
        isChecked:false
    }
];
*/
var list = store.fetch("localtodo");
//过滤的时候分三种情况 all finished unfinished
var filter = {
    all: function (list) {
        return list;
    },
    finished: function (list) {
        return list.filter(function (item) {
            return item.isChecked;
        })
    },
    unfinished: function (list) {
        return list.filter(function (item) {
            return !item.isChecked;
        })
    }
}
var vm = new Vue({
    el: ".main",
    data: {
        list: list,
        todo: "",
        edtorTodos: '', //记录正在编辑数据数组位置
        beforeTitle: '',//记录正在编辑数据的title
        visibility: "all" //通过这个属性值得变化对数据进行筛选
    },
    watch: { //监控list属性，当这个属性对应的值发生变化的时候执行 
        list: {
            handler: function () {
                store.save("localtodo", this.list);
            },
            deep: true //深度监控
        }
    },
    methods: {
        //添加todo
        addTodo(a, b) {
            if (this.todo.length == 0) return;
            this.list.push({
                title: this.todo,
                isChecked: false,

            })
            this.todo = "";
            /* 方式一
            if(event.keyCode === 13){
                this.list.push({
                    title:event.target.value
                })
            }
            */

        },
        //删除编辑过的li
        deleteTodo(a) {
            this.list.splice(a, 1);
        },
        //正在编辑
        edtorTodo(a) {
            this.beforeTitle = this.list[a].title;
            this.edtorTodos = a;
        },
        //编辑完成
        edtorTodoed(a) {
            this.edtorTodos = '';
        },
        //esc 取消编辑
        cancelTodo(a) {
            this.list[a].title = this.beforeTitle;
            this.edtorTodos = '';
        }
    },
    directives: {
        "focus": {
            update(a, b, c, d) {
                if (b.value) {
                    a.focus();
                }
            }
        }
    },
    computed: {
        noCheckedLength: function () {
            return this.list.filter(function (item) {
                return !item.isChecked
            }).length
        },
        filteredList: function () {

            //找到了过滤函数就返回过滤后的数据，如果没有就返回所有数据
            console.log(list);
            return filter[this.visibility] ? filter[this.visibility](this.list) : this.list;
        }
    }
})

function watchHash() {
    var hash = window.location.hash.substring(1);
    vm.visibility = hash;
}
watchHash();
window.addEventListener("hashchange", watchHash)