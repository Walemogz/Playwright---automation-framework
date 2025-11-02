# 🎯 Playwright End-to-End Test Automation Framewo This project contains an end-to-end automation framework built using **Playwright** for UI testing.  It automates test scenarios for the [SauceDemo](https://www.saucedemo.com) web application
Features 
✅ Page Object Model (POM) design pattern ,
✅ Supports multiple browsers (Chromium, Firefox, WebKit)  
✅ Environment-based configuration (`.env` or Playwright config) 
✅ Data-driven test capability  
✅ Automatic HTML, trace, and video reporting 
✅ Continuous Integration with GitHub Action


## 🧩 Folder Structure
Project/
│
├── tests/ # Test scripts
│ └── Saucedemo.spec.js
│
├── pages/ # Page Object Models
│ ├── loginPage.js
│ ├── productPage.js
│ └── cartPage.js
│
├── utils/ # Helpers, data files, config handlers
│
├── playwright.config.js # Global Playwright configuration
│
├── package.json # Dependencies and test commands
│
├── .gitignore # Ignored files (node_modules, reports, etc.)
│
└── README.md # Project documentation

yaml
Copy code


## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
Install dependencies

bash
Copy code
npm install
Install browsers

bash
Copy code
npx playwright install


Running Tests
Run all tests
npx playwright test

Run a specific test file
npx playwright test tests/Saucedemo.spec.js

Run in headed mode (see browser UI)
npx playwright test --headed

Run with a specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox

 ReportTest
After execution, open the HTML report:

npx playwright show-report


Or find it under:

/playwright-report/index.html


Continuous Integration (GitHub Actions)

This framework supports CI via GitHub Actions.
Example workflow: .github/workflows/playwright.yml

name: Playwright Tests

on:
  push:
    branches: [ main ]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Run Playwright tests
        run: npx playwright test --reporter=html


        📄 Reporting & Artifacts

Test results → /playwright-report

Trace files → /test-results

Screenshots & videos on failure

You can configure these in playwright.config.js.


Author
Monsuru Olawale Mogaji
Automation Test Engineer
💼 Framework: Playwright + JavaScript
🌐 Project: SauceDemo E2E Purchase Flow
