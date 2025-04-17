//ITMD 541 Saketh Reddy Gurram
// DOM Elements
const billInput = document.getElementById("bill_total");
const tipInput = document.getElementById("tip");
const billWithTaxOutput = document.getElementById("bill_total_withTax");
const currencySelect = document.getElementById("currency");
const tipConvertedOutput = document.getElementById("converted");
const totalConvertedOutput = document.getElementById("converted_tax");
const errorMessage = document.getElementById("error");

// Constants
const TAX_RATE = 11; // 11%

// Currency conversion rates
const conversionRates = {
    Euro: 0.95,
    Rupee: 85,
    Dollars: 1
};

// Handle input change
function handleInputChange() {
    const billValue = parseFloat(billInput.value);

    if (billInput.value === "") {
        errorMessage.innerText = "";
        return;
    }

    if (isNaN(billValue) || billValue < 0) {
        errorMessage.innerText = "Please enter a valid positive number for the bill total.";
        return;
    }

    errorMessage.innerText = "";

    // Calculate tax and bill total
    const taxAmount = (billValue * TAX_RATE) / 100;
    const billWithTax = billValue + taxAmount;
    billWithTaxOutput.value = billWithTax.toFixed(2);

    // Calculate tip
    const tipPercent = parseFloat(tipInput.value);
    const tipAmount = isNaN(tipPercent) || tipPercent < 0 ? 0 : (billWithTax * tipPercent) / 100;

    // Convert currency
    const selectedCurrency = currencySelect.value;
    const rate = conversionRates[selectedCurrency];

    const convertedTip = tipAmount * rate;
    const convertedTotal = (billWithTax * rate) + convertedTip;

    tipConvertedOutput.value = convertedTip.toFixed(2);
    totalConvertedOutput.value = convertedTotal.toFixed(2);
}

// Attach event listeners
billInput.addEventListener("input", handleInputChange);
tipInput.addEventListener("input", handleInputChange);
currencySelect.addEventListener("input", handleInputChange);
