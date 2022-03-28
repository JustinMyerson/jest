const { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } = require('./exercise-1');

describe('addNumbers', () => {
  it('adds numbers correctly', () => {
    const result1 = addNumbers(10, 20);
    const result2 = addNumbers(10, 10);
    const result3 = addNumbers(10, 43);
    expect(result1).toBe(30);
    expect(result2).toBe(20);
    expect(result3).toBe(53);
  });
});


describe('subtractNumbers', () => {
  it('subtracts numbers correctly', () => {
    const result1 = subtractNumbers(20, 10);    
    const result2 = subtractNumbers(12, 1);
    const result3 = subtractNumbers(43, 10);
    expect(result1).toBe(10);
    expect(result2).toBe(11);
    expect(result3).toBe(33);
  });
});



describe('multiplyNumbers', () => {
  it('multiplies numbers correctly', () => {
    const result1 = multiplyNumbers(10, 20);
    const result2 = multiplyNumbers(12, 1);
    const result3 = multiplyNumbers(43, 2);
    expect(result1).toBe(200);  
    expect(result2).toBe(12);
    expect(result3).toBe(86);
  });
});


describe('divideNumbers', () => {
  it('divide numbers correctly', () => {
    const result1 = divideNumbers(20, 2);
    const result2 = divideNumbers(18, 6);
    const result3 = divideNumbers(80, 16);
    const result4 = divideNumbers(80, 0);
    expect(result1).toBe(10);  
    expect(result2).toBe(3);
    expect(result3).toBe(5);
    expect(result4).toBe("Error")
  });
});


