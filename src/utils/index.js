import React from 'react'
import PropTypes from 'prop-types'

export class NodeSafeWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  render() {
    if (typeof document !== 'undefined' && document) {
      return <React.Fragment>{this.props.children}</React.Fragment>
    } else {
      return <span />
    }
  }
}

function createMarkup(markup) {
  return { __html: markup }
}

export function displaySvg(svgString) {
  return (
    <span
      dangerouslySetInnerHTML={createMarkup(svgString)}
      className="svg-wrapper"
    />
  )
}

export function displayMarkup(markup, props) {
  return <span {...props} dangerouslySetInnerHTML={createMarkup(markup)} />
}

export function isPastBreakpoint(breakpoint) {
  if (window.matchMedia(breakpoint).matches) {
    return false
  } else {
    return true
  }
}

// Sort array by property on object
// Array<{'order': number}>, Array.sort(dynamicSort('createdAt'))
export function dynamicSort(property) {
  let sortOrder = 1
  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }
  return function(a, b) {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    return result * sortOrder
  }
}
