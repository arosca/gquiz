import React from 'react'
// import styled from 'styled-components/native'

import { Button } from 'react-native'

type ButtonProps = {
  title: string,
  onPress: mixed,
}

const primary = (props: ButtonProps) => (
  <Button {...props} />
)

const secondary = (props: ButtonProps) => (
  <Button {...props} />
)

export default {
  primary,
  secondary,
}
