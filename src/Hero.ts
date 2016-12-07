class Hero {

    isInTeam: boolean = false;

    equipments: Equipment[] = [];

    hp = 50;

    level = 1;

    quality: number = 2.8;

    get maxHp() {
        return this.level * 100 * this.quality;
    }

    get attack() {
        var result = 0;
        this.equipments.forEach(e => result += e.attack);
        return result;
    }

    get fightPower(){
        return  this.getFightPower();
    }

    getFightPower() {
        return this.maxHp * 1.5 + this.attack * 1.8;
    }
}