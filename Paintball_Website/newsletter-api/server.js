var restify = require('restify');
var server = restify.createServer();
var corsMiddleware = require('restify-cors-middleware');
var request = require('request');

function subscribe(req, res, next) {
    var email = req.body.email;
    console.log(email)
    //chipmail
    var dataCenter = 'us20';
    var apiKey = '06acb8b371274707e18a44fce76f3087-us20';
    var listID = 'd9467041cd';



    var options = {
        url: `http://${dataCenter}.api.mailchip.com/3.0/lists/${listID}/members`,
        method: 'POST',
        headers: { 'content-type': 'application/json', 'Authorization': `apiKey ${apiKey}` },
        body: JSON.stringify({ email_address: email, status: 'subscribed' })
    }

    // Make a simple POST call to MailChimp
    request(options, function (error, response, body) {
        try {
            var respObj = {};//initial response object
            if (response.statusCode === 200) {
                respObj = { success: `Subscribed using ${email}`, message: JSON.parse(response.body) };
            } else {
                respObj = { error: `Error trying to subscribe ${email}. Please try again.`, message: JSON.parse(response.body) };
            }

            res.send(respObj);
        } catch (err) {
            var respErrorObj = { error: ' There was an error with your request', message: err.message };
            res.send(respErrorObj);
        }
    });
    next();
}

var cors = corsMiddleware({
    origins: ['http://localhost:3000']
});

server.use(restify.plugins.bodyParser());
server.pre(cors.preflight);
server.use(cors.actual)

server.post('/subscribe', subscribe);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});