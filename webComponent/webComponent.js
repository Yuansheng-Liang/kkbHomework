{
// class MyImg extends HTMLImageElement {
//     constructor(){
//         super();
//         console.log(this);
//         this.src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607098423626&di=548900314ef3580524511dbae55c34cb&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F13%2F41%2F01300000201800122190411861466.jpg'

//     }
// }

// customElements.define("my-img", MyImg, {
//     extends: "img"
// })


//     let value;
// class Person{
//     constructor() {
//     }
//     get name() {
//         console.log("get");
//         return value;
//     }
//     set name(newvalue) {
//         console.log(newvalue);
//         value = newvalue;
//     }
// }
// let giao = new Person();

// class Person1 extends EventTarget {
//     constructor(name) {
//               super();
//             this.name = name;
//     }
// }
// let zhangsan = new Person1("张三");
// function fn1() {
//     console.log("fn1");
// }
// function fn2() { 
//       console.log("fn2"); 
// }

// zhangsan.addEventListener("myevent", fn1);
// zhangsan.addEventListener("myevent", fn2);
// zhangsan.dispatchEvent(new CustomEvent("myevent"));
}

let template = document.createElement("template");
template.innerHTML = `
<style> 
    div{
        width: 100px;
        height: 100px;
        background: red;
    }
</style>
<div class="container">
    <div id="d1"></div>
    <input type="text"/>
    <div id="d2"></div>
</div>

`;


class MyCom extends HTMLElement {
    constructor() {
        super();
        
        this._shadowDom = this.attachShadow({mode: 'open'});
        this._shadowDom.appendChild(template.content);
        // console.log(this._shadowDom);
        this.title = this.getAttribute('title');
        this.addEvent();
    }
    addEvent() {
        this._shadowDom.querySelector(".container").onclick = (e) => {
            switch(e.target.tagName) {
                case "DIV":
                    this.blue(e.target.id);
                    this.dispatchEvent(new CustomEvent("blue", {
                        detail: e.target
                    }))
                    break;
            }
            this._shadowDom.querySelector("input").ondblclick = (e) => {
                this.dispatchEvent(new CustomEvent("Input", {
                    detail: e.target.value
                }))
            }
        }
    }

    blue(id) {
        this._shadowDom.querySelector(`#${id}`).style.background = "blue";
    }

    set title(newvalue) {
        this._shadowDom.querySelector("#d1").innerHTML = `${newvalue}`;
        this._shadowDom.querySelector("#d2").innerHTML = `${newvalue}`;
    }
}

customElements.define("my-com", MyCom);

/** 外部 */
// document.querySelector("my-com").addEventListener("blue", e => {
//     console.log("blue:", e.detail);
// });
// document.querySelector("my-com").addEventListener("Input", e => {
//     console.log("input value:", e.detail, this);
//     document.querySelector("my-com").title = e.detail;
// });
/* 外部 */


class MYCom {
    constructor(opts){
        let defaultOpts = {
            width: "30%",
            height: "250px",
            title: "测试标题",
            content: "测试内容",
        }
        this.opts = Object.assign(defaultOpts, opts);
        this.createDom();
    }
    createDom() {
        let mycom = document.createElement("my-com");
        document.body.appendChild(mycom);

        mycom.title = this.opts.title;
        mycom.addEventListener("Input", e => {
            console.log("input value:", e.detail, this);
            document.querySelector("my-com").title = e.detail;
        })
    }
}

let mycom = new MYCom({
    title: "ggggg"
});