
import * as fs from 'fs';
import {upperFirst, camelCase} from 'lodash';

let promise = require('bluebird');
let stat = promise.promisify(fs.stat);
let mkdir = promise.promisify(fs.mkdir);
let readFile = promise.promisify(fs.readFile);
let writeFile = promise.promisify(fs.writeFile);

let args = process.argv.slice(2);
let slideName = args[0];
if(!slideName) {
    throw new Error("Provide the name of the slide to add.");
}

console.log(`Adding slide ${slideName} ...`);

let slidePath = `app/slides/${slideName}`;
stat(slidePath)
    .then(
        () => { throw new Error("Slide directory already exists."); },
        () => mkdir(slidePath))
    .then(() => ({
        slidePath,
        slideName,
        componentName: upperFirst(camelCase(slideName))
    }))
    .then(details => promise
        .all([
            writeFile(`${details.slidePath}/${details.slideName}.component.ts`, componentTemplate(details)),
            writeFile(`${details.slidePath}/${details.slideName}.component.html`, htmlTemplate(details)),
            writeFile(`${details.slidePath}/${details.slideName}.component.scss`, scssTemplate(details)),
        ])
        .then(() => details)
    )
    .catch((err) => {
        console.log(err);
    });

function componentTemplate(details) {
    return `
import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: '${details.slideName}',
    styleUrls: ['${details.slideName}.component.css'],
    templateUrl: '${details.slideName}.component.html'
})
export class ${details.componentName}Component { }
`;
}

function htmlTemplate(details) {
    return `
<div>
    <h1>${details.slideName}</h1>
</div>
`;
}

function scssTemplate(details) {
    return `
// ${details.slideName}
     
div {
}
`;
}
