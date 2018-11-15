import renderer from 'react-test-renderer'
import App from '../../components/App'
import {Provider} from 'react-redux'
import storeFactory from '../../store'

const store = storeFactory()

describe('App', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
