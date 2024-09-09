import React from "react";
import Link from "next/link";

const Header = ({ blok }) => {
  const { content } = blok || {};
  const blocks = content?.Blocks || [];

  const headerBlock =
    blocks.find((block) => block.component === "header") || {};

  const { logo, menu_links, search_placeholder } = headerBlock;

  if (!menu_links) {
    return <div>No menu links available</div>;
  }

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-8">
        <div className="font-poppins text-2xl font-bold">
          {logo || "Default Logo"}
        </div>

        <nav className="menu_links">
          <ul className="flex space-x-4">
            {menu_links.map((menuItem) => (
              <li key={menuItem._uid} className="relative group">
                <Link
                  href={menuItem.link_url?.url || "#"}
                  className="hover:text-gray-700"
                >
                  {menuItem.link_name || "Unnamed Link"}
                </Link>

                {Array.isArray(menuItem.submenu_items) &&
                  menuItem.submenu_items.length > 0 && (
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 space-y-2 p-4">
                      {menuItem.submenu_items.map((submenuItem) => (
                        <li key={submenuItem._uid}>
                          <Link
                            href={submenuItem.link_url?.url || "#"}
                            className="block px-2 py-1 hover:bg-gray-100"
                          >
                            {submenuItem.link_name || "Unnamed Submenu Item"}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-4">
          <form className="flex items-center">
            <button type="submit" className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <input
              type="text"
              placeholder={search_placeholder || "Search"}
              className="ml-2 border rounded-lg px-3 py-1 focus:outline-none"
            />
          </form>
        </div>
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z"
            stroke="#374151"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
