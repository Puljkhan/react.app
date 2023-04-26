const Vjezba2604 = () => {
  //Nizovi
  let arr = ["mama", "tata", "baka", "dida"];
  for (let i = 0; i < arr.length; i++) {
    //if (arr[i] == "baka") {
    //break;
    //}
    //console.log(arr[i]);
  }
  //delete arr[1];
  //arr.push("Ivan");

  //console.log("nas array je:", arr);

  //Funkcije
  let baka;
  function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        baka = arr[i];
        return baka;
      }
    }
  }

  const printText = (text: string) => {
    return text;
  };

  //Objekti
  type CarType = {
    [key: string]: number | string;
  };
  let car: CarType = {
    obujamMotora: 1600,
    godište: 2007,
    boja: "Crna",
    marka: "Volkswagen",
    model: "Polo",
    država: "Njemačka",
    maksimalnaBrzina: 220,
    tipMotora: "Benzin",
  };

  const recenica = `ja imam predobar auto koji ima ${car.obujamMotora} i proizveden je ${car.godište}, boja mu je ${car.boja} `;

  const printValue = (key: string) => {
    return car[key];
  };

  //Zadatak

  //var array = [3, 6, 2, 56, 32, 5, 89, 32];
  //var largest = 0;

  //for (i = 0; i < array.length; i++) {
  //if (array[i] > largest) {
  //largest = array[i];
  //}
  //}

  //console.log(largest);

  return (
    <div className="container">
      <h1>Nizovi</h1>
      <hr />
      <div>{bringBaka()}</div>
      <div>{printText("Neki tekst")}</div>
      <div>{recenica}</div>
      <h5>JSON objekta:</h5>
      <pre>{JSON.stringify(car, null, 2)}</pre>
      <div>{printValue("obujamMotora")}</div>
    </div>
  );
};

export default Vjezba2604;
