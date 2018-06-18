import React from 'react'
import styled from 'styled-components/native'

import { Button } from 'react-native'

type ChildrenProps = {
  children: mixed
}

const primaryEl = styled(Button)`
  title: string
  onPress: mixed
`
const primary = (props: ChildrenProps) => (
  <primaryEl {...props} />
)

export default {
  primary,
}
