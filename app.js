var http = require('http');
var accountBalance = require('./accountBalance');


http.createServer(function(request, response){
    response.writeHead(200);
    response.write(accountBalance.accountBalanceText);
    response.write(accountBalance.accountBalance());
    response.end();

}).listen(8000);