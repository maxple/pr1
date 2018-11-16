import Color from '../../../components/ui/Color'
import {shallow} from 'enzyme'

describe('Color UI Component', () => {
    it('Renders correct properties', () =>
        expect(shallow(
            <Color title="Test Color"
                   color="#F0F0F0"
                   rating={3}
                   timestamp="Mon Apr 11 2016 12:54:19 GMT-0700 (PDT)" />))
            .toMatchSnapshot(),
    )
})
