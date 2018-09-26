import EventEmitter from 'events'
import actionTypes from './CountdownActionTypes'
import dispatcher from './CountdownDispatcher'

class CountdownStore extends EventEmitter {

    constructor(count = 10) {
        super()
        this._count = count
        dispatcher.register(this.dispatch.bind(this))
    }

    get count() {
        return this._count
    }

    dispatch({type, count}) {
        switch (type) {

            case actionTypes.TICK:
                this._count = count - 1
                this.emit('CHANGE')
                return true

            case actionTypes.RESET:
                this._count = count
                this.emit('CHANGE')
                return true

        }
    }
}

export default new CountdownStore()
