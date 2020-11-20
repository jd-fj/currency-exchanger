import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././css/styles.css';
import ExchangeService from './exchange-service.js';


function getElements(response) {
  if (response.conversion_rates) {
    $('#results').text(`Conversion rate ${response.conversion_rates}`);
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
  });
});

// response.conversion_rates.currency_code