import {mount} from 'enzyme'
import Expandable from '../Expandable'

describe('Expandable Higher-Order Component', () => {

    let mockProps,
        wrapper,
        instance,
        ExpandedMockComponent,
        MockComponent = ({collapsed, expandCollapse}) =>
            <div onClick={expandCollapse}>
                {collapsed ? 'collapsed' : 'expanded'}
            </div>

    beforeAll(() => {
        ExpandedMockComponent = Expandable(MockComponent)
        wrapper = mount(<ExpandedMockComponent collapsed={false}
                                               foo="fooValue"
                                               gnar="gnarValue" />)
        mockProps = wrapper.find(MockComponent).props()
        instance = wrapper.instance()
    })

    describe('Rendering UI', () => {
        it('starts off collapsed', () => {
            expect(mockProps.collapsed).toBe(false)
        })

        it('passes expandCollapse function to MockComponent', () => {
            expect(typeof mockProps.expandCollapse).toBe('function')
        })

        it('passes foo prop to MockComponent', () => {
            expect(mockProps.foo).toBe('fooValue')
        })

        it('passes gnar prop to MockComponent', () => {
            expect(mockProps.gnar).toBe('gnarValue')
        })
    })

    describe('Expand Collapse Functionality', () => {
        it('renders MockComponent as the root element', () => {
            expect(wrapper.first().is(MockComponent))
        })

        it('starts off expanded', () => {
            expect(instance.state.collapsed).toBe(false)
        })

        it('toggles the collapsed state', () => {
            instance.expandCollapse()
            expect(instance.state.collapsed).toBe(true)
        })

        it('prop collapsed remain false', () => {
            expect(mockProps.collapsed).toBe(false)
        })
    })
})
