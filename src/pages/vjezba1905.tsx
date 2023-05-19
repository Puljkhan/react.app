import { useState, useEffect } from "react";

type CountryType = {
  name: NameType;
};

type NameType = {
  common: string;
  official: string;
};

const Vjezba1905 = () => {
  const [asiaData, setAsiaData] = useState<CountryType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const searchAsia = (asiaName: string) => {
    fetch("https://restcountries.com/v3.1/region/asia")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAsiaData(data);
      })
      .catch((err) => console.log(err));
  };

  const getAsia = () => {
    fetch("https://restcountries.com/v3.1/region/asia")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAsiaData(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAsia();
  }, []);
  return (
    <div className="container">
      <h1 className="asia__title">Search country</h1>
      <div className="asia__header">
        <input
          type="text"
          className="asia__input"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="asia__btn" onClick={() => searchAsia(searchValue)}>
          Find country
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {asiaData.map((country: CountryType) => {
              return (
                <tr>
                  <td>
                    {country.name.common}, {country.name.official}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vjezba1905;
