import iconBell from "./../assets/icon-bell.svg";

const Header2 = () => {
  return (
    <header className="header--fave">
      <nav className="header__nav--fave">
        <div className="header__nav__item--fave">Prizes overview</div>
        <div className="header__nav__item--fave">Redeem prize</div>
      </nav>
      <div className="header--fave__logo">
        <img src={iconBell} alt="Icon Bell" />
      </div>
    </header>
  );
};

export default Header2;
