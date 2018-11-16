import {Provider} from 'react-redux'
import {Colors} from '../../../components/containers'
import {mount} from 'enzyme'

jest.mock('../../../components/ui/ColorList')

describe('Colors Container', () => {

    let wrapper, props

    const _store = {
        dispatch: jest.fn(),
        subscribe: jest.fn(),
        getState: jest.fn(() =>
            ({
                sort: 'SORTED_BY_DATE',
                colors: _testColors,
            }),
        ),
    }

    beforeAll(() => {
        wrapper = mount(
            <Provider store={_store}>
                <Colors />
            </Provider>,
        )

        props = wrapper
            .find('ColorListMock')
            .props()

        console.log(wrapper.debug())
    })

    afterEach(() => jest.resetAllMocks())

    it('renders three colors',
        () => expect(props.colors.length)
            .toBe(3))

    it('sorts the colors by state', () => {
        expect(props.colors[0].title)
            .toBe('tomato')
    })

    it('dispatches a REMOVE_COLOR action', () => {
        props.onRemove('f9005b4e-975e-433d-a646-79df172e1dbb')

        expect(_store.dispatch.mock.calls[0][0])
            .toEqual({
                id: 'f9005b4e-975e-433d-a646-79df172e1dbb',
                type: 'REMOVE_COLOR',
            })
    })

    it('dispatches a RATE_COLOR action', () => {
        props.onRate('8658c1d0-9eda-4a90-95e1-8001e8eb6036', 5)

        expect(_store.dispatch.mock.calls[0][0])
            .toEqual({
                id: '8658c1d0-9eda-4a90-95e1-8001e8eb6036',
                type: 'RATE_COLOR',
                rating: 5,
            })
    })
})
