import { shallow } from 'enzyme'
import Header from './'

const wrap = (props = {}) => shallow(<Header {...props} />)

it('renders props when passed in', () => {
	const wrapper = wrap({ id: 'foo' })
	// expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
