import pekara from "../assets/pekara.jpg";

const Mlinar = () => {
  return (
    <header className="navigation">
      <div className="header__inner">
        <div>
          <img className="header__logo" src={pekara} alt="Logo" />
        </div>
        <div className="header__actions">
          <nav className="header__nav">
            <a className="header__nav__item" href="">
              Proizvodi
            </a>
            <a className="header__nav__item" href="">
              Lokacije
            </a>
            <a className="header__nav__item" href="">
              Karijere
            </a>
            <a className="header__nav__item" href="">
              Naša priča
            </a>
            <a className="header__nav__item" href="">
              Kontakt
            </a>
          </nav>
          <div>EN</div>
        </div>
      </div>
    </header>
  );
};

export default Mlinar;
