// Your code here

const FriendlyDragon = require("./classes/friendly-dragon")
const EvilDragon = require("./classes/evil-dragon")
const { getDragons } = require("./classes/friendly-dragon")

const Falkor = new FriendlyDragon("Falkor", "white", ["save Atreyu from the swamp", "save Atreyu from the Nothing", "scare the local bullies into a dumpster"], "Bastian")
const Smaug = new EvilDragon("Smaug", "black", ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village"], "Dwarf King")

allDragons = getDragons(Falkor, Smaug);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = Falkor
  module.exports.allDragons = allDragons;
  module.exports.smaug = Smaug
} catch {
  module.exports = null;
}
