import React from 'react'
import renderer from 'react-test-renderer'

import AddTodo from '../AddTodo'

describe('<AddTodo />', () => {
  const defaultProps = {
    addTodo: jest.fn(),
  }

  const wrapper = renderer.create(<AddTodo {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
