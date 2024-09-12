const Image = ({ blok }) => {
  return (
    <div className="pl-90px pr-90px  pb-20px flex justify-center">
      <img src={blok?.image.filename} alt="" className="rounded-lg" />
    </div>
  );
};

export default Image;
