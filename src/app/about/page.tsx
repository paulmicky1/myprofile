import { cvData } from "../../data/cvData";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4 flex flex-col gap-8 bg-white/80 dark:bg-black/60 rounded-2xl shadow-xl backdrop-blur-md">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Academic Background</h2>
        <ul className="space-y-2">
          {cvData.education.map((edu, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-black/40 rounded p-2">
              <span className="font-semibold">{edu.institution}:</span> {edu.degree ? edu.degree + ", " : ''}{edu.subjects ? edu.subjects.join(', ') + ', ' : ''}{edu.year}, {edu.location}
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="flex flex-wrap gap-3">
          {[...cvData.skills.programmingLanguages, ...cvData.skills.frameworksLibraries, ...cvData.skills.tools, ...cvData.skills.databases, ...cvData.skills.environments, ...cvData.skills.platforms, ...cvData.skills.techAreas, ...cvData.skills.creative].map(skill => (
            <li key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium shadow">{skill}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Interests & Extra-curricular Activities</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
          {cvData.interests.map((interest, i) => (
            <li key={i}>{interest}</li>
          ))}
        </ul>
        <div>
          <h3 className="text-lg font-semibold mb-2">🎨 Paintings by Paul</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["IMG_20250611_200002.jpg","IMG_20250521_170806.jpg","IMG_20250422_222506.jpg","IMG_20250422_222454.jpg","IMG_20250422_222447.jpg","IMG_20250422_222437.jpg","IMG_20250422_222426.jpg"].map((img) => (
              <div key={img} className="rounded-lg overflow-hidden shadow border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-black/40">
                <Image
                  src={`/img/${img}`}
                  alt={`Painting by Paul - ${img}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 