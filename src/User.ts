class User {

    heros: Hero[] = [];

    dirtyFlag: boolean = true;

    getheroInTeam(): Hero[] {

        var heroInTeam: Hero[] = [];

        for (var i = 0; i < this.heros.length; i++) {
            if (this.heros[i].isInTeam) {
                heroInTeam.push(this.heros[i]);
            }
        }
        return heroInTeam;
    }

    get FightPower(): number {

        var result = 0;
        var heros: Hero[] = this.getheroInTeam();

        for (var i = 0; i < heros.length; i++) {

            result += heros[i].FightPower;
        }
        return result;
    }
}