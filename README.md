
# Currency Exchanger

#### A brief description, 11.20.2020

#### By _**Taylor Delph**_

## 🚩 Description

This is the full description that should contain what this project does, what I employed to do so, and other important info for someone who has no clue what they're looking at yet. 

## Stretch Goals
- include your goals for the project here

## 🔧 Setup/Installation Requirements

### Necessary Specifications

- To run this project locally you will need to have node. You can check if you have node by running `node -v` in the command line. If you do not have node please find more information and download [here](https://nodejs.org/en/download/)

- You will also need to have a NASA API Key. To get this you will need to request a Key [here](https://api.nasa.gov/).

### Open Locally

#### Opening using GitHub Desktop:
Go to my GitHub repository here, [](), and click on the green 'Code' button to clone the repository, Open with GitHub Desktop OR Download the ZIP file

#### To clone using the Command Line:
1. Push the green 'Clone' button and copy the URL.
2. Open Terminal or GitBash and input the command: `git clone {LINK}`
3. To view the code, open the copied directory with Visual Studio Code or your preferred text editor by inputing the command `code .` in your terminal.
4. To view the website, open index.html in Chrome or your preferred browser.

### Run environment:

1. Run `npm install` in terminal.
2. Create a `.env` file in the root directory.
3. Save your API key in the `.env` by inputting `API_KEY={Your_API_Key}`. There should be no spaces in here.
4. Input `npm run start` to view the live server for the application.

## 🐛 Known Bugs

_No known bugs at this time_

## 📫 Support and contact details

Please contact me via email:
- [Taylor's email](mailto:taylulzcode@gmail.com)

## 🛠️ Technologies Used

This project uses the following technologies:

- JavaScript
- JQuery
- HTML
- CSS
- Bootstrap
- GitHub
- VS Code
- webpack
- npm 

## 📘 License

MIT License

Copyright (c) 2020 Taylor Delph

## Specifications
| Test | Input | Output |
|--------|:------:|:-----:|
| **Describe ExchangeService:** |||
| Should correctly return json object if call is successful | standard endpoint | world currency exchange rates |
| Should correctly return error if call is unsuccessful | standard endpoint | error |
| Should correctly use user selected base currency for api call | USD | http://enpoint_USD |
| Should correctly display user selected base currency & amount | 100 USD | 100 USD |
| Should correctly divide user selected base currency and amount by Destination Currency exchange rate | 100 USD | 109.67 CHF |
| 



Psudo Testing
- user enters the amount of us dollars
- user selects what currency they'd like to exchange to
- user submits info and sees amount converted from USD to selected currency
- if destination currency is not represented, display to user that currency is not avail

to do this I'm going to:
Create an api key
Get api key working in Postman
Make a class for a calculator (ExchangeService) just like my galactic age calculator
Contain a fetch API call 
Import working Exchange Rate calculator into main.js
Create the flow of async operations in main.js
USD amount divided by the Destination Currency exchange rate number euqals the amount of currency in Destination Currency
Create the user input and currency selection in the html
Test the UI
