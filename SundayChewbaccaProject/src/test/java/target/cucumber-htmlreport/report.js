$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EbayBrandOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Brand Outline",
  "description": "\r\nDescription: User should able to filter items by Brand",
  "id": "ebay-brand-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"\u003cBrand\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"\u003cBrand\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;",
  "rows": [
    {
      "cells": [
        "Items",
        "Brand"
      ],
      "line": 15,
      "id": "ebay-brand-outline;filter-items-by-brand;;1"
    },
    {
      "cells": [
        "Shoes",
        "Nike"
      ],
      "line": 16,
      "id": "ebay-brand-outline;filter-items-by-brand;;2"
    },
    {
      "cells": [
        "Shirts",
        "Adidas"
      ],
      "line": 17,
      "id": "ebay-brand-outline;filter-items-by-brand;;3"
    },
    {
      "cells": [
        "Pants",
        "Unbranded"
      ],
      "line": 18,
      "id": "ebay-brand-outline;filter-items-by-brand;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6081757800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 837303200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 10856352200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 2641428700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 10110035200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[2][contains(text(), \u0027shoes\u0027)]\"}\n  (Session info: chrome\u003d107.0.5304.107)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-2LPGSEH\u0027, ip: \u0027192.168.1.96\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\GSMKIB~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60625}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fe7e28978613efaed6aaa78be0f6ea19\n*** Element info: {Using\u003dxpath, value\u003d//span[2][contains(text(), \u0027shoes\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbaySearchResultActions.verifyBrandItems(EbaySearchResultActions.java:42)\r\n\tat upskill.ebay.stepDef.EbaySearchResultSteps.item_list_should_have_products_of(EbaySearchResultSteps.java:23)\r\n\tat ✽.Then Item list should have products of \"Nike\"(EbayBrandOutline.feature:12)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1890893900,
  "status": "passed"
});
formatter.before({
  "duration": 3889018000,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 23569600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 6834981500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 4208286200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 326090700,
  "status": "passed"
});
formatter.after({
  "duration": 1175605800,
  "status": "passed"
});
formatter.before({
  "duration": 3603699300,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 20352400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-246"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have products of \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 5355285100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultSteps.filter_by(String)"
});
formatter.result({
  "duration": 3819433900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultSteps.item_list_should_have_products_of(String)"
});
formatter.result({
  "duration": 480028700,
  "status": "passed"
});
formatter.after({
  "duration": 1067672400,
  "status": "passed"
});
formatter.uri("EbayCountryOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Country Outline",
  "description": "\r\nDescription: User should able to filter items by Country",
  "id": "ebay-country-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-247"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Filter items by Country",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Region of Manufacture by \"\u003cCountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should be from \"\u003cCountry\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country;",
  "rows": [
    {
      "cells": [
        "Items",
        "Country"
      ],
      "line": 15,
      "id": "ebay-country-outline;filter-items-by-country;;1"
    },
    {
      "cells": [
        "Shoes",
        "China"
      ],
      "line": 16,
      "id": "ebay-country-outline;filter-items-by-country;;2"
    },
    {
      "cells": [
        "Shirts",
        "Bangladesh"
      ],
      "line": 17,
      "id": "ebay-country-outline;filter-items-by-country;;3"
    },
    {
      "cells": [
        "Pants",
        "United States"
      ],
      "line": 18,
      "id": "ebay-country-outline;filter-items-by-country;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3816138800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 15243200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Filter items by Country",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-247"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Region of Manufacture by \"China\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should be from \"China\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 6258339900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 905750600,
  "status": "passed"
});
formatter.before({
  "duration": 3564809100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 39394600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Filter items by Country",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-247"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Region of Manufacture by \"Bangladesh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should be from \"Bangladesh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 6686595300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1046490000,
  "status": "passed"
});
formatter.before({
  "duration": 3678916700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 13054500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Filter items by Country",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@us-247"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Region of Manufacture by \"United States\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should be from \"United States\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 5012838200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 895145900,
  "status": "passed"
});
formatter.uri("EbaySearchShirt.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-15"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 3457850900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 20773100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Search for Shirt",
  "description": "",
  "id": "ebay-search-functionality;search-for-shirt",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Search for shirt",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Item list should have only shirt related products",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 891961500,
  "status": "passed"
});
formatter.uri("EbaySearchShoes.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Functionality",
  "description": "",
  "id": "ebay-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-15"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 3427117500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Shoes",
  "description": "",
  "id": "ebay-search-functionality;search-for-shoes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for shoes",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only shoes related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 7741200,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.search_for_shoes()"
});
formatter.result({
  "duration": 6579445800,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.item_list_should_have_only_shoes_related_products()"
});
formatter.result({
  "duration": 1667365600,
  "status": "passed"
});
formatter.after({
  "duration": 1098904000,
  "status": "passed"
});
formatter.uri("EbaySummaryMouseHover.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Summary Mousehover",
  "description": "",
  "id": "ebay-summary-mousehover",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3517080700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Ebay Summary Mousehover",
  "description": "",
  "id": "ebay-summary-mousehover;ebay-summary-mousehover",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Mouse Hover to MyEbay Summary",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Summary",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 17699000,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.mouse_Hover_to_MyEbay_Summary()"
});
formatter.result({
  "duration": 3191769400,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.click_on_Summary()"
});
formatter.result({
  "duration": 4797308900,
  "status": "passed"
});
formatter.after({
  "duration": 1000326500,
  "status": "passed"
});
formatter.uri("Shettyiframe.feature");
formatter.feature({
  "line": 2,
  "name": "Rahul Shetty iframe practice",
  "description": "",
  "id": "rahul-shetty-iframe-practice",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@SKYW-20"
    },
    {
      "line": 1,
      "name": "@E2E"
    }
  ]
});
formatter.before({
  "duration": 4274189000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Iframe Practice",
  "description": "",
  "id": "rahul-shetty-iframe-practice;iframe-practice",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Shetty Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on iFrame Home",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "It should reload iframe homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ShettyHomepageSteps.open_Shetty_Homepage()"
});
formatter.result({
  "duration": 10821982200,
  "status": "passed"
});
formatter.match({
  "location": "ShettyHomepageSteps.click_on_iFrame_Home()"
});
formatter.result({
  "duration": 28800,
  "status": "passed"
});
formatter.match({
  "location": "ShettyHomepageSteps.it_should_reload_iframe_homepage()"
});
formatter.result({
  "duration": 24800,
  "status": "passed"
});
formatter.after({
  "duration": 1102912200,
  "status": "passed"
});
});