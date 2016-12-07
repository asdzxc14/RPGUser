var User = (function () {
    function User() {
        this.heros = [];
        this.dirtyFlag = true;
    }
    var d = __define,c=User,p=c.prototype;
    p.getheroInTeam = function () {
        var heroInTeam = [];
        for (var i = 0; i < this.heros.length; i++) {
            if (this.heros[i].isInTeam) {
                heroInTeam.push(this.heros[i]);
            }
        }
        return heroInTeam;
    };
    d(p, "FightPower"
        ,function () {
            var result = 0;
            var heros = this.getheroInTeam();
            for (var i = 0; i < heros.length; i++) {
                result += heros[i].FightPower;
            }
            return result;
        }
    );
    return User;
}());
egret.registerClass(User,'User');
//# sourceMappingURL=User.js.map