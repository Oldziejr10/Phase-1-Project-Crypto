const bitcoinBtn = document.querySelector(".bitcoin");
const ethBtn = document.querySelector(".eth");
const rippleBtn = document.querySelector(".ripple")
const binanceUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
const historyUrl = document.querySelector(".url")
let priceIndex = document.querySelector(".add-crpyto-price")
let cryptoArray = [];

const alertMsg = function (event) {
    alert('PLEASE DO NOT USE THIS INFORMATION TO MAKE INVESTING DECISIONS')
}

const historyRed = function (event) {{
    event.target.style.color = "red";
}

const historyNormal = function (event) {
    event.target.style.color = "black"
}

historyUrl.addEventListener("mouseover", historyRed);

historyUrl.addEventListener("mouseout", historyNormal);

window.addEventListener('load', alertMsg);

bitcoinBtn.addEventListener('click', bitcoinClick)
rippleBtn.addEventListener('click', rippleClick)
ethBtn.addEventListener('click', ethClick)

function getCoinPrice() {

    fetch(binanceUrl)
        .then(response => response.json())
        .then(data => {{ 
            let cryptoData = data
            for (let i = 0; i < cryptoData.length; i++) {
                if (cryptoData[i].id == 'bitcoin' || cryptoData[i].id == 'ethereum' || cryptoData[i].id == 'ripple') {
                    let pair = {'name': cryptoData[i].id, 'current_price': cryptoData[i].current_price}
                    cryptoArray.push(pair);
                }
        };
    })

}


getCoinPrice();

function bitcoinClick() {{
    priceIndex.innerHTML = '';
    let price = document.createElement('div');
    let coin = cryptoArray.find(element => element.name == 'bitcoin')
    price.innerHTML = `
        <h2> Bitcoin Price: $${coin.current_price} </h2>`
    priceIndex.appendChild(price);
}
function rippleClick() {
    priceIndex.innerHTML = '';
    let price = document.createElement('div');
    let coin = cryptoArray.find(element => element.name == 'ripple')
    price.innerHTML = `
        <h2> Ripple Price: $${coin.current_price} </h2>`
    priceIndex.appendChild(price);

}
