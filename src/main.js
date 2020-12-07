import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';

function clearFields() {
  $('#selectedCurrency').empty();
  $('#selectedAmount').empty();
  $('#conversionRate').empty();
  $('#finalAmount').empty();
  $('#showErrors').empty();
}

function getElements(response) {
  if (response.conversion_rates) {
    let baseCurrency = $('#baseCurrency').val();
    let destinationCurrency = $('#destinationCurrencySelect').val();
    let baseAmount = $("#baseAmount").val();
    let conversionRate = (response.conversion_rates[destinationCurrency]);
    let finalAmount = (baseAmount * conversionRate).toFixed(2);
    $('#selectedCurrency').append(`Base Currency: ${baseCurrency}`);
    $('#selectedAmount').append(`Base Amount: ${baseAmount}`);
    $('#conversionRate').append(`Converstion rate: ${conversionRate}`);
    $('#finalAmount').append(`Final total: ${finalAmount} in ${destinationCurrency}`);
  } else if (response.result == "error") {
    $('#showErrors').text(`${response.result}: We do not support this currency!`);
  } else {
    $('#showErrors').text(`Error message: ${response}`);
  }
}

async function getExchangeRates(baseCurrency) {
  const response = await ExchangeService.getExchangeRates(baseCurrency);
  getElements(response);
}

$(document).ready(function() {
  $('#btn-submit').click(function(event) {
    event.preventDefault();
    clearFields();
    let baseCurrency = $('#baseCurrency').val();
    getExchangeRates(baseCurrency);
  });
});