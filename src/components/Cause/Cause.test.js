import React from 'react'
import Cause from './CauseContainer'
import { shallow } from 'enzyme'

describe('<CauseContainer />', () => {
  it('contains text CauseContainer', () => {
    const causeWrapper = shallow(<Cause />)
    expect(causeWrapper.text()).toEqual('CauseContainer')
  })
})
