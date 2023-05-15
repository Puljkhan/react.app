import { useEffect } from "react";

const Vjezba1505 = () => {
  //1. Funkcija koja zbraja dva broja iz parametara
  const add = (a: number, b: number) => {
    return a + b;
  };
  //2. Funkcija koja spaja dva array-a stringova
  const concatArrays = (a: string, b: string) => {
    return a.concat(b);
  };

  //3. Funkcija koja treba u konzolu ispisati brojeve od 1 do 10
  const countToTen = () => {
    for (var i = 1; i <= 10; i++) {
      console.log(i);
    }
  };

  //4. Funkcija koja zbraja sve brojeve iz array-a
  function sumArray(array: any) {
    let sum = 0;

    for (let i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
    console.log(sum);
    return sum;
  }

  //5. Funkcija koja će vratiti puno ime iz objekta user
  type UserType = {
    firstName: string;
    lastName: string;
  };
  const user: UserType = {
    firstName: "Ivan",
    lastName: "Sakoman",
  };

  const getFullName = (person: UserType) => {
    return person.firstName + person.lastName;
  };

  getFullName(user);

  //6. Funkcija koja pretvara celsius to fahrenheit
  //formula =>  °C * 1.8 + 32 = °F
  const celsiusToFahrenheit = (celsius: number) => {
    const celsius = prompt(25);
    return celsius * (1.8 + 32);
  };

  //7. Funkcija koja ispisuje string naopako
  const reverseString = (str: boolean) => {
    let reversedStr = "";
    for (let i = str.length - 1; i > 0; i--) {
      reversedStr += str[i - 1];
    }
    return reversedStr;
  };

  useEffect(() => {
    //Ovdje možemo pokretati funkciju koju testiramo
    console.log(add(1, 2));
    console.log(concatArrays);
    countToTen();
    sumArray([1, 2, 3, 4, 5, 6]);
  }, []);
  return <div className="container"></div>;
};

export default Vjezba1505;
