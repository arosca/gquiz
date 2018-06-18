import renderer from 'react-test-renderer'
import React from 'react'

import Button from './Button'

it('renders primary without crashing', () => {
  const rendered = renderer.create(<Button.primary title="Test" onPress={() => null} />).toJSON()
  expect(rendered).toBeTruthy()
})
