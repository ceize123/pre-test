import { addComma } from '../../helpers/utils';

describe('AddComma Component', () => {
  it('should have value 1,000,000.1234', () => {
    const input = 1000000.1234;
    const result = addComma(input);
    expect(result).toEqual('1,000,000.1234');
  });

  it('should have value 100', () => {
    const input = 100;
    const result = addComma(input);
    expect(result).toEqual('100');
  });

  it('should have value -789,912.3', () => {
    const input = -789912.3;
    const result = addComma(input);
    expect(result).toEqual('-789,912.3');
  });

  it('should have value -789,912.333312', () => {
    const input = -789912.333312;
    const result = addComma(input);
    expect(result).toEqual('-789,912.333312');
  });

  it('should have value 0', () => {
    const input = 0;
    const result = addComma(input);
    expect(result).toEqual('0');
  });

  it('should have value 0.9912', () => {
    const input = -0.9912;
    const result = addComma(input);
    expect(result).toEqual('-0.9912');
  });
});
