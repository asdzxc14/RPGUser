var Hero = (function () {
    function Hero(type) {
        this.level = 1;
        this.isInTeam = false;
        this.dirtyFlag = true;
        this.equipments = [];
        this.strengthData = heroConfig[type].strength;
        this.agilityData = heroConfig[type].agility;
        this.intelligenceData = heroConfig[type].intelligence;
    }
    var d = __define,c=Hero,p=c.prototype;
    p.setInTeam = function (status) {
        this.isInTeam = status;
        this.dirtyFlag = true;
    };
    d(p, "maxmp"
        ,function () {
            return this.level * 10 * this.intelligence;
        }
    );
    d(p, "strength"
        ,function () {
            return this.level * 10 * this.strengthData;
        }
    );
    d(p, "intelligence"
        ,function () {
            return this.level * 10 * this.intelligenceData;
        }
    );
    d(p, "agility"
        ,function () {
            return this.level * 10 * this.agilityData;
        }
    );
    d(p, "attack"
        ,function () {
            return 6000;
        }
    );
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map