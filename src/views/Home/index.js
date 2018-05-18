import React from 'react'
//
import View from '../../containers/View'
import Styled from './style'

export class Home extends React.Component {
  render() {
    return (
      <Styled data-testid="view-home">
        <h1>Home Page</h1>
      </Styled>
    )
  }
}

export default function Render(childProps) {
  return (
    <View render={routeProps => <Home {...routeProps} {...childProps} />} />
  )
}
