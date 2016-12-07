class Equipment {

    basicAttackData: number;
    getRateData: number;
    consumeData: number;

    dirtyFlag: boolean = true;
    jewels: Jewel[] = [];

    public constructor(type: number) {

        this.basicAttackData = equipmentConfig[type].basicAttack;
        this.getRateData = equipmentConfig[type].getRate;
        this.consumeData = equipmentConfig[type].consume

    }

    get attack(): number {
        return this.basicAttackData / this.getRateData * this.consumeData;
    }

    get FightPower(): number {

        var result = 0;

        for (var i = 0; i < this.jewels.length; i++) {

            result += this.jewels[i].FightPower;
        }
        return (this.attack + result * 0.3) * 10;
    }
}