import { motion } from 'motion/react'
import {
  HeartPulse,
  GraduationCap,
  Sun,
  Users,
  Receipt,
  BookOpen,
  Video,
  Tractor,
  Truck,
  Home,
  Wrench,
  Stethoscope,
} from 'lucide-react'

type Status = 'live' | 'development' | 'planned'

interface Product {
  name: string
  tagline: string
  industry: string
  status: Status
  icon: React.ElementType
  highlights: string[]
}

const statusStyles: Record<Status, { bg: string; text: string; label: string }> = {
  live: { bg: 'bg-success/20', text: 'text-success', label: 'Live' },
  development: { bg: 'bg-warning/20', text: 'text-warning', label: 'In Development' },
  planned: { bg: 'bg-text-muted/20', text: 'text-text-muted', label: 'Planned' },
}

const products: Product[] = [
  {
    name: 'CareManagerIO',
    tagline: 'Home Health EHR & Compliance Platform',
    industry: 'Healthcare',
    status: 'live',
    icon: HeartPulse,
    highlights: ['250+ components', '128 migrations', 'Compliance scoring'],
  },
  {
    name: 'ClinicLink',
    tagline: 'Clinical Rotation Marketplace',
    industry: 'Healthcare Education',
    status: 'live',
    icon: Stethoscope,
    highlights: ['150+ API endpoints', 'Stripe Connect', '6 user roles'],
  },
  {
    name: 'EnnHealth',
    tagline: 'Direct Primary Care Platform',
    industry: 'Healthcare',
    status: 'development',
    icon: HeartPulse,
    highlights: ['Telehealth', 'CMS-1500 billing', 'Wellness programs'],
  },
  {
    name: 'Solarera',
    tagline: 'Solar Energy Design & Marketplace',
    industry: 'Clean Energy',
    status: 'development',
    icon: Sun,
    highlights: ['Design tool', 'Installer marketplace', '46 database tables'],
  },
  {
    name: 'Vwazen',
    tagline: 'Community & Social Platform',
    industry: 'Social',
    status: 'development',
    icon: Users,
    highlights: ['Marketplace', 'Events', 'Multilingual'],
  },
  {
    name: 'RevCred',
    tagline: 'Revenue Cycle Management',
    industry: 'Healthcare Billing',
    status: 'development',
    icon: Receipt,
    highlights: ['Claims processing', 'Credentialing', '12 user roles'],
  },
  {
    name: 'Educasoftio',
    tagline: 'Education Management System',
    industry: 'Education',
    status: 'development',
    icon: BookOpen,
    highlights: ['SIS & LMS', 'Attendance', 'Library management'],
  },
  {
    name: 'ClinicBridge',
    tagline: 'Telehealth & Practice Management',
    industry: 'Healthcare',
    status: 'planned',
    icon: Video,
    highlights: ['Virtual visits', 'Scheduling', 'Patient portal'],
  },
  {
    name: 'AgriTrakr',
    tagline: 'Smart Farm Management',
    industry: 'Agriculture',
    status: 'planned',
    icon: Tractor,
    highlights: ['Crop tracking', 'IoT sensors', 'Yield analytics'],
  },
  {
    name: 'FleetPulse',
    tagline: 'Fleet Management Platform',
    industry: 'Logistics',
    status: 'planned',
    icon: Truck,
    highlights: ['Vehicle tracking', 'Maintenance', 'Route optimization'],
  },
  {
    name: 'RentLynk',
    tagline: 'Property Management Platform',
    industry: 'Real Estate',
    status: 'planned',
    icon: Home,
    highlights: ['Tenant portal', 'Maintenance requests', 'Rent collection'],
  },
  {
    name: 'TradeForge',
    tagline: 'Contractor Business Management',
    industry: 'Trades',
    status: 'planned',
    icon: Wrench,
    highlights: ['Job scheduling', 'Invoicing', 'Client management'],
  },
]

export function Products() {
  return (
    <section id="products" className="py-24 relative">
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
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Production-grade SaaS platforms spanning 8 industries — from healthcare EHR to solar
            energy design tools.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const status = statusStyles[product.status]
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${status.bg} ${status.text}`}
                  >
                    {status.label}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-text group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-text-muted mt-1">{product.tagline}</p>

                <div className="mt-3 mb-4">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                    {product.industry}
                  </span>
                </div>

                <ul className="space-y-1.5">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-text-muted">
                      <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
