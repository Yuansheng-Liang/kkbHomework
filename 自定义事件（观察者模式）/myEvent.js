class MyEvent{
    constructor() {
        //  using map for collecting events
        this.handles = new Map();
    }
    addEvent(eventName, fn, ...args) {
        // to checking if the eventName is existed
        if(!(this.handles.has(eventName))) {
            //  using map to collecting functions and their arguments
            this.handles.set(eventName, new Map());
        }
        this.handles.get(eventName).set(fn, [...args]);
    }

    trigger(eventName) {
        this.handles?.get(eventName)?.forEach((args, fn) => {
            fn(...args);
        });
    }

    //remove a function from an event(homework)
    removeEvent(eventName, fn) { 
        let sign = this.handles?.get(eventName)?.delete(fn);
        if(sign) {
            console.log("remove function successfully!");

            //if there isnt any function belongs to this event, remove the whole event
            if(!this.handles.get(eventName).size) {
                this.handles.delete(eventName);
                console.log("remove entire event successfully!")
            }
        } else {
            console.log("fail!")
        };
    }
    
    //remove the whole event and all its funcitons
    removeWholeEvent(eventName) {
        let sign = this.handles?.delete(eventName);
        if(sign) {
            console.log("success!");
        } else {
            console.log("fail!")
        };
    }
}

let lightning = function(name, age) {
    console.log(`${age}岁，${name}，会闪电鞭。`);
}
let jhf = function(skill) {
    console.log(skill);
}

let myevent = new MyEvent();
myevent.addEvent("Teacher Ma", lightning, "马保国", 69);
myevent.addEvent("Teacher Ma", jhf, "接化发！");