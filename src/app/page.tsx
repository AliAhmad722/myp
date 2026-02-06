import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

 <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-10">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="hover:text-blue-400">🌐 Facebook</a>
        <a href="#" className="hover:text-blue-400">github</a>
        <a href="#" className="hover:text-blue-400">💼 LinkedIn</a>
      </div>
      <p>© {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
    </footer>

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}