import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
return (
<Link
href={`/projects/${project.slug}`}
className="group block border rounded-2xl overflow-hidden hover:shadow-md transition"
> <div className="relative w-full h-56"> <Image
       src={project.image}
       alt={project.title}
       fill
       className="object-cover group-hover:scale-105 transition-transform duration-300"
     /> </div> <div className="p-4"> <h3 className="font-semibold text-lg mb-1">{project.title}</h3> <p className="text-sm text-gray-600">{project.year}</p> </div> </Link>
);
}
