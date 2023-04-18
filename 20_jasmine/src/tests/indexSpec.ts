import myFunc from '../index';

describe('myFunc tests', () => { 
  it('expect myFunc(5) to equal 25', () => {
    expect(myFunc(8.85)).toBeCloseTo(45, 0);
  })
})