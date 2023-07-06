import { 
  getCountry, 
  getCountriesByRegion, 
  getCapitalsByRegion 
} from '../index';

describe('getCountry function', () => {
  it('getCountry(brazil) returns correct info', async () => {
    const data = await getCountry('brazil');
    expect(data).toEqual({
      name: 'Brazil',
      capital: 'Brasília',
      currencies: { BRL: { name: 'Brazilian real', symbol: 'R$' } },
      region: 'Americas',
      population: 212559409
    });
  });
});

describe('getCountriesByRegion function', () => {
  it('getCountriesByRegion(americas) returns correct info', async () => {
    const data = await getCountriesByRegion('americas');
    expect(data).toContain('Brazil');
  });
  it('getCountriesByRegion(europe) returns correct info', async () => {
    const data = await getCountriesByRegion('europe');
    expect(data).toContain('France');
  });
  it('getCountriesByRegion(asia) returns correct info', async () => {
    const data = await getCountriesByRegion('asia');
    expect(data).toContain('China');
  });
});

describe('getCapitalsByRegion function', () => {
  it('getCapitalsByRegion(americas) returns correct info', async () => {
    const data = await getCapitalsByRegion('americas');
    expect(data).toContain('Brasília');
  });
  it('getCapitalsByRegion(europe) returns correct info', async () => {
    const data = await getCapitalsByRegion('europe');
    expect(data).toContain('Paris');
  });
  it('getCapitalsByRegion(asia) returns correct info', async () => {
    const data = await getCapitalsByRegion('asia');
    expect(data).toContain('Beijing');
  });
});