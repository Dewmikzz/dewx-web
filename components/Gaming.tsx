'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGamepad, FaTwitch, FaYoutube, FaSteam } from 'react-icons/fa'
import { SiNintendoswitch } from 'react-icons/si'

const gamingStats = [
  { label: 'Games Played', value: '500+', icon: FaGamepad },
  { label: 'Hours Streamed', value: '1000+', icon: FaTwitch },
  { label: 'Subscribers', value: '5K+', icon: FaYoutube },
  { label: 'Achievements', value: '200+', icon: FaSteam },
]

const favoriteGames = [
  {
    title: 'Action RPG',
    games: ['Elden Ring', 'Dark Souls', 'Sekiro'],
    description: 'Love challenging gameplay and intricate world design',
  },
  {
    title: 'Strategy',
    games: ['Civilization VI', 'Total War', 'Age of Empires'],
    description: 'Strategic thinking and long-term planning',
  },
  {
    title: 'FPS',
    games: ['Valorant', 'CS2', 'Apex Legends'],
    description: 'Competitive multiplayer and team coordination',
  },
  {
    title: 'Indie',
    games: ['Hades', 'Hollow Knight', 'Celeste'],
    description: 'Unique art styles and innovative gameplay',
  },
]

export default function Gaming() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="gaming"
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
            Gaming & Streaming
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate gamer and content creator sharing the gaming experience
            with the community
          </p>
        </motion.div>

        {/* Gaming Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {gamingStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-purple-500/50 transition-all text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <IconComponent className="text-3xl text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Favorite Games */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {favoriteGames.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                {category.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.games.map((game) => (
                  <span
                    key={game}
                    className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm border border-purple-500/30"
                  >
                    {game}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Streaming Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Watch Me Play
          </h3>
          <div className="flex gap-6 justify-center flex-wrap">
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition-all flex items-center gap-2 text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitch />
              Twitch
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 transition-all flex items-center gap-2 text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaYoutube />
              YouTube
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all flex items-center gap-2 text-white font-semibold border border-slate-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaSteam />
              Steam
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

