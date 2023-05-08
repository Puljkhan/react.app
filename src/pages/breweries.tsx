import { useEffect, useState } from "react";

type BreweryType = {
name: string;
}


const Breweries = () => {
  const [data, setData] = useState<any>([]);
  const [dataByCity, setDataByCity] = useState<any>([]);
  const [dataByName, setDataByName] = useState<any>([]);

  const getBreweries = () => {
    fetch("https://api.openbrewerydb.org/v1/breweries")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error(error));
  };

  const getBreweriesByName = () => {
    fetch("https://api.openbrewerydb.org/v1/breweries/search?query={search}")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataByName(jsonData);
        console.log("byName: ", jsonData);
      })
      .catch((error) => console.error(error));
  };

  const getBreweryByCity = (city: string) => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=3`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataByCity(jsonData);
        console.log("byCity: ", jsonData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBreweries();
    getBreweryByCity("san_diego");
    getBreweriesByName();
  }, []);

  return (
    <div className="container">
      <h1>Breweries</h1>
      <div>
        {data.length > 0 ? (
          data.map((brewery: any) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar</div>
        )}
        <h1>By City</h1>
        <div>
          {dataByCity.map((brewery: any) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })}
        </div>
      </div>

      <h1>By Name</h1>
      <div>
          {dataByName.lenght > 0 ? (}
          {dataByName.map((brewery: any) => }
          return <div key={brewery.id}>{brewery.name}</div>;
  })
  ) : (
      </div>
    </div>
  );
};

export default Breweries;
