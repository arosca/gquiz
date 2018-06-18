import React from 'react'
import styled from 'styled-components/native'

import { View } from 'react-native'

const PageEl = styled(View)`
  flex: 1;
`

type Props = {
  children: node
}
export default class Page extends React.Component<Props> {
  render() {
    return (
      <PageEl>{this.props.children}</PageEl>
    )
  }
}
