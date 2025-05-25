'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'ChapelWise - Church Management System',
    description: 'A platform to help churches manage their congregations.',
    image: '/images/projects/chapelwise.jpg',
    tech: ['Laravel', 'Livewire', 'PostgreSQL', 'TailwindCSS'],
    liveUrl: 'https://chapelwise.com',
    codeUrl: '#'
  },
  {
    title: 'VibesGuard - Security Scanner for Websites',
    description: 'A scanning tool that checks for security vulnerabilities in apps.',
    image: '/images/projects/vibesguard.jpg',
    tech: ['Laravel', 'React', 'MySQL', 'TailwindCSS'],
    liveUrl: 'https://vibesguard.com',
    codeUrl: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="pt-24 md:pt-28 pb-24 md:pb-28 bg-[#fafafa]">
      <div className="container px-4 md:px-0">
        <div className="relative mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-bold inline-block"
          >
            Featured Projects
            <div className="absolute -bottom-1 left-0 w-12 h-1 bg-teal-600"></div>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-6 mb-8 text-sm md:text-base"
        >
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-600">
              While I have a limited number of public projects to showcase (for now...), I&apos;ve spent the past few years building complex internal systems and applications for various companies. These projects, while not publicly accessible, have involved extensive work with modern tech stacks and challenging business problems. Feel free to check back as I will be adding more projects soon!
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col h-full bg-gray-200">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="bg-white text-gray-700 text-sm px-3 py-1 rounded-md border border-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 space-x-4">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <Link
                      href={project.liveUrl}
                      className="inline-block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Preview
                    </Link>
                  )}
                  {project.codeUrl && project.codeUrl !== '#' && (
                    <Link
                      href={project.codeUrl}
                      className="inline-block border border-teal-600 text-teal-600 px-4 py-2 rounded-md hover:bg-teal-50 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 