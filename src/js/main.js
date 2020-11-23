import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././css/styles.css';
import ExchangeService from './exchange-service.js';

function getElements(response) {
  let baseCurrency = $('#baseCurrency').val();
  let destinationCurrency = $('#destinationCurrencySelect').val();
  let baseAmount = $("#baseAmount").val();
  let conversionRate = (response.conversion_rates[destinationCurrency]);
  let finalAmount = (baseAmount / response.conversion_rates[destinationCurrency]).toFixed(2);

  if (response.conversion_rates) {
    $('#selectedCurrency').append(`Base Currency: ${baseCurrency}`);
    $('#selectedAmount').append(`Base Amount: ${baseAmount}`);
    $('#conversionRate').append(`Converstion rate: ${conversionRate}`);
    $('#finalAmount').append(`Final total: ${finalAmount} in ${destinationCurrency}`);
  } else {
    $('#showErrors').text(`Something went wrong`);
  } 
}

async function getExchangeRates(baseCurrency) {
  const response = await ExchangeService.getExchangeRates(baseCurrency);
  getElements(response);
}

$(document).ready(function() {
  $('#btn-submit').click(function(event) {
    event.preventDefault();
    let baseCurrency = $('#baseCurrency').val();
    getExchangeRates(baseCurrency);

  });
});

// response.conversion_rates.currency_code
// response.conversion_rates[baseCurrency]