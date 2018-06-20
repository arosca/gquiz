import React from 'react'
import styled from 'styled-components/native'

import {
  ScrollView,
  Text,
  View,
} from 'react-native'

import { Page } from '../../components'

import {
  Typo,
  Button,
} from '../../elements'

const Row = styled(View)`
  margin-vertical: 20px;
  align-self: stretch;
`

type Props = {
  navigation: mixed
}
export default class Results extends React.Component<Props> {
  constructor(props) {
    super(props)
    const { navigation } = props

    const questions = navigation.getParam('questions')
    const answers = navigation.getParam('answers')

    const results = questions.map((q, i) => ({
      key: `question-${i}`,
      correct_answer: q.correct_answer === 'True',
      answer: answers[i],
      question: q.question,
      get isCorrect() { return this.correct_answer === this.answer },
    }))

    this.state = {
      results,
    }
  }

  renderQuestions() {
    const { results } = this.state

    return results.map((item) => {
      const Tag = Text
      return (
        <Row key={item.key}>
          <Tag>{decodeURIComponent(item.question)}</Tag>
          <Text>You answered: {item.answer ? 'True' : 'False'}</Text>
          <Text>Correct answer: {item.correct_answer ? 'True' : 'False'}</Text>
        </Row>
      )
    })
  }

  render() {
    const { navigation } = this.props
    const { results } = this.state

    return (
      <ScrollView>
        <Page>
          <Page.head>
            <Typo.pageHeading>
              You scored {'\n'}
              {`${results.filter(i => i.isCorrect).length} / ${results.length}`}
            </Typo.pageHeading>
          </Page.head>
          <Page.body>
            { this.renderQuestions() }
          </Page.body>
          <Button.primary
            onPress={() => navigation.navigate('Home')}
            title="Play again?"
          />
        </Page>
      </ScrollView>
    )
  }
}
