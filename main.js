#! /usr/bin/env node
import inquirer from "inquirer";
const baseCurrency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    DIN: 45
};
let userInput = await inquirer.prompt([
    {
        name: "fromCurrency",
        message: "Select your currency: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "DIN"]
    },
    {
        name: "toCurrency",
        message: "Select your currency to which convert: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "DIN"]
    },
    {
        name: "amount",
        message: "Enter your amount: ",
        type: Number
    }
]);
let fromAmount = baseCurrency[userInput.fromCurrency];
let toAmount = baseCurrency[userInput.toCurrency];
let userAmount = userInput.amount;
let baseAmount = userAmount / fromAmount;
let convertedAmount = baseAmount * toAmount;
let convertedAmountAfterFixed = convertedAmount.toFixed(2);
console.log(`Your amount ${userAmount} after conversion is ${convertedAmountAfterFixed}`);
