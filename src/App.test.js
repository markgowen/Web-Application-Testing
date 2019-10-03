import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

test('balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls', () => {
  expect('function().toBe()');
});

test('balls and strikes reset to 0 when a hit is recorded', () => {
  expect('function().toBe()');
});

test('a foul increases strikes up to 2. With 2 strikes a foul has no effect, count stays at 2', () => {
  expect('function().toBe()');
  expect('function().not.toBe()');
});
