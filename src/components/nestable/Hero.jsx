const Hero = ({ blok }) => {
  return (
    <div
      className=""
      style={{ backgroundColor: blok.background_color?.color || "#FFFFFF" }}
    >
      <div className="max-w-5xl mx-auto  py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{blok.title}</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          {blok.text}
        </p>
        {blok.button_text && (
          <button className="px-6 py-3 border border-gray-600 text-black hover:bg-gray-300 transition duration-300 ease-in-out">
            {blok.button_text}
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
