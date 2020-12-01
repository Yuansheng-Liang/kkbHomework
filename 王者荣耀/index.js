// 和视图操作(dom结构)有关系的 index.js

// 分析对象--》玩家对象  --》 亚瑟 鲁班...  技能一、技能二...  皮肤一、皮肤二 ... --- >抽离类  ---》玩家类  （亚瑟、鲁班）---> 英雄类(父类)  技能类  皮肤类。。---》逻辑关系--->游戏类 (每个类是一个模块);
/*
    玩家：{
        英雄1
            名称..
            {
                技能一
                技能二
            }
        英雄2
        ...
    }
*/

import Game from './game/game.js';
let game = new Game();
// game.login("张三");
// console.log(game);

document.querySelector(".sub").onclick = function(){
    let value = document.querySelector(".username").value;
    game.login(value);
    console.log(game);
    document.querySelector(".login").style.display = "none";
    document.querySelector(".game").style.display = "block";
    document.querySelector(".chioseusername").innerHTML = value;
    renderHeroes(game.player.heroes);
}
function renderHeroes(heroes){
    document.querySelector(".heroView").innerHTML = "";
    heroes.forEach(hero=>{
       let heroView =  document.createElement("div");
       heroView.classList.add("heroItem");
       heroView.innerHTML = ` <img src="${hero.ico}" />
       <span>${hero.name}</span>`;
       document.querySelector(".heroView").appendChild(heroView);
       heroView.onclick = function(){
           document.querySelector(".heroShow").innerHTML = `<img src="${hero.ico}" />`;
           renderSkills(hero.skills);
       }
    })
}

function renderSkills(skills){
    //console.log(skills)
    // 渲染技能
    let skillsView = document.querySelector(".skillsView");
    skillsView.innerHTML = '';
    skills.forEach(skill => {
        let img = document.createElement("img");
        img.setAttribute("src", skill.ico);
        skillsView.appendChild(img);
    })
}

// 作业  ： 实现一个鲁班类；（技能需要渲染 ，皮肤不需要）;
