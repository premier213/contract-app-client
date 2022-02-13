import HomePage from '../src/pages/index';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const setup = () => {
  const utils = render(<HomePage />);
  const implement = screen.getByRole('div');
  return { implement, ...utils };
};

test('render homepage', () => {
  const { implement } = setup();
  expect(implement).toBeInTheDocument();
});
