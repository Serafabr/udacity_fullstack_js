import axios from 'axios';

// Get country's info by name
export async function getCountry(countryName: string) {
  const getData = await axios(`https://restcountries.com/v3.1/name/${countryName}`);
  const country = getData.data[0];
  
  const result = {
    name: country.name.common,
    capital: country.capital[0],
    currencies: country.currencies,
    region: country.region,
    population: country.population,
  }
  
  return result;
}

type CountryT = {
  name: { common: string },
  capital: string[],
}

// Get countries name by region
export async function getCountriesByRegion(regionName: string) {
  const getData = await axios(`https://restcountries.com/v3.1/region/${regionName}`);
  const countries = getData.data;
  
  const result: string[] = [];
  countries.forEach((country: CountryT) => { result.push(country.name.common) })
  
  return result;
}

// Get countries capitals by region
export async function getCapitalsByRegion(regionName: string) {
  const getData = await axios(`https://restcountries.com/v3.1/region/${regionName}`);
  const countries = getData.data;
  
  const result: string[] = [];
  countries.forEach((country: CountryT) => !!country.capital && result.push(country.capital[0]))
  
  return result;
}