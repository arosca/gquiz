import renderer from 'react-test-renderer'
import React from 'react'

import Quiz from './Quiz'

const navigation = { navigate: () => null }

it('renders without crashing', () => {
  const rendered = renderer.create(<Quiz navigation={navigation} />).toJSON()
  expect(rendered).toBeTruthy()
})
