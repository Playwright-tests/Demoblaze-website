
const config = {

        "format": ['progress-bar'],

        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "paths": [
            "src/test/features/shoppingCart.feature"
        ],
        
        "dryRun": false,
        "require": [
            "src/test/steps/shoppingCart.ts"
        ],
        "requireModule": [
            "ts-node/register"
        ],
        "parallel": 1,
}

//config.format.push("file://C:/Projekty/Testowanie/Demoblaze/reporter.js");

export default config;