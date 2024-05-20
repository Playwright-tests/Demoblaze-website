
const config = {

        "format": ['progress-bar'],

        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "paths": [
            "src/test/features/"
        ],
        
        "dryRun": false,
        "require": [
            "src/**/*.ts"

        ],
        "requireModule": [
            "ts-node/register"
        ],
        "parallel": 1,

        "worldParameters": { 
            "baseURL": "https://www.demoblaze.com/index.html",
            "shoppingCart": "https://www.demoblaze.com/cart.html",
            "nexus6Link": "Nexus 6",
            "SamsungGalaxyS6Link": "Samsung galaxy s6"
        }
    }

config.format.push("file://C:/Projekty/Testowanie/Demoblaze/reporter.js");

export default config;