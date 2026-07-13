'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const projects = [
  {
    title: 'RequestHarbor - Client Request Portal',
    description: 'A branded client portal for agencies, contractors, and consultancies. Send one secure link for file uploads, answers, and sign-offs—no client account needed. Team dashboard for triage, templates, reminders, and an audit-ready timeline.',
    image: '/images/projects/request-harbor.jpg',
    tech: ['Laravel', 'Livewire', 'MySQL', 'TailwindCSS'],
    liveUrl: 'https://requestharbor.com',
    codeUrl: '#'
  },
  {
    title: 'ChapelWise - Church Management System',
    description: 'A platform to help churches manage their congregations. Feature list includes management of members, events, volunteering, budgets, prayer requests, sermons, and more.',
    image: '/images/projects/chapelwise.jpg',
    tech: ['Laravel', 'Livewire', 'PostgreSQL', 'TailwindCSS'],
    liveUrl: '#',
    codeUrl: '#',
    status: 'Defunct',
    shutdownReason: 'Project discontinued due to lack of user adoption. Turns out it is hard to move churches to technology.'
  },
  {
    title: 'VibesGuard - Security Scanner for Websites',
    description: 'A scanning tool that checks for security vulnerabilities in apps. Use add the URL to their website and do a security/vulnerability scan to find obvious issues that need resolved.',
    image: '/images/projects/vibesguard.jpg',
    tech: ['Laravel', 'React', 'MySQL', 'TailwindCSS'],
    liveUrl: '#',
    codeUrl: '#',
    status: 'Defunct',
    shutdownReason: 'Shut down after competition moved in and saturated the market. I have another app idea that may end up absorbing this one in the future.'
  },
  {
    title: 'Christian Brothers Services LLC',
    description: 'Website for a local construction business. Not many integrations or bells and whistles, but was fun to work in a different technology (Next.js).',
    image: '/images/projects/christian-brothers.jpg',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript'],
    liveUrl: 'https://christianbrothersservicesllc.com',
    codeUrl: '#'
  },
  {
    title: 'All American Home Services',
    description: 'Marketing site for a Taylors, SC plumbing and home services company serving the Upstate. Hero-focused layout with service highlights, financing partner integration, and a patriotic color scheme.',
    image: '/images/projects/all-american.jpg',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript'],
    liveUrl: 'https://aahomesvc.com',
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
                onClick={() => project.image && openImageOverlay(project.image, project.title)}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-gray-100">
                    <Image
                      src="/window.svg"
                      alt="Placeholder"
                      width={80}
                      height={80}
                      className="opacity-40"
                    />
                  </div>
                )}
              </div>
              <div className="p-4 md:p-6 flex flex-col h-full bg-gray-200">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    {project.title}
                    {project.status && (
                      <span className="ml-2 px-2 py-0.5 rounded bg-gray-400 text-white text-xs font-medium opacity-80">
                        {project.status}
                      </span>
                    )}
                  </h3>
                  {project.shutdownReason && (
                    <p className="text-xs italic text-gray-500 mb-2">{project.shutdownReason}</p>
                  )}
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