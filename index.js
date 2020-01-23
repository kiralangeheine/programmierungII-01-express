const express = require ('express');
const newMessage = require ('./my-modules/messagesupplier');
const app = express();

app.use(express.static('public'));

app.post('/', function (request, response) {
    console.log('message',request.body.message);
    response.send(newmessage());
});


app.listen(2000, function () {
    console.log('message supplier listening on port 2000!')
});