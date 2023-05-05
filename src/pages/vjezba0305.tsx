const Vjezba0305 = () => {
  //1. dohvatimo box i promjenimo mu background-color (kroz JS)
  //2. dodamo dodatnu klasu na box koja će povecati njegove dimenzije
  //3. na klik animiramo box do 30px i nazad (kroz JS)
  //3.2. animirati box dijagonalno do (30px,30px) i nazad do 50px
  //4. kreiramo funkciju koja će imati lokalnu varijablu u kojoj ćemo izracunati sumu 2 parametra i rezultat ispisati unuatr box-a
  //5. dodaj onClick event i na klik smanji dimenzije box-a

  const handleClick = () => {
    let box = document.getElementsByClassName("box")[0] as HTMLDivElement;
    box.style.transform = "scale(0.2)";
  };

  const sum = (x: number, y: number) => {
    return x + y;
  };

  const box = document.getElementsByClassName("box")[0] as HTMLDivElement;
  box.style.backgroundColor = `red`;

  return (
    <div className="container">
      <h1>Vježba 0305</h1>
      <hr />
      <div className="box">{sum(2, 2)}</div>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
};

export default Vjezba0305;
