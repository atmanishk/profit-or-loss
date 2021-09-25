var initialPrice = document.querySelector('#initial-price')
var stocksQuantity = document.querySelector('#stocks-quantity')
var currentPrice = document.querySelector('#current-price')

var submitBtn = document.querySelector('#submit-btn')
var outputBox = document.querySelector('#output-box')

submitBtn.addEventListener('click', submitHandler)

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial && quantity && current) {
        if (initial > 0 && quantity > 0 && current > 0) {
            if (initial > current) {
                var loss = (initial - current) * quantity;
                var lossPercentage = (loss / initial) * 100;
                showOutput(`The loss is ${loss} and the loss percentage is ${lossPercentage}%`, "loss")
            } else if (current > initial) {
                var profit = (current - initial) * quantity;
                var profitPercentage = (profit / initial) * 100;
                showOutput(`The profit is ${profit} and the profit percentage is ${profitPercentage}%`, "profit")
            } else if (initial === current) {
                showOutput(`No pain no gain and no gain no pain`)
            }
        } else {
            showOutput(`Please enter positive values`);
        }
    } else {
        showOutput(`Pleaes enter all fields`);
    }
}

function showOutput(message, status) {
    switch (status) {
        case "profit":
            outputBox.innerHTML = message;
            break;
        case "loss":
            outputBox.innerHTML = message;
            break;
        default:
            outputBox.innerHTML = message;
            break;
    }
}