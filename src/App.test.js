import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

//npm install --save-dev enzyme jest-enzyme enzyme-apadter-react-16

//Unit/Integrations/End-to-end (E2E) tests. Enzyme is unit/integration only.

/* 

Goals:

1. Easy to maintain
2. Test behavior, not implementation - test what the user sees
3. Easy diagnosis of failing test - make them small.

-> not important to do both of these, there is a trade off.
  
*/

/* snapshots.

1. Not TDD compatible
2. Brittle (any change will break it)
3. Difficult to diagnose
  - Too easy to just update the snapshot.
4. No intent, it's just a comparison.
5. It's usually used alongisde traditional tests
  - Decide if its needed.

*/

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a shallow wrapped for the App component
 * @function setup
 * @param {object} props - properties
 * @param {any} state - state
 * @returns {ShallowWrapper} 
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if(state) wrapper.setState(state);
  return wrapper;
} 

/**
 * Return shallowwrapper containing node(s) with given data-test value
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search
 * @param {string} val - String value fo data-test attribute
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

test('renders without an error', () => {
  const wrapper = setup();
  const appComponents = findByTestAttr(wrapper, 'component-app');
  expect(appComponents.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const display = findByTestAttr(wrapper, 'counter-display');
  expect(display.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking button increments the counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  
  const button = findByTestAttr(wrapper, 'increment-button');

  button.simulate('click');

  const display = findByTestAttr(wrapper, 'counter-display')

  expect(display.text()).toContain(8);

});


