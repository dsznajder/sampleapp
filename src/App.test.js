import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App, { TodoAdd } from './App';


test('render App', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});

test('render TodoAdd', () => {
  const wrapper = shallow(<TodoAdd />);

  expect(wrapper).toMatchSnapshot();
});

test('render TodoAdd', () => {
  const wrapper = shallow(<TodoAdd />);

  expect(wrapper).toMatchSnapshot();
});
