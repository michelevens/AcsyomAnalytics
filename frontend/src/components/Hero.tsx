import { motion } from 'motion/react'
import { ArrowDown, Sparkles } from 'lucide-react'

const stats = [
  { value: '12+', label: 'Products' },
  { value: '8', label: 'Industries' },
  { value: '2', label: 'Live Platforms' },
  { value: '250K+', label: 'Lines of Code' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(34,211,238,0.1),_transparent_50%)]" />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-text-muted"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            Strategy. Analytics. Production Software.
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-text">Acsyom</span>{' '}
            <span className="gradient-text">Analytics</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-light text-text-muted">
            From Insight to Product
          </p>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-muted/70 leading-relaxed">
            We identify market gaps, build analytics to validate the opportunity,
            then ship production software that solves real problems across 8 industries.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-4"
          >
            <button
              onClick={() =>
                document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Our Products
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
