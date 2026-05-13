import { useState } from 'react'
import { motion } from 'framer-motion'

function FadeSection({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1400)
  }

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="relative py-32 bg-[#0a0a0c] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/ozel-yemek.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/65 to-[#0a0a0c]/95" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-16 bg-amber-600/10 blur-3xl" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.28em] uppercase text-amber-400 font-semibold mb-4"
          >Bize Ulaşın</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl font-bold text-zinc-100 uppercase leading-tight"
          >İletişim</motion.h1>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 w-20 bg-amber-gradient rounded-full mx-auto mt-6"
          />
        </div>
      </section>

      <section className="py-24 bg-kebaboBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* LEFT: Info */}
            <div className="lg:col-span-2 flex flex-col gap-7">
              <FadeSection delay={0}>
                <p className="font-sans text-xs tracking-[0.22em] uppercase text-amber-500 font-semibold mb-3">Neredeyiz?</p>
                <h2 className="font-display text-4xl font-bold text-zinc-100 uppercase leading-tight">
                  Sizi <span className="amber-text">Ağırlamak</span><br />İçin Buradayız
                </h2>
              </FadeSection>

              {/* Contact cards */}
              <FadeSection delay={0.12} className="flex flex-col gap-4">

                {/* Address */}
                <div className="flex gap-4 p-5 rounded-2xl bg-kebaboCard border border-amber-900/20 hover:border-amber-700/35 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">Adres</p>
                    <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                      İçmeler Mahallesi<br />
                      34953 Tuzla / İstanbul
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 p-5 rounded-2xl bg-kebaboCard border border-amber-900/20 hover:border-amber-700/35 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">Çalışma Saatleri</p>
                    <p className="font-sans text-sm text-zinc-400">Pazartesi – Pazar</p>
                    <p className="font-display text-lg font-bold text-zinc-200 uppercase tracking-wide">11:00 – 22:00</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex gap-4 p-5 rounded-2xl bg-kebaboCard border border-amber-900/20 hover:border-amber-700/35 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">Özellikler</p>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🔥</span>
                        <p className="font-sans text-sm text-zinc-400">Odun ateşinde pişirme</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🥩</span>
                        <p className="font-sans text-sm text-zinc-400">Et · Tavuk · 14 Çeşit Meze</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeSection>
            </div>

            {/* RIGHT: Form + Map */}
            <div className="lg:col-span-3 flex flex-col gap-7">

              {/* Form */}
              <FadeSection delay={0.15}>
                <div className="p-8 rounded-3xl bg-kebaboCard border border-amber-900/20 shadow-card">
                  {sent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-10 gap-5"
                    >
                      <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center animate-float">
                        <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                      </div>
                      <h3 className="font-display text-3xl font-bold text-zinc-100 uppercase">Mesajınız İletildi!</h3>
                      <p className="font-sans text-sm text-zinc-500 max-w-xs">En kısa sürede geri döneceğiz. Kebabo'yu tercih ettiğiniz için teşekkürler 🔥</p>
                      <button
                        onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                        className="px-6 py-2.5 rounded-full border border-amber-500/40 text-amber-400 font-sans text-sm font-medium hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300"
                      >Yeni Mesaj Gönder</button>
                    </motion.div>
                  ) : (
                    <>
                      <h3 className="font-display text-2xl font-bold text-zinc-100 uppercase tracking-wide mb-6">İletişim Formu</h3>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="font-sans text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5 block">Ad Soyad</label>
                            <input
                              id="contact-name"
                              type="text" name="name" required
                              value={form.name} onChange={handleChange}
                              placeholder="Adınız Soyadınız"
                              className="form-input"
                            />
                          </div>
                          <div>
                            <label className="font-sans text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5 block">Telefon</label>
                            <input
                              id="contact-phone"
                              type="tel" name="phone"
                              value={form.phone} onChange={handleChange}
                              placeholder="+90 5xx xxx xx xx"
                              className="form-input"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="font-sans text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5 block">E-posta</label>
                          <input
                            id="contact-email"
                            type="email" name="email" required
                            value={form.email} onChange={handleChange}
                            placeholder="ornek@email.com"
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label className="font-sans text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1.5 block">Mesajınız</label>
                          <textarea
                            id="contact-message"
                            name="message" rows={4} required
                            value={form.message} onChange={handleChange}
                            placeholder="Soru, öneri veya mesajınızı buraya yazabilirsiniz..."
                            className="form-input resize-none"
                          />
                        </div>
                        <button
                          id="contact-submit"
                          type="submit"
                          disabled={loading}
                          className="mt-2 w-full py-3.5 rounded-full bg-amber-gradient text-white font-sans font-semibold text-sm shadow-amber hover:shadow-amber-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <>
                              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                              </svg>
                              Gönderiliyor...
                            </>
                          ) : 'Mesaj Gönder ✦'}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </FadeSection>

              {/* Map */}
              <FadeSection delay={0.25}>
                <div className="relative rounded-3xl overflow-hidden h-80 shadow-card border border-amber-900/20">
                  <iframe
                    title="Kebabo Konum"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=29.2939%2C40.8434%2C29.3059%2C40.8554&layer=mapnik&marker=40.849506%2C29.300191"
                  />
                  {/* Overlay tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="bg-kebaboCard/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-card border border-amber-900/25">
                      <p className="font-sans text-xs font-semibold text-zinc-200">📍 Kebabo</p>
                      <p className="font-sans text-xs text-zinc-500 mt-0.5">İçmeler, Tuzla / İstanbul</p>
                    </div>
                    <a
                      href="https://www.google.com/maps?q=40.849506,29.300191"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-gradient hover:shadow-amber-lg text-white font-sans text-xs font-semibold px-4 py-3 rounded-xl shadow-amber transition-all duration-300 flex items-center gap-1.5 hover:scale-105"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                      </svg>
                      Google Maps
                    </a>
                  </div>
                </div>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
