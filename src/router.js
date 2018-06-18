import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import * as Pages from './pages'

const QuizNavigator = createStackNavigator({
  Home: { screen: Pages.Home },
  Quiz: { screen: Pages.Quiz },
}, {
  navigationOptions: {
    header: null,
  },
})

export default createSwitchNavigator({
  Quiz: { screen: QuizNavigator },
  Result: { screen: Pages.Result },
}, {
  navigationOptions: {
    header: null,
  },
})
