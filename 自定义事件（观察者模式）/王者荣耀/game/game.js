import Player from './player.js';


class Game{
    constructor(){
        this.player = null;
    }
    login(name){
        this.player = new Player(name);
        // 执行初始化；
        this.player.heroes.forEach(hero=>{
            // hero.removeEvent("initEvent", hero.init);
            hero.trigger("initEvent");
        })
    }
}

function getSingle(fn){
    let instance;
    return function(...args){
        if(!instance){
            instance = new fn(...args); 
        }
        return instance;
    }
}
export default getSingle(Game);
