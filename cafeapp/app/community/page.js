import Image from "next/image";

const slides = [
  { id: 1, image: "/assets/community_image_1.png", alt: "Slide 1" },
  { id: 2, image: "/assets/community_image_2.png", alt: "Slide 2" },
  // Add more slides as needed
];

const CommunityPage = () => {
  return (
    <div className="bg-black min-h-screen p-8 text-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ff80b5] to-[#9089fc] sm:text-6xl">
          Welcome to Our Community
        </h1>
        <p className="text-lg mt-2">
          Join us in celebrating the vibrant and welcoming spirit of the Hakuna
          Matata Cafe.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-400 mb-4">
          Upcoming Events
        </h2>
        <ul className="space-y-4">
          <li className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Event 1</h3>
            <p>Description of the event.</p>
          </li>
          <li className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Event 2</h3>
            <p>Description of the event.</p>
          </li>
          {/* Add more events as needed */}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-green-400 mb-4">
          Our Community Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">Highlight {slide.id}</h3>
              <p>Description of the highlight.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
