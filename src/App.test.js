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

test('renders without an error', () => {
  const wrapper = shallow(<App />);
  const appComponents = wrapper.find("[data-test='component-app']");
  expect(appComponents.length).toBe(1);
});

test('renders increment button', () => {

});

test('renders counter display', () => {

});

test('counter starts at 0', () => {

});

test('clicking button icnrements the counter display', () => {

});


