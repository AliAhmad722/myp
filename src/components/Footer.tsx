const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-10">
      <div className="flex justify-center space-x-6 mb-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/19hFpMGiiq/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          🌐 Facebook
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/aliahmad72_?igsh=MWIwOXhqcHh5Nmx3eg=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          📸 Instagram
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/AliAhmad722"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          💻 GitHub
        </a>
      </div>

      <p>© {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;