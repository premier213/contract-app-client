/// <reference types="@types/jest" />
import HomePage from '../src/pages/index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

it('render index page', () => {
  const queryClient = new QueryClient();
  render(
    <>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </>
  );
  expect(screen.getByTestId('e')).toHaveTextContent('welcome');
});
