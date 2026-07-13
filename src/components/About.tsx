'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="pt-16 md:pt-20 pb-8 md:pb-12 bg-[#fafafa]">
      <div className="container px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-8 md:gap-16">
          <div>
            <div className="relative mb-6 md:mb-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-bold inline-block"
              >
                About Me
                <div className="absolute -bottom-1 left-0 w-12 h-1 bg-teal-600"></div>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[240px] md:max-w-[320px] aspect-square rounded-lg overflow-hidden mb-6 mx-auto"
            >
              <Image
                src="/images/about/daniel.jpeg"
                alt="Profile photo"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center gap-6 mb-8 md:mb-0"
            >
              <Link
                href="https://github.com/danielkleach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/daniel-leach-477a3847"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link
                href="https://x.com/danielkleach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
            </motion.div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 md:space-y-6"
            >
              <p>
                Hello! I&apos;m Daniel, a software engineer with a passion for creating clean, efficient, and user-friendly applications. My journey in tech began when I received my first computer at 12, and I&apos;ve been hooked ever since.
              </p>
              <p>
                With over 10 years of professional experience, I specialize in backend development with Laravel, crafting robust and scalable web applications. I&apos;m particularly interested in API design, database optimization, and building reliable microservices.
              </p>
              <p>
                When I&apos;m not coding, you can find me working in the garden, spending time with my family, or reading up on the latest AI advancements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Work Experience</h3>
              <div className="space-y-6 md:space-y-8">
                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-teal-600 before:rounded-full">
                  <h4 className="font-semibold">Sr. Software Engineer</h4>
                  <p className="text-gray-600 text-sm md:text-base">Clerri • Jul 2025 - Present</p>
                  <p className="mt-2 text-sm md:text-base">Working with a great team to provide subscription-based membership plans to dentists and their patients.</p>
                </div>
                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-teal-600 before:rounded-full">
                  <h4 className="font-semibold">Freelance Engineer | AI Manager</h4>
                  <p className="text-gray-600 text-sm md:text-base">Self • Mar 2025 - Jul 2025</p>
                  <p className="mt-2 text-sm md:text-base">Building SaaS platforms and taking on freelance projects.</p>
                </div>
                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-teal-600 before:rounded-full">
                  <h4 className="font-semibold">Software Engineer II</h4>
                  <p className="text-gray-600 text-sm md:text-base">RXMG • Sept 2019 - Feb 2025</p>
                  <p className="mt-2 text-sm md:text-base">Worked on an amazing team building out email marketing software solutions.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 