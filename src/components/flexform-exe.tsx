import IconArrow from "./../assets/icon-arrow";
const FlexformExe = () => {
  return (
    <>
      <h4>first example</h4>
      <div className="flex flex--first">
        <div className="flex--first__left">
          <img
            src="https://source.unsplash.com/random/50x50/?phone"
            alt="exercise image"
          />
          <span>text</span>
        </div>
        <div className="flex--first__right">
          <IconArrow />
        </div>
      </div>
      <div className="flex flex--second"></div>
    </>
  );
};

export default FlexformExe;
