import React from 'react'
import styled from 'styled-components/native'
import Swiper from 'react-native-deck-swiper'

import { View, Dimensions } from 'react-native'

import { Page, Loading } from '../../components'
import { Typo, Button } from '../../elements'

const { width } = Dimensions.get('window')

const Card = styled(View)`
  background-color: ${props => props.theme.lightGray};
  width: ${width - 100}px;
  height: 300px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const Options = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

type Props = {
  questions: {
    category: string,
    question: string,
    correct_answer: string,
  },
  navigation: {
    navigate: mixed,
  },
  error: boolean,
  loading: boolean
}
export default class Quiz extends React.Component<Props> {
  state = {
    questionIndex: 0,
    complete: false,
  }

  onAnswer = (index) => {
    const { questions } = this.props
    const { questionIndex } = this.state
    if (questionIndex + 1 < questions.length) {
      this.setState({ questionIndex: index + 1 })
    }
  }

  showResults = async () => {
    const {
      navigation: { navigate },
    } = this.props
    // https://github.com/alexbrillant/react-native-deck-swiper/issues/102
    await setTimeout(() => null, 100)
    navigate('Result')
  }

  renderCard = item => (
    <Card>
      <Typo.p>{ decodeURIComponent(item.question) }</Typo.p>
    </Card>
  )

  render() {
    const {
      questions,
      loading,
      error,
    } = this.props

    const {
      questionIndex,
      complete,
    } = this.state

    if (complete) return <Loading>Thanks for playing!</Loading>
    if (loading) return <Loading>Preparing your quiz!</Loading>
    if (error) return <Loading>Something went wrong!</Loading>

    return (
      <Page>
        <Page.head>
          <Typo.pageHeading>
            {decodeURIComponent(questions[questionIndex].category)}
          </Typo.pageHeading>
        </Page.head>
        <Page.body>
          <Swiper
            backgroundColor="transparent"
            cards={questions}
            renderCard={this.renderCard}
            onSwiped={this.onAnswer}
            onSwipedAll={this.showResults}
            cardIndex={0}
            stackSize={1}
            verticalSwipe={false}
          />
        </Page.body>
        <Options>
          <Button.secondary
            title="< False"
            onPress={() => null}
          />
          <Typo.b>{questionIndex + 1} of {questions.length}</Typo.b>
          <Button.secondary
            title="True >"
            onPress={() => null}
          />
        </Options>
      </Page>
    )
  }
}
