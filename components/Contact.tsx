'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const contactMethods = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'contact@dewx.dev',
    href: 'mailto:contact@dewx.dev',
    color: 'text-blue-400',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/dewx',
    href: '#',
    color: 'text-blue-500',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/dewx',
    href: '#',
    color: 'text-white',
  },
  {
    icon: FaTwitter,
    label: 'Twitter',
    value: '@dewx',
    href: '#',
    color: 'text-blue-400',
  },
]

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Let's Connect
            </h3>
            <p className="text-slate-400 mb-8">
              Feel free to reach out through any of these platforms or send me a
              message using the form.
            </p>

            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-blue-500/50 transition-all group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <IconComponent
                      className={`text-2xl ${method.color} group-hover:scale-110 transition-transform`}
                    />
                    <div>
                      <div className="text-sm text-slate-400">{method.label}</div>
                      <div className="text-white font-medium">{method.value}</div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 backdrop-blur-sm border border-slate-800/50"
            >
              <FaMapMarkerAlt className="text-2xl text-red-400" />
              <div>
                <div className="text-sm text-slate-400">Location</div>
                <div className="text-white font-medium">Available Worldwide</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-blue-500/50 focus:outline-none text-white transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-blue-500/50 focus:outline-none text-white transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-blue-500/50 focus:outline-none text-white transition-all resize-none"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20 text-center text-slate-400 text-sm"
      >
        <p>
          © {new Date().getFullYear()} DewX. Built with Next.js, React, and
          lots of ☕
        </p>
      </motion.footer>
    </section>
  )
}

