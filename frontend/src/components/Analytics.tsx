import { motion } from 'motion/react'
import { Brain, Activity, Signal, Target } from 'lucide-react'

const projects = [
  {
    icon: Brain,
    title: 'CMS Five-Star Prediction',
    description:
      'Predictive model for nursing home quality ratings across 16,000+ facilities using 100+ CMS measures. Regression and classification models for star rating prediction.',
    tags: ['Predictive Modeling', 'Healthcare', 'CMS'],
  },
  {
    icon: Activity,
    title: 'Medicare PPS Rate Calculator',
    description:
      'Automated Medicare Prospective Payment System rate calculations for home health agencies. Complex reimbursement logic with HIPPS code generation.',
    tags: ['Medicare', 'Healthcare Finance', 'Automation'],
  },
  {
    icon: Signal,
    title: 'AT&T RAN Network Optimization',
    description:
      'Large-scale network performance analytics using 50+ features with PCA and regression. Optimized Radio Access Network configuration across markets.',
    tags: ['Telecom', 'PCA', 'Regression'],
  },
  {
    icon: Target,
    title: 'AT&T 4G Top Offender Prediction',
    description:
      'Predictive identification of underperforming cell sites before degradation impacts customers. Proactive maintenance and capacity planning.',
    tags: ['Prediction', 'Network Analytics', 'Proactive'],
  },
]

export function Analytics() {
  return (
    <section id="analytics" className="py-24 relative">
      <div className="absolute inset-0 bg-surface/50" />
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
            Analytics & <span className="gradient-text">Data Science</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Every product starts with data. Our analytics background spans telecom network
            optimization, healthcare quality prediction, and financial modeling.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-text group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
