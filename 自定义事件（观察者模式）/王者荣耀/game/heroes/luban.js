import Hero from './hero.js';

// 英雄技能
import S1 from '../skills/luban/s1.js'
import S2 from '../skills/luban/s2.js'
import S3 from '../skills/luban/s3.js'

// 英雄皮肤
import Skin1 from '../skins/luban/lubanSkin1.js';
import Skin2 from '../skins/luban/lubanSkin2.js';
export default class Luban extends Hero{
    constructor() {
        let opts = {
            name:"鲁班",
            ico:"./sources/heros/luban1.png",
            skills:[new S1,new S2,new S3],
            skins:[new Skin1,new Skin2]
        }
        super(opts);
        // this.name = "鲁班";
        // this.ico = "./sources/heros/luban1.png";
        // this.skills = [new S1,new S2,new S3];
        // this.skins = [new Skin1,new Skin2];
    }
}