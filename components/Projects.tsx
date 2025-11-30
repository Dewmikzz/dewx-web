'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    image: '/api/placeholder/600/400',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard for social media platforms with data visualization and insights.',
    technologies: ['React', 'Chart.js', 'Node.js', 'Express', 'PostgreSQL'],
    image: '/api/placeholder/600/400',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'Socket.io', 'MongoDB', 'Node.js'],
    image: '/api/placeholder/600/400',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    description:
      'Modern, responsive portfolio website with advanced animations and interactive elements.',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    image: '/api/placeholder/600/400',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Weather App',
    description:
      'Real-time weather application with location-based forecasts and beautiful UI design.',
    technologies: ['React', 'OpenWeather API', 'CSS3', 'JavaScript'],
    image: '/api/placeholder/600/400',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Blog Platform',
    description:
      'Content management system for blogging with markdown support and SEO optimization.',
    technologies: ['Next.js', 'MDX', 'GraphQL', 'Prisma', 'PostgreSQL'],
    image: '/api/placeholder/600/400',
    github: '#',
    live: '#',
    featured: false,
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 px-4 relative"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills and passion for
            creating innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-xl overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-blue-500/50 transition-all ${
                project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🚀</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-slate-800/50 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

