'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const projects = [
  {
    title: 'ChapelWise - Church Management System',
    description: 'A platform to help churches manage their congregations.',
    image: '/images/projects/chapelwise.jpg',
    tech: ['Laravel', 'Livewire', 'PostgreSQL', 'TailwindCSS'],
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'VibesGuard - Security Scanner for Websites',
    description: 'A scanning tool that checks for security vulnerabilities in apps.',
    image: '/images/projects/vibesguard.jpg',
    tech: ['Laravel', 'React', 'MySQL', 'TailwindCSS'],
    liveUrl: 'https://vibesguard.com',
    codeUrl: '#'
  },
  {
    title: 'Christian Brothers Services LLC',
    description: 'Website for a local construction business.',
    image: '/images/projects/christian-brothers.jpg',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript'],
    liveUrl: 'https://christianbrothersservicesllc.com',
    codeUrl: '#'
  }
]

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const openImageOverlay = (src: string, alt: string) => {
    setSelectedImage({ src, alt })
  }

  const closeImageOverlay = () => {
    setSelectedImage(null)
  }

  return (
    <section id="projects" className="pt-16 md:pt-20 pb-8 md:pb-12 bg-[#fafafa]">
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
              <div 
                className="relative h-64 overflow-hidden cursor-pointer group"
                onClick={() => openImageOverlay(project.image, project.title)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
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

      {/* Image Overlay */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeImageOverlay}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
            <button
              onClick={closeImageOverlay}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              aria-label="Close image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
} 