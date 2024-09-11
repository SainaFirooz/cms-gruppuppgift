const Grid = ({ blok }) => {
  console.log(blok);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8">
      {" "}
      {/* Added px-6 and py-8 for horizontal and vertical padding */}
      {blok.columns.map((gridItem, index) => {
        return (
          <div
            key={index}
            className={`flex justify-center items-center ${
              index === 1 ? "-mt-8" : "mt-0"
            }`}
          >
            <img
              src={gridItem.image.filename}
              alt={`Grid item ${index}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
