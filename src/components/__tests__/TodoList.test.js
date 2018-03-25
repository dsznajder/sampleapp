import React from 'react'
import renderer from 'react-test-renderer'

import TodoList from '../TodoList'

describe('<TodoList />', () => {
  const defaultProps = {
    removeTodo: jest.fn(),
    todos: [],
  }

  const wrapper = renderer.create(<TodoList {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
