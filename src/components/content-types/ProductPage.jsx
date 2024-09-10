import React from "react";
import Image from "next/image";

const ProductPage = ({ blok }) => {
  const {
    product_name = "Unnamed Product",
    product_image = null,
    product_price = "N/A",
    product_description = "No description available",
    product_colors = [],
    product_sizes = [],
  } = blok || {};

  return (
    <section className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          {product_image ? (
            <Image
              src={product_image.filename}
              alt={product_name}
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          ) : (
            <div className="bg-gray-200 w-full h-full rounded-md" />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-start">
          {/* Product Name and Price */}
          <h1 className="text-3xl font-semibold mb-2">{product_name}</h1>
          <p className="text-xl font-bold mb-4">${product_price}</p>

          {/* Product Description */}
          <p className="text-gray-600 mb-6">{product_description}</p>

          {/* Product Colors */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Color</h3>
            <div className="flex space-x-3">
              {product_colors.map((colorBlock, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full border border-gray-400`}
                  style={{ backgroundColor: colorBlock.color_code }}
                  title={colorBlock.color_name}
                ></div>
              ))}
            </div>
          </div>

          {/* Product Sizes */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            <div className="flex space-x-3">
              {product_sizes.map((size, index) => (
                <button
                  key={index}
                  className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black uppercase"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Size Guide and Model Info */}
          <div>
            <a
              href="#"
              className="text-sm text-blue-500 underline mb-2 inline-block"
            >
              Size & Fit Guide
            </a>
            <p className="text-sm text-gray-500">
              Height of model: 189 cm. / 6' 2" Size 41
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
