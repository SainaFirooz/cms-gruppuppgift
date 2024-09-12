const Banner = ({ blok }) => {
  return (
    <div>
      <img
        src={blok.background_image.filename}
        alt=""
        className="h-64 w-full object-cover"
      />
    </div>
  );
};

export default Banner;
