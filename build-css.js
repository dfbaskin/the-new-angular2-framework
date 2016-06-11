
var Promise = require('bluebird');
var postcss = require('postcss');
var chokidar = require('chokidar');

var postCssPlugins = [
    require('precss')()
];

var glob = Promise.promisify(require('glob'));
var readFile = Promise.promisify(require('fs').readFile);
var writeFile = Promise.promisify(require('fs').writeFile);

var watchFiles = false;
var scssFileGlobSpecs = [
    'css/**/*.scss',
    'app/**/*.scss'
];

process.argv.slice(2).forEach(function(arg) {
    var r1 = /^--watch$/i;
    var r2 = /^-w$/i;
    if(r1.test(arg) || r2.test(arg)) {
        watchFiles = true;
    }
});

Promise
    .all(scssFileGlobSpecs.map(function(globSpec) {
        return glob(globSpec);
    }))
    .then(function(result) {
        return result.reduce(function(list, scssFiles) {
            return list.concat(scssFiles);
        }, []);
    })
    .then(buildCssFiles)
    .then(function() {
        console.log("Finished building CSS files.");
        if(watchFiles) {
            watchCssFiles();
        }
    })
    .catch(function(err) {
        console.error(err);
    });

function buildCssFiles(scssFiles) {
    return Promise
        .all(scssFiles.map(function(scssFile) {
            return readFile(scssFile, "utf8").then(function(content) {
                return {
                    scssFile: scssFile,
                    cssFile: scssFile.replace(/\.scss$/, ".css"),
                    content: content
                };
            });
        }))
        .then(function(files) {
            return Promise.all(
                files.map(function(file) {
                    return postcss(postCssPlugins)
                        .process(file.content, {
                            from: file.scssFile,
                            to: file.cssFile
                        });
                }));
        })
        .then(function(results) {
            return Promise.all(
                results.map(function(result) {
                    var fileName = result.opts.to;
                    return writeFile(fileName, result.css, 'utf8')
                        .then(function() {
                            if(result.map) {
                                return writeFile(fileName + '.map', result.map, 'utf8');
                            }
                        });
                }));
        });
}

function watchCssFiles() {

    var watcher = chokidar.watch(scssFileGlobSpecs, {
        persistent: true,
        ignoreInitial: true
    });

    console.log("Watching for changes to CSS files ...");
    watcher
        .on('add', function(path) {
            console.log("Added: " + path);
            buildCssFiles([path]);
        })
        .on('change', function(path) {
            console.log("Changed: " + path);
            buildCssFiles([path]);
        });
}
