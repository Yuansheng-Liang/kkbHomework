import GameEvent from '../gameEvent.js';

// 英雄的父类；
export default class Hero extends GameEvent{
    constructor({name,ico,skills,skins}){
        super();
        this.name = name;
        this.ico = ico;
        this.skills = skills;
        this.skins = skins;
        this.addEvent("initEvent",this.init);
        this.addEvent("initEvent",this.getHurt);
    }
    init(){
        console.log("初始化");
    }
    getHurt(){
        console.log("get hurt ");
    }
}