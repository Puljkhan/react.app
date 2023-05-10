import { useEffect, useState } from "react";

type CountryType = {
  name: CountryNameType;
  flags: CountryFlagsType;
  currencies: CountryCurrenciesType;
  capital: string[];
};

type CountryNameType = {
  common: string;
  official: string;
};

type CountryFlagsType = {
  png: string;
  svg: string;
};

type CountryCurrenciesType = {
  [currency: string]: {
    name: string;
    symbol: string;
  };
};

const Europe = () => {
  const [europeData, setEuropeData] = useState<CountryType[]>([]);

  const getEurope = () => {
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEuropeData(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getEurope();
  }, []);

  return (
    <div className="container">
      <h1>Europe</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Flag</th>
            <th>Currencies</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {europeData.map((country: CountryType) => {
            return (
              <tr>
                <td>
                  {country.name.common}, {country.name.official}
                </td>
                <td>
                  <img src={country.flags.png} alt="country flags" />
                </td>
                <td>
                  {Object.keys(country.currencies).map((key) => {
                    return (
                      <>
                        {key}, {country.currencies[key].name},{" "}
                        {country.currencies[key].symbol}{" "}
                      </>
                    );
                  })}
                </td>
                <td>{country.capital}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Europe;
