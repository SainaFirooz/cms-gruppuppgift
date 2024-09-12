import React from "react";
import Link from "next/link";

const Footer = ({ blok }) => {
  // Find the footer block inside the Blocks array
  const footerBlock = blok?.content?.Blocks?.find(
    (block) => block.component === "footer"
  );

  if (!footerBlock) {
    return <footer>Footer content not found.</footer>;
  }

  const {
    newsletter_text,
    description_text,
    input_placeholder,
    columns_sections,
  } = footerBlock;

  return (
    <footer className="bg-gray-50 py-16 px-4 text-gray-800 mt-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Main Layout with Newsletter and Links Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Newsletter Section */}
          <div className="md:col-span-2">
            <h2 className="text-black text-3xl  mb-4 font-poppins  font-bold">
              {newsletter_text || "Sign up for our newsletter"}
            </h2>
            <p className="text-gray-500 mb-6">
              {description_text ||
                "Be the first to know about our special offers, new product launches, and events"}
            </p>
            <form className="flex items-center max-w-lg border border-gray-300 rounded">
              <input
                type="email"
                placeholder={input_placeholder || "Email Address"}
                className="flex-grow border-none px-4 py-3 text-gray-600 focus:outline-none placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-3 text-black font-semibold border-l border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Link Sections */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns_sections?.map((section) => (
              <div key={section._uid}>
                <h3 className="text-base font-bold mb-4 text-gray-900">
                  {section.title || "Footer Navigation"}
                </h3>
                <ul className="space-y-2 cursor-pointer">
                  {section.link_groups?.map((linkGroup) => (
                    <li key={linkGroup._uid}>
                      {linkGroup.links?.cached_url ? (
                        <Link href={linkGroup.links.cached_url}>
                          <a className="font-boldtext-sm text-gray-600 hover:text-black transition">
                            {linkGroup.title || "Link"}
                          </a>
                        </Link>
                      ) : (
                        <span className="text-sm text-gray-400  hover:text-black">
                          {linkGroup.title || "No Link Available"}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
