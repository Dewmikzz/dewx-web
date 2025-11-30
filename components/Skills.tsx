'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiAdobexd,
} from 'react-icons/si'

const skills = [
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Python', icon: FaPython, color: 'text-blue-300' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
  { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
  { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
  { name: 'Adobe XD', icon: SiAdobexd, color: 'text-pink-500' },
]

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    description: 'Building responsive and interactive user interfaces',
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
    description: 'Creating robust server-side applications and APIs',
  },
  {
    title: 'Tools & Design',
    skills: ['Git', 'Docker', 'Figma', 'Adobe'],
    description: 'Version control, containerization, and design tools',
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="skills"
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
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and
            digital experiences
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {category.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skillName) => (
                  <span
                    key={skillName}
                    className="px-3 py-1 text-xs rounded-full bg-slate-800/50 text-slate-300"
                  >
                    {skillName}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group relative"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-blue-500/50 transition-all cursor-pointer h-full flex flex-col items-center justify-center hover:bg-slate-800/50">
                  <IconComponent
                    className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

