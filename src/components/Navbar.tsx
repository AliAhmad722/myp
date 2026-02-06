import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md flex justify-center space-x-6 p-4">
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/projects">My Projects</Link>
      <Link href="/contact">Contact</Link>  {/* ✅ Add this */}
    </nav>
  );
}