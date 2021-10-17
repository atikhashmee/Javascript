const pubsub = {
    subscribers: {},
    publish: function(event, data) {
        if (!this.subscribers[event]) return;
        this.subscribers[event].forEach(subscriberCallback =>
            subscriberCallback(data));
    },
    subscribe: function(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);
    }
}

function publishEvent() {
    const data = {
        msg: "first publish msg"
    }
    pubsub.publish('enEvent', data);
}

pubsub.subscribe('enEvent', data=>{
    console.log(
        `"anEvent", was published with this data: "${data.msg}"`
    );
})


publishEvent()
publishEvent()
