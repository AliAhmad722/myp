import ProjectCard from "@/components/ProjectCard"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with Next.js and Tailwind CSS.",
      image: "1st.png",
      link: "https://sir-fawn.vercel.app/",
    },
    {
      title: "E-commerce Store",
      description: "Fully functional e-commerce store with Stripe payments.",
      image: "sc.png",
      link: "https://6-wtk8.vercel.app/",
    },
      {
      title: "E-commerce Store",
      description: "Fully functional e-commerce store with Stripe payments.",
      image: "aly.png",
      link: "https://alyy-vpm2.vercel.app/",
    },
  ]

  return (
    <main className="min-h-screen py-12 px-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-12 text-center space-x-6">
        <a
          href="https://www.facebook.com/share/19hFpMGiiq/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          Facebook
        </a>
        <a
          href="https://github.com/AliAhmad722"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 font-semibold hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/aliahmad72_?igsh=MWIwOXhqcHh5Nmx3eg=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 font-semibold hover:underline"
        >
          Instagram
        </a>
      </div>
    </main>
  )
}