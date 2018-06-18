import { createStackNavigator } from 'react-navigation'

import * as Pages from './pages'

export default createStackNavigator({
  Home: {
    screen: Pages.Home,
  },
})
