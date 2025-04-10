'use client'

import { motion } from 'framer-motion'

const skillSections = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Livewire', 'HTML5', 'CSS3', 'TailwindCSS', 'Redux']
  },
  {
    title: 'Backend',
    skills: ['Laravel','Node.js', 'Python', 'REST APIs']
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="pt-24 md:pt-28 pb-24 md:pb-28 bg-[#fafafa]">
      <div className="container">
        <div className="grid grid-cols-[400px_1fr] gap-16">
          <div>
            <div className="relative mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold inline-block"
              >
                My Skills
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-teal-600"></div>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 mb-8"
            >
              I&apos;ve worked with a wide range of technologies in the web development world. Here&apos;s a snapshot of my technical expertise:
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-sm relative"
            >
              <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-teal-50/50"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-teal-50/50"></div>
              </div>
              <h3 className="font-semibold mb-2">Always Learning</h3>
              <p className="text-gray-500">
                Technology moves fast, and I&apos;m committed to staying ahead of the curve. Currently exploring AI integration with web applications.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {skillSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              >
                <h3 className="text-emerald-600 font-medium flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                  {section.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {section.skills.map((skill) => (
                    <span key={skill} className="text-gray-900">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 