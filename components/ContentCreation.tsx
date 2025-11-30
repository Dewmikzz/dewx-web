'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaYoutube, FaInstagram, FaTiktok, FaTwitter, FaPen } from 'react-icons/fa'

const contentCategories = [
  {
    title: 'Tech Tutorials',
    description:
      'Step-by-step guides on web development, programming concepts, and modern frameworks.',
    icon: FaPen,
    color: 'text-blue-400',
    bgColor: 'from-blue-500/20 to-blue-600/20',
  },
  {
    title: 'Code Reviews',
    description:
      'Breaking down code, explaining best practices, and sharing tips for cleaner code.',
    icon: FaYoutube,
    color: 'text-red-400',
    bgColor: 'from-red-500/20 to-red-600/20',
  },
  {
    title: 'Project Showcases',
    description:
      'Behind-the-scenes look at building real projects from concept to deployment.',
    icon: FaInstagram,
    color: 'text-pink-400',
    bgColor: 'from-pink-500/20 to-pink-600/20',
  },
  {
    title: 'Gaming Content',
    description:
      'Gaming streams, walkthroughs, and reviews of the latest releases.',
    icon: FaTiktok,
    color: 'text-purple-400',
    bgColor: 'from-purple-500/20 to-purple-600/20',
  },
]

const platforms = [
  {
    name: 'YouTube',
    icon: FaYoutube,
    followers: '10K+',
    color: 'text-red-500',
    bgColor: 'hover:bg-red-500/10',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    followers: '5K+',
    color: 'text-pink-500',
    bgColor: 'hover:bg-pink-500/10',
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    followers: '15K+',
    color: 'text-purple-500',
    bgColor: 'hover:bg-purple-500/10',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    followers: '3K+',
    color: 'text-blue-500',
    bgColor: 'hover:bg-blue-500/10',
  },
]

export default function ContentCreation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="content"
      ref={ref}
      className="min-h-screen py-20 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Content Creation
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Creating educational and entertaining content to share knowledge and
            connect with the community
          </p>
        </motion.div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contentCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-xl bg-gradient-to-br ${category.bgColor} backdrop-blur-sm border border-slate-800/50 hover:border-slate-700/50 transition-all group`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <IconComponent
                  className={`text-4xl mb-4 ${category.color} group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {category.title}
                </h3>
                <p className="text-slate-300">{category.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">
            Follow My Journey
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon
              return (
                <motion.a
                  key={platform.name}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 ${platform.bgColor} transition-all text-center group`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent
                    className={`text-4xl mb-3 ${platform.color} mx-auto group-hover:scale-110 transition-transform`}
                  />
                  <div className="text-lg font-semibold text-white mb-1">
                    {platform.name}
                  </div>
                  <div className="text-sm text-slate-400">{platform.followers}</div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Let's Create Together
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Interested in collaborating on content or have a project idea?
            Let's discuss how we can work together.
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

