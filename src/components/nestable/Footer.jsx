import React from "react";
import Link from "next/link";

const Footer = ({ blok }) => {
  const {
    newsletter_text,
    description_text,
    input_placeholder,
    columns_sections,
  } = blok || {};

  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            {newsletter_text || "Sign up for our newsletter"}
          </h2>
          <p className="mb-4">
            {description_text ||
              "Be the first to know about our special offers"}
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder={input_placeholder || "Enter your email"}
              className="border rounded-lg px-4 py-2 mr-2 w-full md:w-2/3"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns_sections?.map((section) => (
            <div key={section._uid}>
              <h3 className="text-lg font-bold mb-2">{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link._uid}>
                    <Link href={link.url || "#"}>
                      <a className="text-gray-700 hover:text-black">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
