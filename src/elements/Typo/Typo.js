import React from 'react'
import styled from 'styled-components/native'

import { Text } from 'react-native'

type ChildrenProps = {
  children: mixed
}

const pageHeadingEl = styled(Text)`
  font-size: 24px;
  text-align: center;
`
const pageHeading = (props: ChildrenProps) => <pageHeadingEl>{ props.children }</pageHeadingEl>

export default {
  pageHeading,
}
