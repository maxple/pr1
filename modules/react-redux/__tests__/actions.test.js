import storeFactory from '../store'
import {addColor} from '../actions'

describe('Action Creators', () => {

    let store

    describe('addColor', () => {

        const colors = [..._testColors]

        beforeAll(() => {
            store = storeFactory({colors})
            store.dispatch(addColor('Dark Blue', '#000033'))
        })

        it('should add a new color', () =>
            expect(store.getState().colors.length).toBe(4))

        it('should add a unique guid id', () =>
            expect(store.getState().colors[3].id.length).toBe(36))

        it('should set the rating to 0', () =>
            expect(store.getState().colors[3].rating).toBe(0))

        it('should set timestamp', () =>
            expect(store.getState().colors[3].timestamp).toBeDefined())

    })
})
