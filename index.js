// Break down the problem

// when "index.js" is entered, should randomly generate a random color with the hex code in the mjddle of a 31x9 block of #'s
// ELSE if the user writes "index.js ask" the terminal should ask for a HUE and a LUMINOSITY
// a HUE is a color like "red" or "blue"
// a LUMINOSITY is a descriptor like "dark" or "light"

// STRETCH: Dynamically sized grid of #, using an x and y parameter
// STRETCH: enter " index.js #123456 " and it will spit out that specific color

// import kuler
import kuler from 'kuler';
import randomColor from 'randomcolor';

// user console input
// finally found out about argv[] which I believe means "argument variable"
// this way we can add optional "hue" and "luminosity" arguments
// also assigns the random color to a variable because we want to re-use it.

// god....damn. finally.
const farb = randomColor({ hue: process.argv[2], luminosity: process.argv[3] });

// Returns a hex code for an attractive color, using said hex-code's color.

console.log(
  kuler(
    `
###############################
###############################
###############################
#####                     #####
#####       ${farb}       #####
#####                     #####
###############################
###############################
###############################
`,
    farb,
  ),
);
