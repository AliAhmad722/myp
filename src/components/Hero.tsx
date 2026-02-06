const Hero = () => {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 via-purple-600 to-teal-500 text-white text-center">
      <h1 className="text-4xl md:text-6xl font-bold animate-pulse">
        AI & Web Developer
      </h1>
      <p className="mt-4 text-lg md:text-2xl">
        Specialized in <span className="font-semibold">Next.js & Tailwind CSS</span>
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:scale-110 transition duration-300">
        Explore My Work
      </button>
    </section>
  );
};
export default Hero;