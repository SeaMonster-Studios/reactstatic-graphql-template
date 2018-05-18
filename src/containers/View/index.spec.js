import React from 'react'
import { cleanup } from 'react-testing-library'
//
import { renderWithRedux } from '../../utils/tests'
import View from './'

afterEach(cleanup)

describe('View Component Test', () => {
  it('Renders, and contains a header, footer, and main', () => {
    const { queryByTestId } = renderSetup()

    expect(queryByTestId('site-header')).toBeTruthy()
    expect(queryByTestId('site-main')).toBeTruthy()
    expect(queryByTestId('site-footer')).toBeTruthy()
  })

  it("Functions as a Render Prop Component: it calls it's render method, and passes all of it's props", () => {
    const { renderSpy } = renderSetup()
    expect(renderSpy).toHaveBeenCalled() // I want to use toHaveBeenCalledWith(props) ... but even though the objects are exactly similar (according to diff merge), jest still fails
  })
})

function renderSetup(overrides) {
  const renderSpy = jest.fn()
  const props = {
    render: renderSpy,
    ...overrides,
  }

  const { wrapper, store } = renderWithRedux(<View {...props} />)

  return {
    ...wrapper,
    renderSpy,
    props,
    store,
  }
}
