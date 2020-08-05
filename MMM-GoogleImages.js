Module.register("MMM-GoogleImages", {
    imageURL: "",

    defaults: {
        albumURL: "",
        changeTime: 100000
    },

    start: function() {
        Log.info("Starting module: " + this.name);
        var self = this;
        self.sendSocketNotification("CONNECT");

        setInterval(function() {
            self.sendSocketNotification("CONNECT");
        }, 10000);

    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "Image") {
            //Log.error('received')
            this.imageURL = payload[Math.floor(Math.random() * payload.length)];
            this.updateDom();
        }
    },

    getDom: function() {
        let wrapper = document.createElement("div");
        let image = document.createElement("IMG");
        image.width = 400;
        image.height = 400;
        image.src = this.imageURL;
        wrapper.appendChild(image);
        return wrapper;
    }

});

