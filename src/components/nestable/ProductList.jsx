"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StoryblokCMS } from "@/utils/cms";

const ProductList = ({ blok }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch all products
        const prod = await StoryblokCMS.getProducts();
        console.log("Fetched products:", prod);

        // Get selected product UUIDs from the blok.product field
        const selectedProductUUIDs = blok.product || [];
        console.log("Selected product UUIDs:", selectedProductUUIDs);

        // Filter products by matching UUID
        const filteredProducts = prod.filter(
          (product) =>
            selectedProductUUIDs.includes(product.uuid) && // Match UUIDs instead of slugs
            product.content.product_name &&
            product.content.product_price &&
            product.content.product_sizes?.length > 0
        );
        console.log("Filtered products:", filteredProducts);

        setProducts(filteredProducts);
      } catch (e) {
        console.log("Error fetching products:", e);
      }
    };

    fetchProducts();
  }, [blok]);

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {blok.title || "Our Products"}
      </h2>
      {products.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <li
              key={product.uuid}
              className="border rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300"
            >
              <Link href={`/${product.full_slug}`} legacyBehavior passHref>
                <a className="w-full">
                  {product.content.product_image && (
                    <div className="w-full aspect-square mb-4 relative overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={product.content.product_image.filename}
                        alt={product.content.product_name}
                        layout="fill"
                        objectFit="cover"
                        className="hover:opacity-90"
                      />
                    </div>
                  )}
                  <h3 className="font-medium text-center mb-2 text-lg">
                    {product.content.product_name}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-2">
                    {product.content.product_sizes.map((size, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 border rounded-lg text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                  <p className="text-lg font-bold text-center text-black mb-2">
                    ${product.content.product_price}
                  </p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProductList;
