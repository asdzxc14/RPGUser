class Jewel {

    basicAttackData: number;
    getRateData: number;
    purityData: number;

    dirtyFlag: boolean = true;

    public constructor(type: number) {

        this.basicAttackData = jewelConfig[type].basicAttack;
        this.getRateData = jewelConfig[type].getRate;
        this.purityData = jewelConfig[type].purity;
    }

    get attack(): number {

        return this.basicAttackData / this.purityData * 10;
    }

    get FightPower(): number {

        var result = 0;

        result = this.attack * 0.8 + 100 / this.getRateData;
        return result;
    }
}