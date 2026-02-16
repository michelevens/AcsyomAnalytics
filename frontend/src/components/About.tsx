import { motion } from 'motion/react'
import { GraduationCap, Briefcase, TrendingUp, Lightbulb } from 'lucide-react'

const credentials = [
  { icon: GraduationCap, label: 'MSEE — Electrical Engineering' },
  { icon: GraduationCap, label: 'MBA — Business Administration' },
  { icon: Briefcase, label: 'AT&T — RAN Strategic Planning & Analytics' },
  { icon: TrendingUp, label: 'Predictive Modeling & CMS Five-Star' },
]

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.05),_transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Avatar & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Avatar */}
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-white shrink-0">
                EM
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text">Evens Michel</h3>
                <p className="text-text-muted">MSEE, MBA</p>
                <p className="text-sm text-accent mt-1">Founder & Principal</p>
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-3">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5"
                >
                  <cred.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-text-muted">{cred.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Strategy Meets <span className="gradient-text">Execution</span>
            </h2>

            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Acsyom Analytics was founded by Evens Michel, a strategist and analytics executive
                with deep expertise in predictive modeling, healthcare operations, and
                telecommunications network optimization.
              </p>
              <p>
                From leading RAN strategic planning at AT&T — building predictive models across 50+
                network features — to developing CMS Five-Star quality prediction systems for 16,000+
                nursing facilities, Evens identifies market opportunities through data, then builds
                the software to capture them.
              </p>
              <p>
                Today, Acsyom Analytics operates 2 live production platforms and has 10+ additional
                products in development across healthcare, education, clean energy, and more.
              </p>
            </div>

            {/* Quote */}
            <div className="p-4 rounded-xl bg-white/5 border-l-4 border-primary">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <p className="text-sm text-text italic">
                  "I identify market gaps, then build the product to prove the opportunity."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
