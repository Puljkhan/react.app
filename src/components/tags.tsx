import Lightbulb from "./../assets/icon-lightbulb";

const Tags = () => {
  return (
    <div>
      <div className="tag">
        <span className="tag__label">Tag 1</span>
        <div className="tag__icon">
          <Lightbulb />{" "}
        </div>
      </div>
      <div className="tag">
        <span className="tag__label">Tag 2</span>
        <div className="tag__icon">
          <Lightbulb />{" "}
        </div>
      </div>
      <div className="tag">
        <span className="tag__label">Tag 3</span>
        <div className="tag__icon">
          <Lightbulb />{" "}
        </div>
      </div>
    </div>
  );
};

export default Tags;
