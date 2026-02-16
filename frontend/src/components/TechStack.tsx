import { motion } from 'motion/react'

const technologies = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Laravel', color: '#FF2D20' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Stripe', color: '#635BFF' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'Vite', color: '#646CFF' },
  { name: 'Railway', color: '#0B0D0E' },
]

export function TechStack() {
  return (
    <section id="tech" className="py-32 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Built With <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
            Production-grade stack chosen for performance, developer experience, and scalability.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white"
                style={{ backgroundColor: tech.color + '30' }}
              >
                <span style={{ color: tech.color }}>{tech.name[0]}</span>
              </div>
              <span className="text-sm font-medium text-text-muted group-hover:text-text transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
