module.exports = {
    default: {
        tags: process.env.npm_config_TAGS || "",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "tests/features"
        ],
        dryRun: false,
        require: [
            "tests/steps/*.ts"
        ],
        format: [
            "progress-bar",
            "html:reports/cucumber.html",
            "json:reports/cucumber.json"
        ],
        requireModule: [
            "ts-node/register"
        ]
    }
}