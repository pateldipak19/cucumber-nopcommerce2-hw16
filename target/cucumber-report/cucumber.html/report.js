$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "\r\nAs a user I want to shop computer products successfully",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4015373400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to arrange products in \"Name: A to Z\" alphabetical order",
  "description": "",
  "id": "computer-test;user-should-able-to-arrange-products-in-\"name:-a-to-z\"-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sanity"
    },
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I mouse hover on computer top tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select sort by position \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I add build your own computer to cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should be able to verify \"Build your own computer\" page title text",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I select RAM \"8GB [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click radio button to select HDD",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click radio button to select OS",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click check box to select Software",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should be able to verify total price of \"$1,470.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I should be able to add the computer product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should be able to see green bar message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 141463100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepdefs.iMouseHoverOnComputerTopTab()"
});
formatter.result({
  "duration": 243526800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 28
    }
  ],
  "location": "ComputerStepdefs.iMouseHoverAndClickOn(String)"
});
formatter.result({
  "duration": 3271398100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 27
    }
  ],
  "location": "ComputerStepdefs.iSelectSortByPosition(String)"
});
formatter.result({
  "duration": 1166908900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepdefs.iAddBuildYourOwnComputerToCart()"
});
formatter.result({
  "duration": 1176698500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 28
    }
  ],
  "location": "ComputerStepdefs.iShouldBeAbleToVerifyPageTitleText(String)"
});
formatter.result({
  "duration": 2418901100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerStepdefs.iSelectProcessor(String)"
});
formatter.result({
  "duration": 1152149500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerStepdefs.iSelectRAM(String)"
});
formatter.result({
  "duration": 1143126600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepdefs.iClickRadioButtonToSelectHDD()"
});
formatter.result({
  "duration": 1088910300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepdefs.iClickRadioButtonToSelectOS()"
});
formatter.result({
  "duration": 1087163900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepdefs.iClickCheckBoxToSelectSoftware()"
});
formatter.result({
  "duration": 18200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,470.00",
      "offset": 43
    }
  ],
  "location": "ComputerStepdefs.iShouldBeAbleToVerifyTotalPriceOf(String)"
});
formatter.result({
  "duration": 1048432600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStepdefs.iShouldBeAbleToAddTheComputerProductToCart()"
});
formatter.result({
  "duration": 1096194600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 43
    }
  ],
  "location": "ComputerStepdefs.iShouldBeAbleToSeeGreenBarMessage(String)"
});
formatter.result({
  "duration": 1044083800,
  "status": "passed"
});
formatter.after({
  "duration": 761487000,
  "status": "passed"
});
});