 function crateHero (name,blood,weapoon) {
 2             var o = new Object();
 3             o.name = name;
 4             o.blood = blood;
 5             o.weapoon = weapoon;
 6             o.attch = function () {
 7             console.log(this.name+"用"+this.weapoon+"进行了攻击");
 8         }
 9         return o;
10         }
11         var hero = new crateHero("Tom","10","foot");
12         hero.attch();

