"use client";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="p-8 rounded-lg bg-gradient-to-r from-[#ff80b5] to-[#9089fc] text-white text-center shadow-lg">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Page Not Found</p>
        <p className="text-lg">
          The page you are looking for does not exist. Please check the URL or
          return to the homepage.
        </p>
      </div>
    </div>
  );
}
