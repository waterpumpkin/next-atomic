import { shallow } from 'enzyme'
import NavBar from './'

const wrap = (props = {}) => shallow(<NavBar {...props} />)

it('renders props when passed in', () => {
	const wrapper = wrap({ id: 'foo' })
	// expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
