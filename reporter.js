const { CucumberJSAllureFormatter, AllureRuntime } = require("allure-cucumberjs");
const path = require("path");

class Reporter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(
      options,
      new AllureRuntime({
        resultsDir: path.resolve(__dirname, "allure-results"),
      }),
      {
          labels: [
            {
              pattern: [/@feature:(.*)/],
              name: 'epic'
            },
            {
              pattern: [/@severity:(.*)/],
              name: 'severity'
            }
          ]
      },
    );
  }
}

module.exports = Reporter;