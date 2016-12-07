class User {

    cash = 0;

    gold = 0;

    exp = 0;

    totalExp = 0;

    level = 0;

    heroes: Hero[] = [guanyu];

    pet: Pet;

    get heroesInTeam() {
        return this.heroes.filter(hero => hero.isInTeam);
    }

    getFightPower() {
        var aee = [];

        var result = 0;
        this.heroesInTeam.map(hero => result += hero.getFightPower());
        result += this.pet.getFightPower();
        return result;
    }
}

var guanyu = new Hero();

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

class Equipment {

    jewels: Jewel[] = [];
    get attack() {
        return 50;
    }
}

class Jewel {

}

class Pet {

    getFightPower() {
        return 100;
    }
}