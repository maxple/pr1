import {mount} from 'enzyme'
import ColorList from '../../../components/ui/ColorList'

jest.mock('../../../components/ui/Color', () =>
    ({rating, onRate = f => f}) =>
        <div className="mock-color">
            <button className="rate"
                    onClick={() => onRate(rating)} />
        </div>,
)

describe('ColorList UI Component', () => {
    describe('Rating a Color', () => {
        let _onRate = jest.fn()

        beforeAll(() => {
            let wrapper = mount(<ColorList colors={_testColors}
                                           onRate={_onRate} />)

            wrapper.find('button.rate').first().simulate('click')

            console.log(wrapper.debug())
        })

        it('invokes onRate Handler', () => expect(_onRate).toBeCalled())

        it('rates the correct color', () => expect(_onRate).
            toBeCalledWith('8658c1d0-9eda-4a90-95e1-8001e8eb6036', 4))
    })
})