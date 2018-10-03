import renderer from 'react-test-renderer'
import App from '../../components/App'
import React from 'react'
import {Provider} from 'react-redux'
import storeFactory from '../../store'

const store = storeFactory()

window.React = React

describe('App', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
