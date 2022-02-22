// ============================================================================================= //
//                                             TESTS                                             //
// ============================================================================================= //

const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

/**
 *
 * @param url
 * @param prev
 * @param done
 * @returns {{file: string}}
 */
function importer(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }

    return {
        file: url
    };
}

describe('Sass', () => {
    // Find all the Sass files that end in `*.spec.scss` in any directory of this project.
    // I use path.resolve because True requires absolute paths to compile test files.
    const sassTestFiles = glob.sync(path.resolve(process.cwd(), 'packages/**/*.spec.scss'));

    // Run True on every file found with to describe and its methods provided
    sassTestFiles.forEach((file) =>
        sassTrue.runSass({
            importer,
            file,
            includePaths: [
                './node_modules',
                './packages/breakpoint/node_modules',
                './packages/css/node_modules',
                './packages/direction/node_modules',
                './packages/em/node_modules',
                './packages/grid/node_modules',
                './packages/property/node_modules',
                './packages/rem/node_modules',
                './packages/strip-unit/node_modules'
            ]
        }, {
            describe,
            it
        })
    );
});
