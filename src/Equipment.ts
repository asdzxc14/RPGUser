class Equipment {

    basicAttackData: number;
    getRateData: number
    consumeData: number

    dirtyFlag: boolean = true;
    jewels: Jewel[] = [];

    public constructor(type: number) {

        this.basicAttackData = equipmentConfig[type].basicAttack;
        this.getRateData = equipmentConfig[type].getRate;
        this.consumeData = equipmentConfig[type].consume

    }

    get attack(): number {
        return 50;
    }

}