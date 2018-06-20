import renderer from 'react-test-renderer'
import React from 'react'
import jest from 'jest'

import Quiz from './Quiz'

const navigation = { navigate: jest.fn() }

it('renders without crashing', () => {
  const rendered = renderer.create(<Quiz navigation={navigation} />).toJSON()
  expect(rendered).toBeTruthy()
})
