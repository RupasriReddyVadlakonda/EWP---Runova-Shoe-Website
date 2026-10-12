# StepUp Shoes - Web Technologies Lab (Weeks 1-14)

An online shoe store built step by step: HTML, CSS, JavaScript, XML/DTD, Fetch API, TypeScript and Angular.

| Week | Folder | Topic |
|------|--------|-------|
| 1 | `week1-static-pages` | Static Home and Login pages |
| 2 | `week2-registration` | Student Registration form with basic HTML validation |
| 3 | `week3-css` | Internal, external and inline CSS applied to Weeks 1 and 2 pages |
| 4 | `week4-js-validation` | JavaScript validation of the registration form |
| 5 | `week5-catalogue` | Catalogue page (HTML + CSS + JavaScript) with search, filter, sort and cart |
| 6 | `week6-xml-dtd` | Shoe information in XML validated by a DTD |
| 7 | `week7-review` | Review and Skill Test-1 |
| 8 | `week8-fetch-text` | Fetch API: load text asynchronously |
| 9 | `week9-fetch-json-xml` | Fetch API: parse JSON and XML responses |
| 10 | `week10-fetch-post` | Fetch API: send data using POST |
| 11 | `week11-typescript` | TypeScript classes, interfaces and functions |
| 12-14 | `week12-14-angular-shoe-app` | Angular components, data binding, directives, forms, routing, services |

## How to run

- **Weeks 1-5:** open the `.html` files in a browser.
- **Week 6:** open `shoes.xml` in VS Code with an XML extension to validate it against `shoes.dtd`.
  Command line: `xmllint --noout --valid shoes.xml`
- **Weeks 8-10:** use the VS Code **Live Server** extension (`fetch()` does not work over `file://`).
  Alternative: run `npx serve` or `python -m http.server` inside the folder.
- **Week 11:**
  ```
  cd week11-typescript
  npx tsc shoestore.ts
  node shoestore.js
  ```
- **Weeks 12-14 (Angular 19):**
  ```
  cd week12-14-angular-shoe-app
  npm install
  npm start
  ```
  Open http://localhost:4200

## Push to GitHub

1. Create an empty repository on github.com (no README), copy its URL.
2. In this folder run:
   ```
   git init
   git add .
   git commit -m "StepUp Shoes: weeks 1-14"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
