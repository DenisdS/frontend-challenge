import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import toJson from 'enzyme-to-json'

import { shallow } from '../../enzyme'

import Home from './Index'

import {
  SubHeader
} from 'components'


describe('Home - views', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Home />
    )

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

