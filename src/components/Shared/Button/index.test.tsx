import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';

import theme from '../../../theme';

import Button, { dataTestIds } from '.';

it('renders the button title', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Button title="Ciao" />
    </ThemeProvider>
  );

  expect(getByText('Ciao')).toBeTruthy();
});

it('calls the onclick when pressed', () => {
  const onClick = jest.fn();

  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Button onClick={onClick} title="Ciao" />
    </ThemeProvider>
  );

  fireEvent.press(getByTestId(dataTestIds.button));

  expect(onClick).toBeCalled();
});
