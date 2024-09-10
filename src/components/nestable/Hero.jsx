const Hero = ({ blok }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{blok.title}</h1>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
        {blok.text}
      </p>
      {blok.button_text && (
        <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition duration-300">
          {blok.button_text}
        </button>
      )}
    </div>
  );
};

export default Hero;
