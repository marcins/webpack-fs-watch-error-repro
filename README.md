# Reproduction for Watchpack `fs.watch` issue on macOS

To setup the mock data in `src` run `node generate [dirs]`. `dirs` will default to 4090 which is where it starts failing (I'm guessing it's actually adding 4,096 watchers though).

This will generate 4097 directories each with an index.js with an export which are imported by the main index.js in `src`.

Then run `yarn webpack --watch`.
