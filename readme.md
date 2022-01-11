An application to return a random color in command line.

## What:

Node.js Terminal Color Generator.

## Running this repo:

- clone using `git clone https://github.com/richokorn/pjct-node-1-random-color-generator` once you've navigated to a folder of your choice in the CLI of choice.
- you probably also need `kulers` and `random-color` from npmjs.com
- run using `node index.js` for the random pretty colors
- optionally you may run `node index.js red` (or any other basic color name) to get a random color and hex code in that hue.
- optionally you may _also_ run `node index.js red bright` (or `dark` or `light`) to change the luminosity
- switching around the argument order won't work however, neither will _only_ using a luminosity by itself.

- When somebody enters a specific command in the command line, a block of approximately 31x9 `#` characters and of a random color (using hex code, e.g. `#ff0000`) will be generated.
  It should look pretty close to this:

![Screen Shot 2020-09-09 at 15 53 33](https://user-images.githubusercontent.com/1935696/92607675-b56bd700-f2b4-11ea-9085-67af9369fa71.png)

It should be able to not only accept the command itself, but also the request for a:

- hue (e.g. green or red or blue)
- luminosity (e.g. light or dark)

...and then generate random colors that match those choices.

For example:

![Screen Shot 2020-09-09 at 15 54 42](https://user-images.githubusercontent.com/1935696/92607766-daf8e080-f2b4-11ea-9d6d-3bd8501da443.png)

## Why:

- This project exists to exercise general resourcefulness, especially when sourcing libraries from `npmjs.com`
- This project exists to exercise analytical google searching, for specific answer to problems.

## How:

- This project is, aside from the libraries and dependancies, various Upleveled plugins, etc. essentially originally arranged code.

## Where:

- This project repository

## Stretch goals

- [ ] If a user types "ask" instead of a color name, print questions to ask the user for the name of the color and the luminosity
- [ ] If a user types a size in the format of `WWxHH` (eg. `31x9`) **before** the color and luminosity, it will use this as the size of the box

The stretch goals have not been completed. By one day they might.

## Acceptance Criteria

- [ ] Preflight runs through without errors in your project
- [ ] Link in your GitHub repo's About section: repl.it demo
- [ ] [Drone bot](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-tasks/#upleveled-drone) has been tagged and responded with a passing message
- [ ] Correct GitHub commit message format (see [Writing Commit Messages](https://learn.upleveled.io/courses/btcmp-l-webfs-gen-0/modules/cheatsheet-git-github/#writing-commit-messages))
