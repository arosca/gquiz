import renderer from 'react-test-renderer'
import React from 'react'

import { Text } from 'react-native'

import Page from './Page'

it('renders without crashing', () => {
  const rendered = renderer.create(<Page />).toJSON()
  expect(rendered).toBeTruthy()
})

it('renders the children/content', () => {
  const component = renderer.create(<Page><Text>test</Text></Page>).toJSON()
  expect(component).toMatchSnapshot()
})
