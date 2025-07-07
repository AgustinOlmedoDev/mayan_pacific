"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Star,
  Users,
  Send,
  Instagram,
  Music,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Clock,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"
import { LanguageSwitcher } from "../../components/language-switcher"

// Definir la interfaz para el tipo Project
interface Project {
  id: number
  name: string
  location: string
  description: string
  images: string[]
  features: string[]
  units: string
  delivery: string
}



export default function MayanPacificImproved() {
  const t = useTranslations()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      try {
        if (document.fullscreenElement) {
          document.exitFullscreen()
        } else {
          const video = videoRef.current as HTMLVideoElement & {
            webkitRequestFullscreen?: () => Promise<void>
            mozRequestFullScreen?: () => Promise<void>
            msRequestFullscreen?: () => Promise<void>
          }
          // Intentar diferentes métodos para compatibilidad móvil
          if (video.requestFullscreen) {
            video.requestFullscreen()
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen()
          } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen()
          } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen()
          }
        }
      } catch {
        // Silently handle fullscreen errors for unsupported devices
        console.log("Fullscreen no soportado en este dispositivo")
      }
    }
  }

  const projects: Project[] = [
    {
      id: 1,
      name: "Baay",
      location: "Playa del Carmen",
      description:
        "Baay Eco‑Studios es un exclusivo desarrollo de 44 unidades con vista al mar, diseñado para ofrecer una experiencia residencial de alta calidad y sensibilidad ecológica. Certificado bajo el estándar EDGE, cuenta con tecnología que optimiza el uso de energía, agua y materiales, mediante estrategias simples pero efectivas . Esto garantiza un ahorro mínimo del 20 % en cada uno de estos rubros, sin sacrificar confort ni estilo. Construido con pleno respeto al entorno, Baay establece un nuevo paradigma de sostenibilidad y bienestar en Playa del Carmen.",
      images: [
        "/images/projects/baay/VISTA FIRE PIT.webp",
        "/images/projects/baay/baay1.webp",
        "/images/projects/baay/terraza.webp",
        "/images/projects/baay/gym,.webp",
      ],
      features: ["Piscina en Azotea", "Gimnasio", "Seguridad 24/7", "Acceso a Playa"],
      units: "44 Unidades",
      delivery: "2026 - Abril. ",
    },
    {
      id: 2,
      name: "Brahma",
      location: "Selvazama",
      description:
        "Brahma es un exclusivo desarrollo de departamentos de lujo ubicado en el corazón de Selvazama, Tulum. Diseñado para quienes buscan un estilo de vida sofisticado en armonía con la naturaleza, Brahma ofrece acabados premium, arquitectura contemporánea y amenidades pensadas para el bienestar. Es una inversión ideal tanto para vivir como para rentas de alto nivel.",
      images: [
        "/images/projects/brahma/brahma1.webp",
        "/images/projects/brahma/brahma2.webp",
        "/images/projects/brahma/brahma3.webp",
        "/images/projects/brahma/brahma4.webp",
      ],
      features: ["Piscina Privada", "Vista al Jardín", "Spa"],
      units: "56 Unidades",
      delivery: "2025 - Diciembre. Torre B y Torre C",
    },
    {
      id: 3,
      name: "Xanbel",
      location: "Villas de lujo en Selvazama",
      description:
        "Xanbel, que significa 'lento' en maya, invita a adoptar un slow living en el corazón de Selvazama. Son villas de alta gama, pensadas para familias conscientes, que priorizan la sostenibilidad, la seguridad multicultural, y la conexión constante con la naturaleza, sin renunciar al confort ni el diseño contemporáneo. Villas exclusivas que combinan arquitectura de autor, acabados naturales de alto nivel y un diseño que honra la esencia de Tulum. Espacios amplios, privados y elegantes, inmersos en la selva de Selvazama. Para quienes buscan lujo, pero también conexión y calma.",
      images: [
        "/images/projects/xanbel/xanbel3.webp",
        "/images/projects/xanbel/xanbel4.webp",
        "/images/projects/xanbel/xanbel1.webp",
        "/images/projects/xanbel/xanbel2.webp",
      ],
      features: ["Piscina en Azotea", "Gimnasio", "Seguridad 24/7"],
      units: "7 Villas",
      delivery: "2025 - Diciembre.",
    },
    {
      id: 4,
      name: "Casas escultóricas",
      location: "Arte Habitable en la Selva - Exclusividad Única",
      description:
        "Proyecto ultra-exclusivo de solo 3 residencias, cada una con diseño circular singular, más de 550 m² de construcción y amenidades premium (piscina de piedra, paddle tennis, huerto, gym al aire libre, mini-golf…). Es para quienes buscan la máxima privacidad, elegancia y una obra arquitectónica en sintonía con la selva. Solo 3 casas, 3 obras maestras. Cada una con un diseño arquitectónico distinto, orgánico y escultórico, que dialoga con la selva de Selvazama. Espacios fluidos, curvas que envuelven la luz natural y una estética que transforma el lujo en experiencia sensorial. Más que residencias: piezas de arte para vivirlas.",
      images: [
        "/images/projects/tulum/tulum1.webp",
        "/images/projects/tulum/tulum2.webp",
        "/images/projects/tulum/tulum3.webp",
        "/images/projects/tulum/tulum4.webp",
      ],
      features: ["Piscina Privada", "Vista al Jardín", "Spa"],
      units: "3 Unidades A PEDIDO",
      delivery: "NA",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Izquierda */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/projects/logo/logo.png"
                alt="Mayan Pacific Realty"
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
                priority={true}
                quality={100}
              />
            </Link>

            {/* Texto central - Solo visible en desktop */}
            <div className="hidden lg:flex flex-1 justify-center">
              <h1 className="text-lg font-semibold text-slate-800">{t("nav.welcome")}</h1>
            </div>

            {/* Derecha: Switch de idioma + botones */}
            <div className="flex items-center gap-3">
              {/* Switch de idioma */}
              <LanguageSwitcher />

              {/* Desktop: botones */}
              <div className="hidden lg:flex items-center gap-2">
                <a href="https://catalogo.mayanpacific.com/">
                  <Button className="bg-slate-800 hover:bg-slate-700 text-white" size="sm">
                    {t("nav.catalog")}
                  </Button>
                </a>
                <Button className="bg-slate-800 hover:bg-slate-700 text-white" size="sm">
                  {t("nav.contact")}
                </Button>
              </div>

              {/* Mobile: botón hamburguesa */}
              <div className="lg:hidden">
                <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menú">
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 bg-white">
              <nav className="flex flex-col space-y-4 px-2">
                {/* Texto de bienvenida en móvil */}
                <div className="text-center py-2 border-b border-gray-100">
                  <h1 className="text-base font-semibold text-slate-800">{t("nav.welcome")}</h1>
                </div>

                <Link
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.about")}
                </Link>
                <a
                  href="https://catalogo.mayanpacific.com/"
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.catalog")}
                </a>
                <button
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2 text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.contact")}
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Video Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: "center center",
            }}
          >
            <source src="/videos/videoprincipal.mp4" type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>

          {/* Controles de video */}
          <div className="absolute bottom-4 right-4 flex gap-2 sm:gap-3 z-10">
            {/* Botón Play/Pause */}
            <button
              onClick={togglePlay}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20"
              aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              ) : (
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5" />
              )}
            </button>

            {/* Botón Sonido */}
            <button
              onClick={toggleMute}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20"
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              )}
            </button>

            {/* Botón Pantalla Completa - mejorado para móvil */}
            <button
              onClick={handleFullscreen}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20"
              aria-label="Pantalla completa"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          {projects.map((project, index) => (
            <ProjectSection key={project.id} project={project} isReversed={index % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Catalog Invitation Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              {t("catalog.title")}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">{t("catalog.subtitle")}</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{t("catalog.premiumLocations")}</h3>
                <p className="text-gray-600 text-sm">{t("catalog.premiumLocationsDesc")}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{t("catalog.guaranteedQuality")}</h3>
                <p className="text-gray-600 text-sm">{t("catalog.guaranteedQualityDesc")}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{t("catalog.expertAdvice")}</h3>
                <p className="text-gray-600 text-sm">{t("catalog.expertAdviceDesc")}</p>
              </div>
            </div>
            <a
              href="https://catalogo.mayanpacific.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t("catalog.viewCatalog")}
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Owner & Offices Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-sm font-medium border-orange-200 text-orange-700">
              {t("owner.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t("owner.title")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("owner.subtitle")}</p>
          </div>

          {/* Owner Profile */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-slate-100">
                  <Image
                    src="/images/projects/Ernesto.jpg"
                    alt="Ernesto - Fundador de Mayan Pacific Realty"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-500/10 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{t("owner.name")}</h3>
                <p className="text-orange-600 font-semibold text-lg mb-4">{t("owner.position")}</p>
              </div>

              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>{t("owner.description1")}</p>
                <p>{t("owner.description2")}</p>
                <p className="italic text-slate-600 border-l-4 border-orange-200 pl-4">{`"${t("owner.quote")}"`}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">15+</div>
                  <div className="text-sm text-gray-600">{t("owner.years")}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">{t("owner.clients")}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">300+</div>
                  <div className="text-sm text-gray-600">{t("owner.units")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Office Location */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{t("owner.officesTitle")}</h3>
                <p className="text-gray-600 text-lg">{t("owner.officesSubtitle")}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Contact Info */}
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-100 p-3 rounded-full">
                          <MapPin className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">{t("owner.address")}</h4>
                          <p className="text-gray-600">
                            Av. Constituyentes 123
                            <br />
                            Playa del Carmen, Quintana Roo
                            <br />
                            CP 77710, México
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-green-100 p-3 rounded-full">
                          <Phone className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">{t("owner.phone")}</h4>
                          <p className="text-gray-600">
                            +52 984 123 4567
                            <br />
                            +52 984 876 5432
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">{t("owner.email")}</h4>
                          <p className="text-gray-600">
                            info@mayanpacific.com
                            <br />
                            ernesto@mayanpacific.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-100 p-3 rounded-full">
                          <Clock className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">{t("owner.hours")}</h4>
                          <p className="text-gray-600 whitespace-pre-line">{t("owner.hoursText")}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Map */}
                <div className="h-96 lg:h-full min-h-[400px]">
                  <div className="w-full h-full bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.8234567890123!2d-87.0739!3d20.6296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e433f1234567%3A0x1234567890abcdef!2sPlaya%20del%20Carmen%2C%20Quintana%20Roo%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t("contact.title")}</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
            </div>

            {/* Elegant Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-0 py-3 text-base sm:text-lg border-0 border-b-2 border-gray-200 bg-transparent focus:border-orange-500 focus:ring-0 transition-colors duration-300 placeholder-gray-400"
                      placeholder={t("contact.form.name")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-0 py-3 text-base sm:text-lg border-0 border-b-2 border-gray-200 bg-transparent focus:border-orange-500 focus:ring-0 transition-colors duration-300 placeholder-gray-400"
                      placeholder={t("contact.form.email")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-0 py-3 text-base sm:text-lg border-0 border-b-2 border-gray-200 bg-transparent focus:border-orange-500 focus:ring-0 transition-colors duration-300 placeholder-gray-400"
                    placeholder={t("contact.form.phone")}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-medium text-slate-700">
                    {t("contact.form.interest")}
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-0 py-3 text-base sm:text-lg border-0 border-b-2 border-gray-200 bg-transparent focus:border-orange-500 focus:ring-0 transition-colors duration-300 text-gray-700"
                  >
                    <option value="">{t("contact.form.selectOption")}</option>
                    <option value="condo">{t("contact.form.condo")}</option>
                    <option value="villa">{t("contact.form.villa")}</option>
                    <option value="penthouse">{t("contact.form.penthouse")}</option>
                    <option value="investment">{t("contact.form.investment")}</option>
                    <option value="other">{t("contact.form.other")}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-0 py-3 text-base sm:text-lg border-0 border-b-2 border-gray-200 bg-transparent focus:border-orange-500 focus:ring-0 transition-colors duration-300 placeholder-gray-400 resize-none"
                    placeholder={t("contact.form.message")}
                  ></textarea>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {t("contact.form.send")}
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </div>
              </form>

              {/* Subtle decoration */}
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-orange-200 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Simple contact info below */}
            <div className="text-center mt-8 text-gray-800">
              <p className="text-sm">
                {t("contact.directContact")}
                <a href="tel:+529841234567" className="text-orange-600 hover:text-orange-700 font-medium ml-3">
                  +52 984 123 4567
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center mb-4">
                <span className="font-bold text-xl">Mayan Pacific Realty</span>
              </div>
              <p className="text-gray-300 mb-6">{t("footer.description")}</p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com/mayanpacific"
                  target="_blank"
                  className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://tiktok.com/@mayanpacific"
                  target="_blank"
                  className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <Music className="w-5 h-5" />
                </Link>
                <Link
                  href="https://wa.me/529841234567"
                  target="_blank"
                  className="w-10 h-10 bg-gray-700 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t("footer.projects")}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#baay" className="hover:text-white transition-colors">
                    Baay - Playa del Carmen
                  </Link>
                </li>
                <li>
                  <Link href="#brahma" className="hover:text-white transition-colors">
                    Brahma - Selvazama
                  </Link>
                </li>
                <li>
                  <Link href="#catalog" className="hover:text-white transition-colors">
                    Ver Todos los Proyectos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Venta de Propiedades
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Asesoría de Inversión
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Administración de Propiedades
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Consultoría Legal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+52 984 123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@mayanpacific.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Playa del Carmen, Q.R.</span>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold mb-2">{t("footer.follow")}</h5>
                <p className="text-sm text-gray-400">{t("footer.followDesc")}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2025 Mayan Pacific Realty. {t("footer.rights")}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/529841234567"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/projects/icons/wsp.svg"
          alt="WhatsApp"
          width={24}
          height={24}
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      </Link>
    </div>
  )
}

// Project Section Component
interface ProjectSectionProps {
  project: Project
  isReversed: boolean
}

function ProjectSection({ project, isReversed }: ProjectSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Precargar todas las imágenes del carrusel
  useEffect(() => {
    project.images.forEach((imageSrc) => {
      const img = document.createElement("img")
      img.src = imageSrc
    })
  }, [project.images])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className={`mb-16 sm:mb-24 md:mb-32 ${isReversed ? "lg:mb-40" : ""}`}>
      <div
        className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
          isReversed ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Content */}
        <div className={`space-y-4 sm:space-y-6 ${isReversed ? "lg:col-start-2" : ""}`}>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-slate-800 mb-4">
              {project.name}
            </h2>
            <div className="flex items-center text-gray-600 mb-6">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-base sm:text-lg">{project.location}</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{project.description}</p>

          {/* Project Details */}
          <div className="grid grid-cols-2 gap-4 py-6">
            <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-slate-800 text-sm sm:text-base">{project.units}</div>
              <div className="text-xs sm:text-sm text-gray-600">Disponibles</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-slate-800 text-sm sm:text-base">{project.delivery}</div>
              <div className="text-xs sm:text-sm text-gray-600">Entrega</div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-800">Características principales:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-600 text-sm sm:text-base">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg">
            Conoce más
          </Button>
        </div>

        {/* Image Carousel */}
        <div className={`relative ${isReversed ? "lg:col-start-1" : ""}`}>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${project.name} - Imagen ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-all duration-500"
              priority={currentImageIndex === 0}
              loading={currentImageIndex < 2 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAAcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-1 sm:p-2 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-1 sm:p-2 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Floating Badge */}
          <Badge className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-orange-500 text-white px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold shadow-lg">
            Proyecto exclusivo
          </Badge>
        </div>
      </div>
    </div>
  )
}
