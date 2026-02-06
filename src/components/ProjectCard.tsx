type ProjectCardProps = {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow hover:opacity-90 transition"
        >
          View Project
        </a>
      </div>
    </div>
  )
}