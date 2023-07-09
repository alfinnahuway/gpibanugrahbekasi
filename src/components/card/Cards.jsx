import CardsFunction from "./CardsFunction";

export const Cards = () => {
  return (
    <div className="flex justify-center items-center p-3 w-full bg-white border rounded-xl gap-4">
      <div className="flex justify-center flex-col sm:w-56 lg:w-40  border-none rounded-xl overflow-hidden">
        <div className="flex justify-center items-center w-full py-10 bg-[#ffeef1]">
          <h1 className="text-sm font-bold text-[#bf0a30]">Mar 3</h1>
        </div>
        <div className="flex justify-center items-center py-2 px-2 w-full bg-[#bf0a30]">
          <h4 className="text-sm font-bold text-white">6.00 am</h4>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 sm:text-xl">
        New Families During National Adoption Month
      </h1>
    </div>
  );
};

export const CardsYoutube = ({ respone }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <iframe
        className="w-full h-[40vh]"
        src={respone}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export const CardsMinistries = ({ head, image, desc }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col border-1 rounded-2xl overflow-hidden bg-white">
      <CardsFunction head={head} image={image} descriptions={desc} />
    </div>
  );
};
