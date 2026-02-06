export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg,#1e3c72,#2a5298)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "20px",
          padding: "20px 40px",
          background: "rgba(0,0,0,0.2)",
          backdropFilter: "blur(6px)",
          position: "sticky",
          top: 0,
        }}
      >
        <a href="/" style={navBtn}>Home</a>
        <a href="/projects" style={navBtn}>My Projects</a>
        <a href="/contact" style={navBtn}>Contact</a>
      </nav>

      {/* About Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side Image */}
        <div style={{ flex: "1 1 300px", maxWidth: "400px" }}>
          <img
            src="/ali.jpg"
            alt="Ali Ahmad"
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
            }}
          />
        </div>

        {/* Right Side Text */}
        <div style={{ flex: "1 1 400px", maxWidth: "500px" }}>
          <h1 style={{ fontSize: "2.8rem", marginBottom: "20px", color: "#ffcc00" }}>
            Ali Ahmad
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            I am an AI Developer and Frontend Engineer with experience in TypeScript, Next.js, and HTML. I enjoy building fast, user-friendly, and intelligent web applications with clean and maintainable code.

I focus on modern frontend development, AI-powered features, and scalable web solutions. I am always learning new technologies and love turning ideas into real-world products.
          </p>
        </div>
      </div>
    </main>
  );
}

const navBtn: React.CSSProperties = {
  padding: "10px 18px",
  borderRadius: "8px",
  background: "#ffcc00",
  color: "#000",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "0.3s",
};

(navBtn as any)[":hover"] = {
  background: "#ffaa00",
};