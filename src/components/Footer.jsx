import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/',           label: 'Anasayfa'   },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/menu',       label: 'Menü'       },
  { to: '/galeri',     label: 'Galeri'     },
  { to: '/iletisim',   label: 'İletişim'   },
]

export default function Footer() {
  return (
    <footer className="bg-[#070709] text-zinc-400 pt-16 pb-8 mt-0 border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/5">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/kebabo-logo.png" alt="Kebabo Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="font-sans text-sm leading-relaxed text-zinc-500 max-w-xs mt-1">
              Tuzla'nın kalbinde, odun ateşinin dansıyla hazırlanan premium döner ve et lezzetleri.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              {[
                { icon: 'instagram', href: '#', label: 'Instagram' },
                { icon: 'facebook',  href: '#', label: 'Facebook'  },
              ].map(s => (
                <a key={s.icon} href={s.href} aria-label={s.label}
                   className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 group">
                  {s.icon === 'instagram' && (
                    <svg className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                  {s.icon === 'facebook' && (
                    <svg className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-medium text-zinc-200 uppercase tracking-wider mb-5">
              Hızlı Bağlantılar
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="font-sans text-sm text-zinc-500 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-0.5 bg-amber-500 rounded transition-all duration-300"/>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-medium text-zinc-200 uppercase tracking-wider mb-5">
              İletişim
            </h4>
            <address className="not-italic flex flex-col gap-4">
              <div className="flex gap-3">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                </svg>
                <p className="font-sans text-sm text-zinc-500 leading-relaxed">
                  İçmeler Mah. Çağdaş Sk. B Blok<br/>Tuzla / İstanbul
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.869l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
                <a href="tel:+905393881262" className="font-sans text-sm text-zinc-500 hover:text-amber-400 transition-colors">
                  0 (539) 388 12 62
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <p className="font-sans text-sm text-zinc-500">Her gün 11:00 – 22:00</p>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-zinc-600">
            © {new Date().getFullYear()} Kebabo. Tüm hakları saklıdır.
          </p>
          <p className="font-sans text-xs text-zinc-700 tracking-widest uppercase">
            Döner · Et · Premium · Tuzla ✦
          </p>
        </div>
      </div>
    </footer>
  )
}
