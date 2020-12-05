class Person {
    constructor(name) {
        this.name = name;
    }
    giao() { 
        console.log("giao");
    }
}


function getSingle(fn) {
    let instance;
      return function(...args) {
            if(!instance) {
                      instance = new fn(...args); 		//返回一个新对象
            }
             return instance; 		//返回一个旧对象
    }
}
let pSingle = getSingle(Person);
let zhangsan = new pSingle("张三");
let lisi = new pSingle("李四");


let g = new Person("ss");
let gg = function() { 
    console.log("gg");
}
Function.prototype.Decorator = function(fn) {
    this();
      fn();
      console.log("this", this);
}
g.giao.Decorator(gg);