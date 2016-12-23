/**
 * Created by Magic on 2016/12/23.
 */
//全局作用域中定义变量，就是全局变量
//全局变量就是window的属性
//BOM browser object model
//window navigator

//DOM document object model
//document div body image form anchor http://www.w3school.com.cn/js/js_obj_htmldom.asp



// var util = "util";
// window.util = "util";

(function (window) {
    window.util = window.util ||{};
    util.tree = {};
    util.tree.node = {
        id:"",
        title:"",
        isOpen:0,
        icon:"",
        pId:"",
        type:1
    };
    util.tree.GenerateNode = function (id,title) {
            this.id = id;
            this.tilte = title;
    };
    util.tree.GenerateNode.prototype = util.tree.node;
    
    var node = new util.tree.GenerateNode(0);

    node.title = "董事长";

    var node2 = new util.tree.GenerateNode(1);
    node2.title = "CFO";
    node2.pId = 0;

    var node3 = new util.tree.GenerateNode(2);
    node3.title = "CTO";
    node3.pId = 0;

    var node4 = new util.tree.GenerateNode(3);
    node4.title = "CEO";
    node4.pId = 0;
    

})(window);//立即执行函数