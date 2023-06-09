import { useState } from "react";

type UserType = {
  name: string;
  lastName: string;
  age: number;
  height: string;
};

const Varijable = () => {
  const [value, setValue] = useState<number>(3.14);

  const name: string = "Jabuka";
  const calories: number = 110;
  const fruitColor: string = "crvena";
  const pi: number = 3.14;
  const number: number = 4;
  let color: string = "red";
  //dostupne marke automobila
  let car: "bmw" | "audi" | "ferrari" = "bmw";
  const obj = {
    name: "Ivan",
    lastName: "Sakoman",
    age: 29,
    height: "183cm",
  };

  color = "green";
  color = "asd";
  //Obije vrijednosti moraju biti true, kako bi program ušao u if statement
  if (pi & number) {
    console.log(pi);
  }
  //samo jedna od varijabli treba biti true
  if (pi | number) {
  }

  const addOnOurValue = (ourValue: number, secondNumber: number) => {
    return number + ourValue + secondNumber;
  };

  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;
    console.log(input.value);
    setValue(Number(input.value));
  };

  return (
    <div className="container">
      <h1>Varijable vježba</h1>
      <div>
        <h4>Vrijednost pi varijable je: {pi + "5"}</h4>
        <h4>Vrijednost color varijable je: {color + "red"}</h4>
        <h4>Vrijednost car varijable je: {car}</h4>
      </div>
      <div>
        <h4>Vrijednost našeg statea je: {value}</h4>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
      <div>Rezultat naše funkcije je: {addOnOurValue(1, 5)}</div>
      <div>
        <h4>
          Vrijednosti našeg objekta su:
          {obj.name} {obj.lastName}
        </h4>
        <div>
          Ime i prezime: {obj.name} {obj.lastName}
        </div>
        <div>Godine: {obj.age}</div>
      </div>
      <table className="table">
        <tr>
          <th>Ime voća</th>
          <th>Kalorijska vrijednost</th>
          <th>Boja voća</th>
        </tr>
        <tr>
          <td>{name}</td>
          <td>{calories}</td>
          <td>{fruitColor}</td>
        </tr>
      </table>
    </div>
  );
};

export default Varijable;
