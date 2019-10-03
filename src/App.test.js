import React from 'react';
import { render } from '@testing-library/react';
import Dashboard, { addStrike, addBall, addFoul } from './components/Dashboard';


it('renders without crashing', () => {
  render(<Dashboard />);
});

test('balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls', () => {
  expect(addStrike(3)).toBe(0);
  expect(addBall(4)).toBe(0);
});

test('balls and strikes reset to 0 when a hit is recorded', () => {
  expect(hit()).toBe(0);
});

test('a foul increases strikes up to 2. With 2 strikes a foul has no effect, count stays at 2', () => {
  expect(addFoul(2)).toBe(2);
});
