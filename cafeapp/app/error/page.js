// app/error/page.js
"use client";

export default function ErrorPage({ searchParams }) {
  const message = searchParams.message || "An unexpected error occurred.";
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="p-8 rounded-lg bg-gradient-to-r from-[#ff80b5] to-[#9089fc] text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
}
