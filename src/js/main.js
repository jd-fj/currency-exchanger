import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././css/styles.css';
import ExchangeService from './exchange-service.js';


function getElements(response) {
  if (response.conversion_rates) {
    $('#results').text(`Conversion rate ${response.conversion_rates.USD}`);
  } else {
    $('#showErrors').text(`Something went wrong`);
  }
}

async function getExchangeRates() {
  const response = await ExchangeService.getExchangeRates();
  getElements(response);
}

$(document).ready(function() {
  $('#btn-submit').click(function(event) {
    event.preventDefault();
    getExchangeRates();

  });
});

// response.conversion_rates.currency_code