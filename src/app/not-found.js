export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-4">
        Oops! The page you are looking for doesn't exist.
      </p>

      {/* Sad Face SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mt-6 w-24 h-24 text-gray-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15s1.5-2 4-2 4 2 4 2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>

      <a
        href="/products"
        className="mt-8 inline-block px-6 py-2 border border-gray-600 text-black hover:bg-gray-300 transition duration-300 ease-in-out"
      >
        Go to products
      </a>
    </div>
  );
}
