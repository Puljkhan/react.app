import logo from "./../assets/logo.jpg";
import hamburger from "./../assets/icon-hamburger.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div>
          <img className="header__logo" src={logo} alt="Logo" />
        </div>
        <div className="header__actions">
          <nav className="header__nav">
            <a className="header__nav__item" href="">
              Homeeee
            </a>
            <a className="header__nav__item" href="">
              Exercises
            </a>
            <a className="header__nav__item" href="running">
              Running
            </a>
            <a className="header__nav__item" href="bootstrap">
              Bootstrap
            </a>
            <a className="header__nav__item" href="petlje">
              Petlje
            </a>
            <a className="header__nav__item" href="chat">
              Chat
            </a>
            <a className="header__nav__item" href="pokemons">
              Pokemons
            </a>
            <a className="header__nav__item" href="europecountry">
              Europe Country
            </a>
            <a className="header__nav__item" href="todo">
              To do list
            </a>
            <a className="header__nav__item" href="vjezba1905">
              Vjezba1905
            </a>
            <a className="header__nav__item" href="vjezba0305">
              Vjezba0305
            </a>
            <a className="header__nav__item" href="europe">
              Europe
            </a>
            <a className="header__nav__item" href="vjezba1505">
              Vjezba1505
            </a>
            <a className="header__nav__item" href="countries">
              Countries
            </a>
            <a className="header__nav__item" href="vjezba2804">
              Vjezba2804
            </a>
            <a className="header__nav__item" href="breweries">
              Breweries
            </a>
            <a className="header__nav__item" href="vjezba2604">
              Vjezba2604
            </a>
            <a className="header__nav__item" href="/ispit">
              CSS Ispit
            </a>
            <a className="header__nav__item" href="/mlinar">
              Mlinar
            </a>
            <a className="header__nav__item" href="/fave">
              Fave
            </a>
            <a className="header__nav__item" href="/varijable">
              Varijable
            </a>
          </nav>
          <div>IP</div>
        </div>
        <div className="header__hamburger">
          <img src={hamburger} alt="hamburger menu icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
