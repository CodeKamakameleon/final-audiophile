export const Shopbar = () => {
  return (
    <div className="shopbar">
      <div className="card">
        <img
          src="./images/category-headphones/mobile/image-xx99-mark-one.jpg"
          alt="img-xx99-mark-1"
        />
        <p className="card-header">HEADPHONES</p>
        <button className="card-btn">
          SHOP <span>&gt;</span>{" "}
        </button>
      </div>
      <div className="card">
        <p className="card-header">SPEAKERS</p>
        <button className="card-btn">
          SHOP <span>&gt;</span>
        </button>
      </div>
      <div className="card">
        <p className="card-header">EARPHONES</p>
        <button className="card-btn">
          SHOP <span>&gt;</span>{" "}
        </button>
      </div>
    </div>
  );
};
