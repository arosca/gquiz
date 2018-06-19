import React from 'react'

import { Page } from '../'
import { Typo } from '../../elements'

type Props = {
  children: ?string
}
export default (props: Props) => (
  <Page.body>
    <Typo.pageHeading>{ props.children || 'Loading' }</Typo.pageHeading>
  </Page.body>
)
