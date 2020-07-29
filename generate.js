const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const fs = require('fs');
const path = require('path');

rimraf.sync('src');
mkdirp.sync('src');

const DIRS = +(process.argv[2] || 4096);
console.log(`Creating ${DIRS} directories..`);
const requires = [];
const logs = [];
for (let i = 0; i < DIRS; i++) {
    const dir = path.resolve(`./src/${i}`);
    mkdirp.sync(dir);
    fs.writeFileSync(path.join(dir, 'index.js'), `export default () => ${i};`, 'utf8');
    requires.push(`import i${i} from './${i}';`);
    logs.push(`console.log(i${i})`);
}

const indexPath = path.resolve('./src/index.js');
fs.writeFileSync(indexPath, requires.join('\n') + '\n' + logs.join('\n'), 'utf8');
