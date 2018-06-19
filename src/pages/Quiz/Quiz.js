import React from 'react'
import styled from 'styled-components/native'
import Swiper from 'react-native-deck-swiper'
import { View } from 'react-native'

import { Page } from '../../components'
import { Typo, Button } from '../../elements'

const Card = styled(View)`
  background-color: ${props => props.theme.lightGray};
  height: 50%;
  width: 100%;
  padding: 10%;
`
Card.Question = styled(Typo.p)`

`

const Options = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`

type Props = {
  questions: {
    category: string,
    question: string,
    correct_answer: string,
  },
  navigation: {
    navigate: mixed,
  }
}
export default class Quiz extends React.Component<Props> {
  state = {
    questionIndex: 0,
  }

  onAnswer = index => this.setState({ questionIndex: index })

  renderCard = item => (
    <Card>
      <Card.Question>{item.question}</Card.Question>
    </Card>
  )

  render() {
    const {
      questions,
      navigation: { navigate },
    } = this.props

    const { questionIndex } = this.state

    return (
      <Page>
        <Page.head>
          <Typo.pageHeading>{ questions[questionIndex].category }</Typo.pageHeading>
        </Page.head>
        <Page.body>
          <Swiper
            style={{ marginLeft: '-30px' }}
            backgroundColor="transparent"
            cards={questions}
            renderCard={this.renderCard}
            onSwiped={this.onAnswer}
            onSwipedAll={() => navigate('Result')}
            cardIndex={0}
            stackSize={10}
            stackScale={1}
            verticalSwipe={false}
          />
        </Page.body>
        <Options>
          <Button.secondary
            title="< False"
            onPress={() => null}
          />
          <Button.secondary
            title="True >"
            onPress={() => null}
          />
        </Options>
      </Page>
    )
  }
}
