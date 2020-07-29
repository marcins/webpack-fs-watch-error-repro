# Reproduction for Watchpack `fs.watch` issue on macOS

## Quick steps to repro

```console
yarn
node generate
yarn webpack --watch
```

## Detail

To setup the mock data in `src` run `node generate [dirs]`. `dirs` will default to 4090 which is where it starts failing (I'm guessing it's actually adding 4,096 watchers though).

This will generate `dirs` directories each with an index.js with an export which are imported by the main index.js in `src`.

Then run `yarn webpack --watch`. It should build and then start failing with:

```
[webpack-cli] watching files for updates...
Watchpack Error (watcher): Error: EMFILE: too many open files, watch
Watchpack Error (watcher): Error: EMFILE: too many open files, watch
Watchpack Error (watcher): Error: EMFILE: too many open files, watch
Watchpack Error (watcher): Error: EMFILE: too many open files, watch
```
