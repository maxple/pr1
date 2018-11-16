import {mount, shallow} from 'enzyme'
import ColorList from '../../../components/ui/ColorList'

jest.mock('../../../components/ui/Color', () =>
    ({rating, onRate = f => f, onRemove = f => f}) =>
        <div className="mock-color">
            <button className="rate"
                    onClick={() => onRate(rating)} />
            <button className="remove"
                    onClick={onRemove} />
        </div>,
)

describe('ColorList UI Component', () => {

    afterAll(() => jest.resetAllMocks())

    describe('Rendering UI', () => {

        it('Renders Correctly', () =>
            expect(shallow(
                <ColorList colors={_testColors} />,
            ))
                .toMatchSnapshot(),
        )

        it('Defaults Properties correctly', () =>
            expect(shallow(<ColorList />)
                .find('p')
                .text())
                .toBe('No Colors Listed. (Add a Color)'),
        )

        it('Clicking default rate button do not cause Error', () => {
            mount(<ColorList colors={_testColors} />)
                .find('button.rate')
                .first()
                .simulate('click')
        })

        it('Clicking default remove button do not cause Error', () => {
            mount(<ColorList colors={_testColors} />)
                .find('button.remove')
                .first()
                .simulate('click')
        })

    })

    describe('Rating a Color', () => {
        let _onRate = jest.fn()

        beforeAll(() => {
            let wrapper = mount(<ColorList colors={_testColors}
                                           onRate={_onRate} />)

            wrapper
                .find('button.rate')
                .first()
                .simulate('click')

            console.log(wrapper.debug())
        })

        it('invokes onRate Handler', () => expect(_onRate)
            .toBeCalled())

        it('rates the correct color', () => expect(_onRate)
            .toBeCalledWith('8658c1d0-9eda-4a90-95e1-8001e8eb6036', 4))
    })

    describe('Removing a Color', () => {

        let _onRemove = jest.fn()

        beforeAll(() => {
                let wrapper = mount(<ColorList colors={_testColors}
                                               onRemove={_onRemove} />)
                wrapper
                    .find('button.remove')
                    .last()
                    .simulate('click')
            },
        )

        it('invokes onRemove Handler', () =>
            expect(_onRemove)
                .toBeCalled(),
        )

        it('removes the correct color', () =>
            expect(_onRemove)
                .toBeCalledWith('58d9caee-6ea6-4d7b-9984-65b145031979'),
        )
    })
})