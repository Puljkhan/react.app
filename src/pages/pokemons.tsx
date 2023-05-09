import { useEffect, useState } from "react";

type BerryType = {
  url: string;
  name: string;
};

const Pokemons = () => {
  const getCapitalCity = () => {
    fetch("https://restcountries.com/v3.1/capital/tallinn")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        setBerries(data.results);
      })
      .catch((err) => console.log(err));
  };

  const [berries, setBerries] = useState<BerryType[]>([]);
  const getBerries = () => {
    fetch("https://pokeapi.co/api/v2/berry")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        setBerries(data.results);
      })
      .catch((err) => console.log(err));
  };

  const searchPokemon = (pokemonName: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    searchPokemon("bulbasaur");
    getBerries();
    getCapitalCity();
  }, []);

  return (
    <div className="container">
      <h1 className="pokemons__title">Search Pokemon Color</h1>
      <div className="pokemons__header"></div>
      <h1>Capital City</h1>
      <div></div>
      {/* <h1>All berries</h1> */}
      {/* <div> */}
      {/* {berries.map((berry) => { */}
      {/* return <div>{berry.name}</div>; */}
      {/* })} */}
      {/* </div> */}
    </div>
  );
};

export default Pokemons;
