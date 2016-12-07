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
            return 50;
        }
    );
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=Equipment.js.map