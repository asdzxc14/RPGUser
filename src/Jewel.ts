class Jewel {

    basicAttackData: number
    purityData: number

    dirtyFlag: boolean = true;

    public constructor(type: number) {

        this.basicAttackData = jewelConfig[type].basicAttack;
        this.purityData = jewelConfig[type].purity;
    }

    get attack(): number {
        return 500;
    }
}