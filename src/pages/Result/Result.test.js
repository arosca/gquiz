import renderer from 'react-test-renderer'
import React from 'react'

import Result from './Result'

it('renders without crashing', () => {
  const rendered = renderer.create(<Result />).toJSON()
  expect(rendered).toBeTruthy()
})
