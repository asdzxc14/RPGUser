var Jewel = (function () {
    function Jewel(type) {
        this.dirtyFlag = true;
        this.basicAttackData = jewelConfig[type].basicAttack;
        this.purityData = jewelConfig[type].purity;
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "attack"
        ,function () {
            return 500;
        }
    );
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
//# sourceMappingURL=Jewel.js.map