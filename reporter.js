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
              pattern: [/@owner:(.*)/],
              name: 'owner'
            },
            {
              pattern: [/@epic:(.*)/],
              name: 'epic'
            },
            {
              pattern: [/@severity:(.*)/],
              name: 'severity'
            }
          ],
          links: [
            {
              type: 'issue',
              pattern: [/@issue:(.*)/]
            }
          ]
      },
    );
  }
}

module.exports = Reporter;