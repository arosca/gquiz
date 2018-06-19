import React from 'react'

import { Text } from 'react-native'

import { Page } from '../../components'

type Props = {
  questions: {
    category: string,
    question: string,
    correct_answer: string,
  }
}
export default class Quiz extends React.Component<Props> {
  render() {
    console.log('------------', this.props.questions)
    return (
      <Page>
        <Text>Quiz</Text>
      </Page>
    )
  }
}
