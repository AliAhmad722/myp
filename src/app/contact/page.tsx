import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-center text-gray-600 mb-10">
          Have a question, project idea, or just want to say hi? Fill out the form below 👇
        </p>

        <form className="bg-white shadow-lg rounded-xl p-6 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ali Ahmad"
              className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Write your message..."
              className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Send Message ✉️
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}