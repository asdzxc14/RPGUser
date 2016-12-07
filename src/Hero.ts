class Hero {

    level = 1;

    strengthData: number
    agilityData: number
    intelligenceData: number

    isInTeam: boolean = false;
    dirtyFlag: boolean = true;

    equipments: Equipment[] = [];

    public constructor(type: number) {

        this.strengthData = heroConfig[type].strength;
        this.agilityData = heroConfig[type].agility;
        this.intelligenceData = heroConfig[type].intelligence;
    }

    public setInTeam(status: boolean) {

        this.isInTeam = status;
        this.dirtyFlag = true;
    }

    get maxmp(): number {
        return this.level * 10 * this.intelligence;
    }

    get strength(): number {
        return this.level * 10 * this.strengthData;
    }

    get intelligence(): number {
        return this.level * 10 * this.intelligenceData;
    }

    get agility(): number {
        return this.level * 10 * this.agilityData;
    }

    get attack(): number {
        return 6000;
    }
}