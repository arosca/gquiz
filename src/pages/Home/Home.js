import React from 'react'

import { Page } from '../../components'

import {
  Typo,
  Button,
} from '../../elements'

type Props = {
  navigation: {
    navigate: mixed
  }
}
export default (props: Props) => (
  <Page>
    <Typo.pageHeading>Welcom to the {'\n' } Trivia Challenge</Typo.pageHeading>
    <Page.body>
      <Typo.p>You will be presented with 10 True or False questions.</Typo.p>
      <Typo.p>Can you score 100%?</Typo.p>
    </Page.body>
    <Button.primary
      onPress={() => props.navigation.navigate('Quiz')}
      title="Start the quiz"
    />
  </Page>
)
