import React from 'react'
import { cleanup } from 'react-testing-library'
import faker from 'faker'
import _ from 'lodash'
//
import { renderWithReduxIntoDoc, mockRouteData } from '../../utils/tests'
import Home from './'

afterEach(cleanup)

describe('Home Component Test', () => {
  it('Renders', () => {
    const { getByTestId } = renderSetup()

    expect(getByTestId('view-home')).toBeDefined()
  })
})

function renderSetup(overrides) {
  const props = {
    ...mockRouteData,
    ...overrides,
  }

  const { wrapper, store } = renderWithReduxIntoDoc(<Home {...props} />)

  return {
    ...wrapper,
    props,
    store,
  }
}
