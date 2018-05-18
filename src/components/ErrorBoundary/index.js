import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Raven from 'raven-js'
//
import Styled from './style'

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState(() => {
      return {
        hasError: true,
      }
    })

    if (
      process.env.NODE_ENV !== 'development' &&
      typeof document !== 'undefined' &&
      error.message != 'IDontExist is not defined'
    ) {
      /* eslint-disable-next-line no-console */
      console.log('Errors sent to Raven', error, info)
      Raven.captureException(error, { extra: info })
    } else {
      /* eslint-disable-next-line no-console */
      console.error(
        'Error caught in Error ErrorBoundary. This will reported to Sentry when not in development.',
      )
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Styled data-testid="app-error-boundary-error" color="222,54,24">
          <div>
            <h2>Sorry, something went wrong.</h2>
            <ReportForm />
            <p>
              You can try reloading the page, or using the menu if it is
              available.
            </p>
          </div>
        </Styled>
      )
    }
    return this.props.children
  }
}

const ReportForm = () =>
  process.env.NODE_ENV !== 'development' && typeof document !== 'undefined' ? (
    <Form />
  ) : (
    <span />
  )

const Form = () => (
  <p data-testid="app-error-boundary-report-form-wrapper">
    This error has been reported to our development team. Please{' '}
    <button onClick={() => Raven.lastEventId() && Raven.showReportDialog()}>
      click here to fill out a report.
    </button>
  </p>
)
