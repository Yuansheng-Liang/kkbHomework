export default class GameEvent {
    constructor() {
        this.handles = {};
    }
    addEvent(evnetName, fn) {
        // console.log(evnetName in handles);
        if (!(evnetName in this.handles)) {
            // handles[myevent1] = [];
            this.handles[evnetName] = [];
        }
        // console.log(handles[evnetName]);
        this.handles[evnetName].push(fn);
    }
    trigger(evnetName) {
        if (!(evnetName in this.handles)) {
            return;
        }
        for (let i = 0; i < this.handles[evnetName].length; i++) {
            this.handles[evnetName][i]();
        }
    }
    removeEvent(eventName, fn){
        if(!(eventName in this.handles)) {
            return;
        }
        this.handles[eventName] = this.handles[eventName].filter(element => element === fn);
    }
}

// 作业：实现一个removeEvent（eventNmae,fn）;移除指定事件；

/*
let gameEvent  = new GameEvent();
gameEvent.addEvent("myevent",fn1);
gameEvent.addEvent("myevent",fn2);
gameEvent.removeEvent("myevent",fn2);
gameEvent.trigger("myevent");; //fn1...
*/
