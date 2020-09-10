import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import Counter from '../counter'

test('<Counter /> check texts', () => {
  render(<Counter />)
  expect(screen.getByTestId('title')).toHaveTextContent('0')
  expect(screen.getByTestId('subtitle')).toHaveTextContent('Amount')
  expect(screen.getByTestId('button-increment')).toHaveTextContent('+')
  expect(screen.getByTestId('button-decrement')).toHaveTextContent('-')
  expect(screen.getByTestId('button-reset')).toHaveTextContent('reset')
})

test('<Counter /> check click', () => {
  render(<Counter />)

  fireEvent.change(screen.getByTestId('input'), {
    target: { value: '1' },
  })
  expect(screen.getByTestId('input').value).toBe('1')

  fireEvent.click(screen.getByTestId('button-increment'))
  expect(screen.getByTestId('title')).toHaveTextContent(1)

  fireEvent.change(screen.getByTestId('input'), {
    target: { value: '4' },
  })
  fireEvent.click(screen.getByTestId('button-increment'))
  expect(screen.getByTestId('title')).toHaveTextContent(5)

  fireEvent.click(screen.getByTestId('button-reset'))
  expect(screen.getByTestId('title')).toHaveTextContent(0)

  fireEvent.change(screen.getByTestId('input'), {
    target: { value: '10' },
  })
  fireEvent.click(screen.getByTestId('button-decrement'))
  expect(screen.getByTestId('title')).toHaveTextContent(-10)
})
