import React from 'react'
import styled from 'styled-components/native'

import { View } from 'react-native'

const PageEl = styled(View)`
  flex: 1;
  padding: 60px 30px;
`

const BodyEl = styled(View)`
  flex: 1;
`

type Props = {
  children: mixed
}
class Page extends React.Component<Props> {
  render() {
    return (
      <PageEl>{ this.props.children }</PageEl>
    )
  }
}

Page.body = (props: Props) => <BodyEl>{ props.children }</BodyEl>

export default Page
