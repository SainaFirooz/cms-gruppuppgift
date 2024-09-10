import { useEffect, useState } from "react";
import Image from "next/image";
import { StoryblokCMS } from "@/utils/cms";

const ProductList = ({ blok }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const prod = await StoryblokCMS.getProducts();
        setProducts(prod);
      } catch (e) {
        console.log("Error fetching products:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [blok]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {blok.title || "Our Products"}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <li
              key={product.uuid}
              className="border rounded-lg p-4 flex flex-col items-center"
            >
              {product.content.product_image && (
                <div className="w-full aspect-square mb-4 relative overflow-hidden rounded-lg">
                  <Image
                    src={product.content.product_image.filename}
                    alt={product.content.product_name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <h3 className="font-medium text-center mb-2">
                {product.content.product_name || "Unnamed Product"}
              </h3>
              <span className="text-sm text-gray-500 mb-2">M</span>
              <p className="text-lg font-bold text-center mb-2">
                ${product.content.product_price || "N/A"}
              </p>
            </li>
          ))
        ) : (
          <li>No products found.</li>
        )}
      </ul>
    </section>
  );
};

export default ProductList;
