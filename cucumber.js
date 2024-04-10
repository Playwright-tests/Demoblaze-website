const path = require("path");

module.exports = {

    "default": {

        format: ["progress-bar"],

        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "paths": [
            "src/test/features/loginForm.feature"
        ],
        
        "dryRun": false,
        "require": [
            "src/test/steps/loginForm.ts"
        ],
        "requireModule": [
            "ts-node/register"
        ],
        "parallel": 1,
        "tags": "@inputs"
    }
}