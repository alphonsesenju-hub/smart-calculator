# SmartCalc Australia — Website Prototype

A complete, responsive Australian finance and small-business calculator website built with Next.js 15, React 19, TypeScript and CSS. No API keys, accounts or paid services are needed to run locally.

## Included
- Designed homepage with a premium green-and-cream financial dashboard aesthetic
- Five **working** calculators: GST, mortgage, salary/take-home, profit margin, hourly/billable rate
- Searchable calculator cards, mobile navigation, supporting information pages
- Client-side calculations: inputs are not transmitted to a server
- No live advertising, tracking, payment processing or database

## Windows setup
1. Install Node.js LTS from https://nodejs.org/ if needed.
2. Unzip the project to a folder, for example `C:\Projects\smartcalc-australia`.
3. Open the folder in VS Code or PowerShell.
4. Run:
   ```powershell
   npm install
   npm run dev
   ```
5. Open http://localhost:3000 in your browser.
6. Stop with Ctrl+C.

## Publishing later
- You can deploy with a compatible Next.js hosting provider after checking its commercial-use terms and pricing.
- Purchase a domain only when ready. Do not apply for AdSense until content, site ownership, policies and eligibility are ready.
- Replace draft contact, privacy and terms pages with accurate reviewed content before public launch.
- Add official-source citations, detailed original explanations, content QA, SEO and accessibility testing before monetisation.

## Important calculation limitations
- **Salary:** Uses 2025–26 Australian resident marginal income tax rates (0%, 16%, 30%, 37%, 45%), a flat indicative 2% Medicare levy and 12% employer super. Excludes HELP/HECS, offsets, Medicare levy thresholds, private health adjustments, salary packaging and other circumstances. Not a PAYG withholding calculator. Verify the tax-year assumptions before publishing.
- **GST:** Standard 10% rate; not all supplies are taxable.
- **Mortgage:** Assumes a constant interest rate, monthly compounding and payments, no fees. Extra payments modelled monthly; lender outcomes may differ.
- **Profit margin:** Simple gross profit; excludes overhead and taxes.
- **Hourly rate:** Planning model; assumes entered working hours are billable and applies a user-selected overhead and target margin.

This is a functional **prototype**, not a financial advice service or a production-compliant finance publication. Test calculations independently and review legal, privacy and financial content before public use.

## Cost
Development and local testing: A$0 with a computer and internet. Optional domain and commercial hosting may add costs. No credentials are present in this project.
