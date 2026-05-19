import Link from 'next/link'
import { Globe, MessageCircle, Share2, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy pt-20 pb-8 text-white border-t border-border-gray/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 pr-4">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/society_logo01.png" 
                alt="IEEE Computer Society Logo" 
                className="h-8 w-auto brightness-0 invert opacity-90"
              />
              <div className="border-l border-white/20 pl-3">
                <span className="font-sans text-sm font-semibold text-white leading-tight block">
                  IEEE Computer Society
                </span>
                <span className="font-sans text-xs text-white/70 block">
                  UCSC Student Branch Chapter
                </span>
              </div>
            </div>
            
            <p className="font-sans text-white/70 leading-relaxed mb-6 max-w-sm">
              Empowering the next generation of computing professionals through innovation, leadership, and collaboration.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/60 hover:text-ieee-blue transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-accent-cyan transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-ieee-blue transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#home" className="font-sans text-white/70 hover:text-ieee-blue transition-colors text-sm font-medium">Home</Link>
              </li>
              <li>
                <Link href="#about" className="font-sans text-white/70 hover:text-ieee-blue transition-colors text-sm font-medium">About Us</Link>
              </li>
              <li>
                <Link href="#whatwedo" className="font-sans text-white/70 hover:text-ieee-blue transition-colors text-sm font-medium">What We Do</Link>
              </li>
              <li>
                <Link href="#timeline" className="font-sans text-white/70 hover:text-ieee-blue transition-colors text-sm font-medium">Timeline</Link>
              </li>
            </ul>
          </div>

          {/* Resources Col */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#events" className="font-sans text-white/70 hover:text-ieee-blue transition-colors text-sm font-medium">Events & Hackathons</Link>
              </li>
              <li>
                <Link href="#team" className="font-sans text-white/70 hover:text-ieee-blue transition-colors text-sm font-medium">Our Team</Link>
              </li>
              <li>
                <a href="#" className="font-sans text-white/70 hover:text-ieee-blue transition-colors text-sm font-medium">Join IEEE</a>
              </li>
              <li>
                <Link href="#contact" className="font-sans text-white/70 hover:text-ieee-blue transition-colors text-sm font-medium">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/50 text-sm">
            © {currentYear} IEEE Computer Society UCSC Student Branch Chapter. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-sans text-white/50 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="font-sans text-white/50 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
