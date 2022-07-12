const bitcoinBtn = document.querySelector(".bitcoin");
const ethBtn = document.querySelector(".eth");
const rippleBtn = document.querySelector(".ripple")
const binanceUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
const historyUrl = document.querySelector(".url")
let priceIndex = document.querySelector(".add-crpyto-price")
let cryptoArray = [];