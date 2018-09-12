import EventEmitter from 'events'

class CountdownStore extends EventEmitter {

    constructor(count = 5, dispatcher) {
        super();
        this._count = count;
        this.dispatcherIndex = dispatcher.register(this.dispatch.bind(this))
    }

    get count() {
        return this._count
    }

    dispatch(payload) {
        const { type, count } = payload.action;
        switch (type) {

            case "TICK":
                this._count = count;
                this.emit("TICK");
                return true;

            case "RESET":
                this._count = count;
                this.emit("RESET");
                return true

        }
    }
}

export default CountdownStore