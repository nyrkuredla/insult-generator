/* All of the arrays must be the same length for the random index function to work! */
let basicInsultsAdj = ["lazy", "stupid", "insecure", "idiotic", "slimy", "slutty", "smelly", "pompous"];
let basicInsultsNoun1 = ["douche", "ass", "turd", "rectum", "butt", "cock", "shit", "crotch"];
let basicInsultsNoun2 = ["pilot", "canoe", "captain", "pirate", "hammer", "knob", "box", "jockey"];


/*Gets random index number to apply to generateInsult function */
function getInsultIndex(min, max) {
  min = Math.ceil(0);
  max = Math.floor((basicInsultsAdj.length - 1));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let newInsult = "";

function generateInsult(x, y, z) {
  x = basicInsultsAdj[getInsultIndex()];
  y = basicInsultsNoun1[getInsultIndex()];
  z = basicInsultsNoun2[getInsultIndex()];
  newInsult = x + " " + y + " " + z;
  console.log(newInsult);
}
