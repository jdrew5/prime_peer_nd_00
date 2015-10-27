var randomNumber = require('./randomNumber');
var convertToUsd = require('./convertToUsd');


var accountBalance = function() {
    return convertToUsd(randomNumber(100, 1000000));
}

var accountBalanceText = "Account Balance: \n";

module.exports.accountBalance = accountBalance;
module.exports.accountBalanceText = accountBalanceText;