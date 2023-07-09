const CardsFunction = ({ head, image, descriptions }) => {
  let countWords = descriptions.split(" ", 15);

  return (
    <>
      <div className="w-full">
        <img src={image} alt="" />
      </div>
      <div className="w-full p-2">
        <h1 className="text-xl">{head}</h1>
        <p className="p-2 text-justify">
          {countWords.filter((word) => word !== "").join(" ")}
          <a className="text-red-300" href="">
            ... Read more
          </a>
        </p>
      </div>
    </>
  );
};

export default CardsFunction;
