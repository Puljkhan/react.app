const Footer2 = () => {
  return (
    <div className="footer__wrap footer__wrap--secondary">
      <footer className="footer">
        <div>
          <img className="footer__logo" src={bestBuy} alt="BestBuy logo" />
          <img className="footer__logo" src={kosher} alt="Kosher logo" />
          <img
            className="footer__logo"
            src={kosherDairy}
            alt="Kosher Dairy logo"
          />
          <img
            className="footer__logo"
            src={superBrands2012}
            alt="Superbrands 2012 award logo"
          />
          <img className="footer__logo" src={halal} alt="Halal logo" />
          <img
            className="footer__logo"
            src={superBrands2016}
            alt="Superbrands 2016-2017 award logo"
          />
          <img
            className="footer__logo"
            src={bitmap}
            alt="Accomplishment logo"
          />
          <img className="footer__logo" src={ifs} alt="IFS Food logo" />
        </div>
        <nav className="footer__docs">
          <div className="footer__docs__item">Sitemap</div>
          <div className="footer__docs__item">Dokumenti</div>
          <div className="footer__docs__item">Pravila privatnosti</div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer2;
