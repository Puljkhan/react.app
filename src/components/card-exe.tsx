import premier from "./../assets/premier.jpg";
import Toggle from "./toggle";

const Card2 = () => {
  return (
    <div className="card">
      <div className="card__header">
        <div>
          <img className="card__header__img" src={premier} alt="premier" />
        </div>
        <div className="card__header__text">
          <h3>GameWeek 17</h3>
          <h3>Premier League</h3>
        </div>
      </div>
      <div className="card__body">
        <div>
          <h3 className="card__body__title">Winning prize</h3>
          <h3 className="card__body__desc">Signed BVB Jersey</h3>
        </div>
        <div className="card__body__banner">
          <div>14</div>
          <div>Days</div>
        </div>
      </div>
      <hr />
      <footer className="card__footer">
        <div className="card__footer__text1">
          <div>Game points</div>
          <div>1000</div>
        </div>
        <div className="card__footer__text2">
          <div>Game entries</div>
          <div>1452</div>
        </div>
        <div className="card__footer__text3">
          <div>Reminder</div>
          <Toggle />
        </div>
      </footer>
    </div>
  );
};

export default Card2;
