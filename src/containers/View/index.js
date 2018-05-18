import React from 'react'
import { RouteData } from 'react-static'
import ErrorBoundary from '../../components/ErrorBoundary'
import { Spring } from 'react-spring'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//
import Styled, { Main } from './style'

export class View extends React.Component {
  render() {
    const { render } = this.props
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {styles => (
          <div style={styles}>
            <Styled>
              <header data-testid="site-header" />
              <ErrorBoundary>
                <Main data-testid="site-main">{render(this.props)}</Main>
              </ErrorBoundary>
              <footer data-testid="site-footer" />
            </Styled>
          </div>
        )}
      </Spring>
    )
  }
}

function RenderView(childProps) {
  return <RouteData render={props => <View {...props} {...childProps} />} />
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RenderView)
