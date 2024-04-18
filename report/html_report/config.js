report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_1024px.png",
        "test": "../bitmaps_test/20240418-123742/Entire_document_1024px.png",
        "selector": "document",
        "fileName": "Entire_document_1024px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -16
          },
          "rawMisMatchPercentage": 0.5337801846590909,
          "misMatchPercentage": "0.53",
          "analysisTime": 42
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_720px.png",
        "test": "../bitmaps_test/20240418-123742/Entire_document_720px.png",
        "selector": "document",
        "fileName": "Entire_document_720px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -16
          },
          "rawMisMatchPercentage": 0.7591540404040404,
          "misMatchPercentage": "0.76",
          "analysisTime": 39
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Big_search_bar_data-qa_big_1024px.png",
        "test": "../bitmaps_test/20240418-123742/Big_search_bar_data-qa_big_1024px.png",
        "selector": "[data-qa=\"big\"]",
        "fileName": "Big_search_bar_data-qa_big_1024px.png",
        "label": "Big search bar data-qa_big",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.5654761904761905,
          "misMatchPercentage": "0.57",
          "analysisTime": 25
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Big_search_bar_data-qa_big_720px.png",
        "test": "../bitmaps_test/20240418-123742/Big_search_bar_data-qa_big_720px.png",
        "selector": "[data-qa=\"big\"]",
        "fileName": "Big_search_bar_data-qa_big_720px.png",
        "label": "Big search bar data-qa_big",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.8096590909090909,
          "misMatchPercentage": "0.81",
          "analysisTime": 23
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Small_search_bar_data-qa_small_1024px.png",
        "test": "../bitmaps_test/20240418-123742/Small_search_bar_data-qa_small_1024px.png",
        "selector": "[data-qa=\"small\"]",
        "fileName": "Small_search_bar_data-qa_small_1024px.png",
        "label": "Small search bar data-qa_small",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 1.3298374905517762,
          "misMatchPercentage": "1.33",
          "analysisTime": 21
        },
        "diffImage": "../bitmaps_test/20240418-123742/failed_diff_Small_search_bar_data-qa_small_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Small_search_bar_data-qa_small_720px.png",
        "test": "../bitmaps_test/20240418-123742/Small_search_bar_data-qa_small_720px.png",
        "selector": "[data-qa=\"small\"]",
        "fileName": "Small_search_bar_data-qa_small_720px.png",
        "label": "Small search bar data-qa_small",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 1.904085497835498,
          "misMatchPercentage": "1.90",
          "analysisTime": 14
        },
        "diffImage": "../bitmaps_test/20240418-123742/failed_diff_Small_search_bar_data-qa_small_720px.png"
      },
      "status": "fail"
    }
  ]
});