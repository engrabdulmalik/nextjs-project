"use client";

export default function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="p-8 rounded-lg bg-gradient-to-r from-[#ff80b5] to-[#9089fc] text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-lg">
          We encountered an unexpected error. Please try again later.
        </p>
      </div>
    </div>
  );
}
