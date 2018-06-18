import React from 'react'

import { Text } from 'react-native'

import { Page } from '../../components'

import {
  Typo,
  Button,
} from '../../elements'

export default () => (
  <Page>
    <Typo.pageHeading>Welcom to the Trivia Challenge</Typo.pageHeading>
    <Page.body>
      <Text>asd</Text>
    </Page.body>
    <Button.primary
      onPress={() => null}
      title="Start the quiz"
    />
  </Page>
)
