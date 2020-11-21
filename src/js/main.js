import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././css/styles.css';
import ExchangeService from './exchange-service.js';

function getElements(response, type) {
  if (response.conversion_rates) {
    // console.log(Object.values(response.conversion_rates))
    for (let key of Object.entries(response.conversion_rates)) {
      if (key[0] === type) {
        console.log(key);
        return key
      }
    }
    $('#results').append(`Conversion rate ${response}`);
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
    let baseAmount = $("#baseAmount").val();  
    getExchangeRates(baseCurrency);
    $('#selectedAmount').append(baseAmount)
    $('#selectedCurrency').append(baseCurrency)

  });
});

// response.conversion_rates.currency_code