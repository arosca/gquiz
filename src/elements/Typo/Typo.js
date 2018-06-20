import React from 'react'
import styled from 'styled-components/native'

import { Text } from 'react-native'

const PageHeadingEl = styled(Text)`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`

type ChildrenProps = {
  children: string
}
const pageHeading = (props: ChildrenProps) => <PageHeadingEl>{ props.children }</PageHeadingEl>

const PEl = styled(Text)`
  margin-vertical: 20px;
  font-size: 18px;
  text-align: center;
`

const p = (props: ChildrenProps) => <PEl>{ props.children }</PEl>

const BEl = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`

const b = (props: ChildrenProps) => <BEl>{ props.children }</BEl>

export default {
  pageHeading,
  p,
  b,
}
