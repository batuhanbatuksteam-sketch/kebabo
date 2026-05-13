import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/',           label: 'Anasayfa'   },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/galeri',     label: 'Galeri'     },
  { to: '/iletisim',   label: 'İletişim'   },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0c]/95 backdrop-blur-xl shadow-card border-b border-amber-900/25'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/kebabo-logo.png"
                alt="Kebabo Logo"
                className="h-14 w-auto object-contain drop-shadow-lg"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link font-sans text-sm font-medium tracking-wide transition-colors duration-300 ${
                    pathname === to
                      ? 'text-amber-400 active'
                      : 'text-zinc-300 hover:text-amber-400'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/menu"
                className="ml-2 px-5 py-2.5 rounded-full bg-amber-gradient text-white text-sm font-semibold font-sans shadow-amber hover:shadow-amber-lg hover:scale-105 transition-all duration-300"
              >
                Menü
              </Link>
            </nav>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1.5 p-2 z-50"
              aria-label="Menü"
            >
              <span className={`block h-0.5 w-6 rounded transition-all duration-300 ${open ? 'bg-amber-400 rotate-45 translate-y-2' : 'bg-zinc-300'}`} />
              <span className={`block h-0.5 w-6 rounded transition-all duration-300 bg-zinc-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 rounded transition-all duration-300 ${open ? 'bg-amber-400 -rotate-45 -translate-y-2' : 'bg-zinc-300'}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-40 bg-[#0a0a0c] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {/* Subtle texture */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, #f59e0b 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }} />
            </div>

            {links.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="relative z-10"
              >
                <Link
                  to={to}
                  className={`font-display text-5xl font-medium tracking-wider uppercase ${
                    pathname === to ? 'amber-text' : 'text-zinc-200 hover:text-amber-400'
                  } transition-colors duration-300`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07 }}
              className="relative z-10"
            >
              <Link
                to="/menu"
                className="px-10 py-4 rounded-full bg-amber-gradient text-white text-xl font-semibold font-sans shadow-amber-lg hover:scale-105 transition-all duration-300"
              >
                Menü
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (links.length + 1) * 0.07 }}
              className="relative z-10 text-center"
            >
              <div className="fire-divider">
                <span className="font-sans text-xs text-amber-500/60 tracking-[0.25em] uppercase">
                  Döner · Et · Premium
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
