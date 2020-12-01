import L1 from "../skills/l1.js";
import L2 from "../skills/l2.js"
import L3 from "../skills/l3.js"
export default class Luban{
    constructor(){
        this.name = "鲁班";
        this.ico = './sources/heros/luban1.png';
        this.skills = [new L1(), new L2(), new L3()];
    }
}