import React from 'react'
import axios from 'axios'

import { Loading } from '../../components'

import Quiz from './Quiz'

export default class QuizContainer extends React.Component {
  state = {
    isReady: false,
    questions: [],
    error: false,
  }

  componentDidMount() {
    this.fetchQuiz()
  }

  async fetchQuiz() {
    try {
      const res = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      this.setState({
        questions: res.data.results,
        isReady: true,
      })
    } catch (err) {
      this.setState({ error: err })
    }
  }

  render() {
    const { isReady, error, questions } = this.state

    if (error) return <Loading>Something went wrong!</Loading>

    return (
      isReady
        ? <Quiz questions={questions} />
        : <Loading>Preparing your quiz</Loading>
    )
  }
}
