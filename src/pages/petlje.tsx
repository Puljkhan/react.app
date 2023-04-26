const Petlje = () => {
  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;

    const inputValue = Number(input.value);
    console.log(inputValue);

    if (inputValue % 2) {
      console.log("neparan broj");
    } else {
      console.log("paran broj");
    }

    //Zadatci
    //1. ispisati u konzolu jeli zadani broj neparan
    //const number = prompt("Enter a number: ");
    //if (number % 2 == 0) {
    //console.log("The number is even.");
    //} else {
    //console.log("The number is odd.");
    //}
    //2. ispisati u konzolu brojeve od 0 do zadanog broja
    function printAllNumbers() {
      for (let i = 0; i <= 10; i += 1) {
        console.log(i);
      }
    }
    printAllNumbers();
    //3. izračunaj opseg kruga gdje je zadani broj polumjer (pi*r*2)
    var circumferenceOfCircle = 2 * Math.PI * 5;
    console.log("Circumference of circle is: " + circumferenceOfCircle);
  };
  return (
    <div className="container">
      <h1>Petlje</h1>
      <hr />
      <div>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
    </div>
  );
};

export default Petlje;
