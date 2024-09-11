"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation for App Router
import SearchBar from "./SearchBar";

const Header = ({ blok }) => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);
  const router = useRouter(); // Initialize router

  const { content } = blok || {};
  const blocks = content?.Blocks || [];
  const headerBlock =
    blocks.find((block) => block.component === "header") || {};
  const { logo, menu_links } = headerBlock;

  if (!menu_links) {
    return <div>No menu links available</div>;
  }

  const getAbsoluteUrl = (url) => {
    if (url && !url.startsWith("/")) {
      return `/${url}`; // Ensure URL starts with '/'
    }
    return url || "/";
  };

  const handleNavigation = (url) => {
    const absoluteUrl = getAbsoluteUrl(url);
    if (router.asPath !== absoluteUrl) {
      router.push(absoluteUrl);
    } else {
      router.replace(absoluteUrl);
    }
  };

  const renderSecondLevelSubmenu = (submenuItems) => {
    return (
      <ul className="absolute left-full top-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
        {submenuItems.map((submenuItem) => (
          <li key={submenuItem._uid}>
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition duration-200 ease-in-out"
              onClick={() =>
                handleNavigation(submenuItem.submenu_link?.cached_url)
              }
            >
              {submenuItem.submenu_name ||
                submenuItem.link_name ||
                "Unnamed Submenu Item"}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const renderFirstLevelSubmenu = (submenuItems) => {
    return (
      <ul className="absolute left-0 top-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
        {submenuItems.map((submenuItem) => (
          <li
            key={submenuItem._uid}
            className="relative group"
            onMouseEnter={() => setHoveredSubMenu(submenuItem._uid)}
            onMouseLeave={() => setHoveredSubMenu(null)}
          >
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition duration-200 ease-in-out"
              onClick={() =>
                handleNavigation(submenuItem.submenu_link?.cached_url)
              }
            >
              {submenuItem.submenu_name ||
                submenuItem.link_name ||
                "Unnamed Submenu Item"}
            </div>

            {Array.isArray(submenuItem.submenu_items) &&
              submenuItem.submenu_items.length > 0 &&
              hoveredSubMenu === submenuItem._uid && (
                <div className="relative">
                  {renderSecondLevelSubmenu(submenuItem.submenu_items)}
                </div>
              )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Left Section: Logo, Navigation Menu, Search Bar */}
      <div
        className="flex items-center space-x-8"
        style={{ marginLeft: "10%" }}
      >
        {/* Logo */}
        <div
          className="font-poppins text-2xl font-bold cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          {logo || "Default Logo"}
        </div>

        {/* Navigation Menu */}
        <nav className="menu_links">
          <ul className="flex space-x-4">
            {menu_links.map((menuItem) => (
              <li
                key={menuItem._uid}
                className="relative inline-block text-left group cursor-pointer"
                onMouseEnter={() => setHoveredMenu(menuItem._uid)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div
                  className="border-b-2 border-transparent group-hover:border-black transition duration-300 ease-in-out"
                  onClick={() =>
                    handleNavigation(menuItem.link_url?.cached_url)
                  }
                >
                  <h2 className="text-[1.1rem] tracking-[-0.6px]">
                    {menuItem.link_name || "Unnamed Link"}
                  </h2>
                </div>

                {Array.isArray(menuItem.submenu_items) &&
                  menuItem.submenu_items.length > 0 &&
                  hoveredMenu === menuItem._uid && (
                    <div className="relative group">
                      {renderFirstLevelSubmenu(menuItem.submenu_items)}
                    </div>
                  )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Bar */}
        <SearchBar />
      </div>

      {/* Right Section: Cart Icon */}
      <div className="flex items-center space-x-4">
        {/* Cart Icon */}
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Shopping Cart"
          className="cursor-pointer"
        >
          <path
            d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z"
            stroke="#374151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>

        {/* Cart Item Count */}
        <span className="text-gray-700 text-sm">3</span>
      </div>
    </header>
  );
};

export default Header;
