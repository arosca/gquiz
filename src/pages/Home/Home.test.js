import renderer from 'react-test-renderer'
import React from 'react'

import Home from './Home'

it('renders without crashing', () => {
  const rendered = renderer.create(<Home />).toJSON()
  expect(rendered).toBeTruthy()
})
