import React from 'react'
import styled from 'styled-components/native'

import { Button } from 'react-native'

type ButtonProps = {
  title: string,
  onPress: mixed,
}

const PrimaryEl = styled(Button)`
`
const primary = (props: ButtonProps) => (
  <PrimaryEl {...props} />
)

export default {
  primary,
}
