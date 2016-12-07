var Equipment = (function () {
    function Equipment(type) {
        this.dirtyFlag = true;
        this.jewels = [];
        this.basicAttackData = equipmentConfig[type].basicAttack;
        this.getRateData = equipmentConfig[type].getRate;
        this.consumeData = equipmentConfig[type].consume;
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "attack"
        ,function () {
            return this.basicAttackData / this.getRateData * this.consumeData;
        }
    );
    d(p, "FightPower"
        ,function () {
            var result = 0;
            for (var i = 0; i < this.jewels.length; i++) {
                result += this.jewels[i].FightPower;
            }
            return (this.attack + result * 0.3) * 10;
        }
    );
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=Equipment.js.map