import { motion } from 'motion/react'
import {
  HeartPulse,
  GraduationCap,
  Sun,
  Users,
  Home,
  Truck,
  Sprout,
  Wrench,
} from 'lucide-react'

const industries = [
  {
    icon: HeartPulse,
    name: 'Healthcare',
    description: 'EHR, telehealth, compliance, and direct primary care platforms',
    count: '5 products',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Student information systems, LMS, and clinical rotation marketplaces',
    count: '2 products',
  },
  {
    icon: Sun,
    name: 'Clean Energy',
    description: 'Solar design tools, installer marketplace, and energy analytics',
    count: '1 product',
  },
  {
    icon: Users,
    name: 'Social & Community',
    description: 'Community platforms with marketplace, events, and multilingual support',
    count: '1 product',
  },
  {
    icon: Home,
    name: 'Real Estate',
    description: 'Property management, tenant portals, and rent collection',
    count: '1 product',
  },
  {
    icon: Truck,
    name: 'Logistics',
    description: 'Fleet tracking, route optimization, and maintenance management',
    count: '1 product',
  },
  {
    icon: Sprout,
    name: 'Agriculture',
    description: 'Smart farm management, crop tracking, and yield analytics',
    count: '1 product',
  },
  {
    icon: Wrench,
    name: 'Trades',
    description: 'Contractor business management, job scheduling, and invoicing',
    count: '1 product',
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-32 relative">
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
            Across <span className="gradient-text">8 Industries</span>
          </h2>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
            We build vertical SaaS — deep domain expertise in each industry, not shallow
            horizontal tools.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <ind.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text">{ind.name}</h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">{ind.description}</p>
              <div className="mt-3 text-xs text-accent font-medium">{ind.count}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
