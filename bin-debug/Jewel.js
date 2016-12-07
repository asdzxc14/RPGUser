var Jewel = (function () {
    function Jewel(type) {
        this.dirtyFlag = true;
        this.basicAttackData = jewelConfig[type].basicAttack;
        this.getRateData = jewelConfig[type].getRate;
        this.purityData = jewelConfig[type].purity;
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "attack"
        ,function () {
            return this.basicAttackData / this.purityData * 10;
        }
    );
    d(p, "FightPower"
        ,function () {
            return this.attack * 0.8 + 100 / this.getRateData;
        }
    );
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
//# sourceMappingURL=Jewel.js.map