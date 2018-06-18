import renderer from 'react-test-renderer'
import React from 'react'

import Quiz from './Quiz'

it('renders without crashing', () => {
  const rendered = renderer.create(<Quiz />).toJSON()
  expect(rendered).toBeTruthy()
})
