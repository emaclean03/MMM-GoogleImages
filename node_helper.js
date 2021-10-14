const NodeHelper = require('node_helper');
const request = require("request");
const Log = require("../../js/logger");

module.exports = NodeHelper.create({
    //hacktober fest
    socketNotificationReceived: function(notification, payload){
        /*Sends the payload back to broadcast to clients*/
        var self = this;

        request(process.env.PHOTO_URL, function(error, response, body){
            self.sendSocketNotification('Image', extractPhotos(body))
        });

    },

    start: function(){


    }

});

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g

function extractPhotos(content) {
    const links = new Set()
    let match
    while (match = regex.exec(content)) {
        links.add(match[1])
    }
    return Array.from(links)
}
