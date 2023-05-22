import Button from "./button";

const Card = () => {
  return (
    <div className="card">
      <div className="card__img">
        <img
          src="https://source.unsplash.com/random/150x150/?flowers"
          alt="flowers"
        />
      </div>
      <br />
      <h2 className="card__title">Naslov</h2>
      <p className="card__desc">Ovo je neki sasvim novi tekst</p>
      <p>Najnoviji tekst</p>
      <br />

      <footer className="card__footer">
        <Button color="green" value="OK" />
        <Button color="green" value="Cancel" />
      </footer>
    </div>
  );
};

export default Card;
