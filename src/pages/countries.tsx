import { useEffect, useState } from "react";
import LeftSide from "../assets/left-side";
import PopulationItem from "../assets/population-item";
import RightSide from "../assets/right-side";

type CountryType = {
  name: CountryNameType;
  maps: CountryMapsType;
  population: number;
  borders: string;
  car: CountryCarType;
};

type CountryNameType = {
  common: string;
  official: string;
};

type CountryMapsType = {
  googleMaps: string;
  openStreetMaps: string;
};

type CountryCarType = {
  side: string;
  signs: string;
};

const Countries = () => {
  const [countriesData, setCountriesData] = useState<CountryType[]>([]);

  const getCountries = () => {
    fetch("https://restcountries.com/v3.1/region/africa")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCountriesData(data);
      })
      .catch((err) => console.error(err));
  };

  const checkSide = (side: string) => {
    if (side == "left") {
      return <LeftSide />;
    }
    if (side == "right") {
      return <RightSide />;
    }
  };

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div className="container">
      <h1>Africa</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Map</th>
            <th>Population</th>
            <th>Borders</th>
            <th>Cars</th>
          </tr>
        </thead>
        <tbody>
          {countriesData.map((country: CountryType) => {
            return (
              <tr>
                <td>
                  {country.name.common}, {country.name.official}
                </td>
                <td>
                  <a href={country.maps.googleMaps}>Google Maps</a>{" "}
                  <a href={country.maps.openStreetMaps}>Open Street Maps</a>
                </td>
                <td>
                  {country.population.toLocaleString("en-US")}{" "}
                  <PopulationItem />
                </td>
                <td></td>
                <td>
                  {checkSide(country.car.side)} {country.car.side},{" "}
                  {`${country.car.signs}`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Countries;
