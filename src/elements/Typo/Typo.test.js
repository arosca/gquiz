import renderer from 'react-test-renderer'
import React from 'react'

import Typo from './Typo'

it('renders pageHeading without crashing', () => {
  const rendered = renderer.create(<Typo.pageHeading />).toJSON()
  expect(rendered).toBeTruthy()
})

it('renders p without crashing', () => {
  const rendered = renderer.create(<Typo.p />).toJSON()
  expect(rendered).toBeTruthy()
})

it('renders b without crashing', () => {
  const rendered = renderer.create(<Typo.b />).toJSON()
  expect(rendered).toBeTruthy()
})
