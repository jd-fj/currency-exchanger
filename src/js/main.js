import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange-service.js';
// import ImageService from './image-service.js';
// import ImgSearch from './img-search.js';

async function getExchangeRates() {
  const response = await ExchangeService.getExchangeRates();
  getElements(response);
}

function getElements(response) {
  if (response is working) {
    $('#id').text(`${response.json.WhatToDisplay}`)
  } else {
    $('#errorId').text(`${response.message.fromError}`)
  }
}

$(document).ready(function() {
  event.preventDefault();
  $('#searchBox').submit(function(event){
    getExchangeRates();
  });
});

// response.conversion_rates.{currency_code}