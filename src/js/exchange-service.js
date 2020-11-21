// This function will fetch the echange rates in JSON format
export default class ExchangeService {
  static async getExchangeRates(baseCurrency) {
    try { 

      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCurrency}`);
      if (!response.ok) {
        throw Error(response.statusText);
      } 
      return response.json(); 
    } catch(error) {
      return error.message;
    } 
  }
}

// USD amount divided by the Destination Currency exchange rate number euqals the amount of currency in Destination Currency

// response.conversion_rates.{currency_code}