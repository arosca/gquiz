import React from 'react'
import styled from 'styled-components/native'

import { View } from 'react-native'

const PageEl = styled(View)`
  flex: 1;
  padding: 60px 30px;
`

const BodyEl = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

/**
 * Generic wrapper component used for every screen
 * for standardizing layout: alignment, margins and paddings
 */
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

const HeadEl = styled(View)`
  height: 100px;
`


/**
 * Page header
 */
Page.head = (props: Props) => <HeadEl>{ props.children }</HeadEl>

/**
 * Body of page
 */
Page.body = (props: Props) => <BodyEl>{ props.children }</BodyEl>

export default Page
