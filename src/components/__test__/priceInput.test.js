import { render, screen, fireEvent } from '@testing-library/react';
import PriceInput from '../PriceInput';

describe('PriceInput Component', () => {
  it('should have value 1,000,000.1234', async () => {
    render(<PriceInput />);
    const inputElement = screen.getByTestId('priceInput');
    fireEvent.change(inputElement, { target: { value: '1000000.1234' } });
    expect(inputElement.value).toBe('1,000,000.1234');
  });

  it('should have value 100', async () => {
    render(<PriceInput />);
    const inputElement = screen.getByTestId('priceInput');
    fireEvent.change(inputElement, { target: { value: '100' } });
    expect(inputElement.value).toBe('100');
  });

  it('should have value -789,912.3', async () => {
    render(<PriceInput />);

    const inputElement = screen.getByTestId('priceInput');
    fireEvent.change(inputElement, { target: { value: '-789912.3' } });
    expect(inputElement.value).toBe('-789,912.3');
  });

  it('should have value -789,912.333312', async () => {
    render(<PriceInput />);

    const inputElement = screen.getByTestId('priceInput');
    fireEvent.change(inputElement, { target: { value: '-789912.333312' } });
    expect(inputElement.value).toBe('-789,912.333312');
  });

  it('should have value 0', async () => {
    render(<PriceInput />);

    const inputElement = screen.getByTestId('priceInput');
    fireEvent.change(inputElement, { target: { value: '0' } });
    expect(inputElement.value).toBe('0');
  });

  it('should have value 0.9912', async () => {
    render(<PriceInput />);

    const inputElement = screen.getByTestId('priceInput');
    fireEvent.change(inputElement, { target: { value: '0.9912' } });
    expect(inputElement.value).toBe('0.9912');
  });
});
