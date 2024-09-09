import React from "react";
import Link from "next/link";

const Header = ({ blok }) => {
  const { content } = blok || {};
  const blocks = content?.Blocks || [];

  // Find the header block (assuming there's only one header block)
  const headerBlock =
    blocks.find((block) => block.component === "header") || {};

  // Destructure logo and menu_links from the headerBlock
  const { logo, menu_links } = headerBlock;

  if (!menu_links) {
    return <div>No menu links available</div>;
  }

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo Section (Text) */}
      <div className="logo text-2xl font-bold">{logo || "Default Logo"}</div>

      {/* Navigation Menu */}
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

              {/* Render Submenu if submenu_items exist */}
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
    </header>
  );
};

export default Header;
