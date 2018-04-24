$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sampleFeatures.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@evenOddTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 23,
  "name": ": Even Odd Test",
  "description": "",
  "id": "title-of-your-feature;:-even-odd-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "test \u003cvalue\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "check \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;:-even-odd-test;",
  "rows": [
    {
      "cells": [
        "value",
        "status"
      ],
      "line": 28,
      "id": "title-of-your-feature;:-even-odd-test;;1"
    },
    {
      "cells": [
        "4",
        "success"
      ],
      "line": 29,
      "id": "title-of-your-feature;:-even-odd-test;;2"
    },
    {
      "cells": [
        "7",
        "fail"
      ],
      "line": 30,
      "id": "title-of-your-feature;:-even-odd-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": ": Even Odd Test",
  "description": "",
  "id": "title-of-your-feature;:-even-odd-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@evenOddTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "test 4",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "check success",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 5
    }
  ],
  "location": "EvenOddCheckHelper.test(int)"
});
formatter.result({
  "duration": 235640399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 6
    }
  ],
  "location": "EvenOddCheckHelper.checkStatus(String)"
});
formatter.result({
  "duration": 5914438,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": ": Even Odd Test",
  "description": "",
  "id": "title-of-your-feature;:-even-odd-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@evenOddTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "test 7",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "check fail",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 5
    }
  ],
  "location": "EvenOddCheckHelper.test(int)"
});
formatter.result({
  "duration": 134318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fail",
      "offset": 6
    }
  ],
  "location": "EvenOddCheckHelper.checkStatus(String)"
});
formatter.result({
  "duration": 184297,
  "status": "passed"
});
});