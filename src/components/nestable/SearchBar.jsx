"use client";

import { useState } from "react";
import Link from "next/link";
import { StoryblokCMS } from "@/utils/cms";

export default function SearchBar({ search_placeholder = "Search" }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle searching for products
  const handleSearch = async (query) => {
    if (query.length > 2) {
      try {
        console.log("Searching for:", query);

        // Call the searchProducts function
        const results = await StoryblokCMS.searchProducts(query);
        console.log("Storyblok API response:", results); // Log the API response for debugging
        setSearchResults(results || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]); // Clear results if search term is too short
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    handleSearch(query); // Trigger search as the user types
  };

  const clearSearchOnClick = () => {
    setSearchTerm(""); // Clear the search term after clicking a product
    setSearchResults([]); // Clear search results after clicking
  };

  const renderProducts = () => {
    return searchResults?.map((story) => (
      <Link href={`/products/${story.slug}`} key={story.id}>
        <div
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onClick={clearSearchOnClick} // Clear the search when clicking a product
        >
          <p>{story.content.product_name}</p>{" "}
          {/* Assuming 'product_name' exists */}
        </div>
      </Link>
    ));
  };

  return (
    <div className="relative ml-4">
      <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
        <button
          type="submit"
          className="text-gray-500 hover:text-gray-700"
          aria-label="Search"
        >
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
          placeholder={search_placeholder}
          className="ml-2 border rounded-lg px-3 py-1 focus:outline-none"
          value={searchTerm}
          onChange={handleInputChange} // Trigger search on input change
        />
      </form>

      {/* Dropdown box for search results */}
      {searchResults.length > 0 && (
        <div className="absolute bg-white border border-gray-300 rounded-lg mt-1 w-full shadow-lg max-h-60 overflow-y-auto z-50">
          {renderProducts()}
        </div>
      )}
    </div>
  );
}
