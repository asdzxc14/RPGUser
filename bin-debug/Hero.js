var Hero = (function () {
    function Hero(type) {
        this.level = 1;
        this.isInTeam = false;
        this.dirtyFlag = true;
        this.equipments = [];
        this.basicAttackData = heroConfig[type].basicAttack;
        this.strengthData = heroConfig[type].strength;
        this.agilityData = heroConfig[type].agility;
        this.intelligenceData = heroConfig[type].intelligence;
    }
    var d = __define,c=Hero,p=c.prototype;
    p.setInTeam = function (status) {
        this.isInTeam = status;
        this.dirtyFlag = true;
    };
    d(p, "maxHp"
        ,function () {
            return this.level * this.intelligenceData * 100;
        }
    );
    d(p, "attack"
        ,function () {
            return (this.basicAttackData + this.level * this.strengthData * this.agilityData) * 10;
        }
    );
    d(p, "FightPower"
        ,function () {
            var result = 0;
            for (var i = 0; i < this.equipments.length; i++) {
                result += this.equipments[i].FightPower;
            }
            return (this.attack + result * 0.3) * 10;
        }
    );
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map