import { BarChart3, Mail, MapPin, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-text">
                Acsyom<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Strategy. Analytics. Production Software.<br />
              From insight to product.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@acsyom.com"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@acsyom.com
              </a>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin className="w-4 h-4" />
                Clermont, FL
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/evensmichel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Acsyom Analytics. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
