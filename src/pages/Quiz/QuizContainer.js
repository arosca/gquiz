import React from 'react'
import axios from 'axios'

import Quiz from './Quiz'

type Props = {
  navigation: {
    navigate: mixed
  }
}
export default class QuizContainer extends React.Component<Props> {
  state = {
    loading: true,
    questions: [],
    error: false,
  }

  componentDidMount() {
    this.fetchQuiz()
  }

  async fetchQuiz() {
    try {
      const res = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean&encode=url3986')
      this.setState({
        questions: res.data.results,
        loading: false,
      })
    } catch (err) {
      this.setState({ error: err })
    }
  }

  render() {
    const { loading, error, questions } = this.state
    const { navigation } = this.props

    return (
      <Quiz
        questions={questions}
        navigation={navigation}
        loading={loading}
        error={error}
      />
    )
  }
}
