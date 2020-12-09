class Jq {
    constructor(arg, root) {
        // this.ele = document.querySelector(arg);
        // 三种情况区分开；
        if (typeof root === "undefined") {
            this['prevObj'] = [document];
        } else {
            this['prevObj'] = root;
        }

        if (typeof arg === "string") {
            let eles = document.querySelectorAll(arg);
            // 字符串
            // this.eles = [obj1,obj2...]
            // this[0] = obj1 this[1] = obj2 ...
            // this.eles = document.querySelectorAll(arg);
            this.addEles(eles);
        } else if (typeof arg === 'function') {
            // 函数
            document.addEventListener("DOMContentLoaded", arg);
        } else {
            // 对象
            // console.log("对象",arg);
            // 区分一个和多个对象的情况；
            if (typeof arg.length === "undefined") {
                // 一个对象
                console.log("1个对象")
                this[0] = arg;
                this.length = 1;
            } else {
                console.log("多个对象")
                this.addEles(arg);
            }
        }
    }
    addEles(eles) {
        for (let i = 0; i < eles.length; i++) {
            this[i] = eles[i];
        }
        this.length = eles.length;
    }
    click(fn) {
        // this.ele.addEventListener("click",fn);
        for (let i = 0; i < this.length; i++) {
            this[i].addEventListener("click", fn);
        }
    }
    on(eventName, fn) {
        let reg = /\s+/g;
        eventName = eventName.replace(reg, " ");
        let eventArr = eventName.split(" ");
        // 循环多个元素
        for (let i = 0; i < this.length; i++) {
            // 循环多个事件
            for (let j = 0; j < eventArr.length; j++) {
                this[i].addEventListener(eventArr[j], fn)
            }
        }
        return this;
    }
    eq(index) {
        return new Jq(this[index], this);
    }
    get() {
        return this[index];
    }
    end() {
        return this['prevObj'];
    }
    css(...args) {
        // args    arguments（隐藏参数）
        if (args.length === 1) {
            // 一个参数 ： 1 .获取样式(字符串)  2. 对象设置样式（对象）;
            if (typeof args[0] === 'string') {
                // 1情况 获取样式 (始终是第一个元素)
                return this.getStyle(this[0], args[0]);
            } else {
                // 3情况：对象设置样式 (多个样式)
                for (let i = 0; i < this.length; i++) {
                    for(let j in args[0]){
                        this.setStyle(this[i], j, args[0][j]); 
                    }
                }
            }
        } else {
            // 2个参数 ： 设置样式；
            // 2情况 ：2个参数设置样式；
            for (let i = 0; i < this.length; i++) {
                this.setStyle(this[i], args[0], args[1])
            }
        }
    }
    getStyle(ele, styleName) {
        if(styleName in $.cssHooks){
            return $.cssHooks[styleName].get(ele);
        }
        return getComputedStyle(ele, null)[styleName];
    }
    setStyle(ele, styleName, styleValue) {
        if(styleName in $.cssHooks){
            $.cssHooks[styleName].set(ele,styleValue);
        }
        // console.log(ele, styleName, styleValue);
        ele.style[styleName] = styleValue;
    }
    animate(arg) {
        for(let i in arg) {
            for(let g = 0; g < this.length; g++) {
                //方法一
                this[g].style[i] = getComputedStyle(this[g])[i];
                let interval = setInterval(() => {
                    this[g].style[i] = Number(this[g].style[i].slice(0, -2)) + arg[i].slice(0,-2)/100 + 'px';
                    if(Number(this[g].style[i].slice(0, -2)) >= Number(arg[i].slice(0, -2))) {
                        clearInterval(interval);
                    }
                },10);

                //方法二
                // this[g].style[i] = getComputedStyle(this[g])[i];
                // let keyframes = new KeyframeEffect(this[g], [{i: this[g][i]}, {i: arg[i]}], {duration: 1000});
                // let animation = this[g].animate([{[i]: this[g].style[i]}, {[i]: arg[i]}], {duration: 8000});
                // animation.play();
            }
        }
    }
}


function $(arg) {
    return new Jq(arg);
}

$.cssHooks = {};












// function $(arg){
//     return {
//         click(fn){
//             document.querySelector(arg).onclick = function(){
//                 fn(); 
//             } 
//         }
//     }
// }