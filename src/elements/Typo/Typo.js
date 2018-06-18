import React from 'react'
import styled from 'styled-components/native'

import { Text } from 'react-native'

const PageHeadingEl = styled(Text)`
  font-size: 24px;
  text-align: center;
`

type ChildrenProps = {
  children: mixed
}
const pageHeading = (props: ChildrenProps) => <PageHeadingEl>{ props.children }</PageHeadingEl>

const PEl = styled(Text)`
  margin-vertical: 20px;
  font-size: 18px;
  text-align: center;
`

const p = (props: ChildrenProps) => <PEl>{ props.children }</PEl>

export default {
  pageHeading,
  p,
}
