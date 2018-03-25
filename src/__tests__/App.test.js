import React from 'react'
import renderer from 'react-test-renderer'

import { App, mapStateToProps } from '../App'

describe('<App />', () => {
  const defaultProps = {
    addTodo: jest.fn(),
    removeTodo: jest.fn(),
    todos: [],
  }

  const wrapper = renderer.create(<App {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
