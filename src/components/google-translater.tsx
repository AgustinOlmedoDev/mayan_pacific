"use client"

import { useEffect, useState } from "react"
import { Globe } from "lucide-react"

export default function GoogleTranslate() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkGoogleTranslate = () => {
      const ready =
        window.google?.translate?.TranslateElement &&
        window.google.translate.TranslateElement.InlineLayout

      if (ready) {
        setIsLoaded(true)

        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "es",
              includedLanguages: "en,es,fr,de,it,pt,ru,zh",
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element"
          )
        } catch (error) {
          console.error("Error al inicializar Google Translate:", error)
        }
      } else {
        setTimeout(checkGoogleTranslate, 500)
      }
    }

    setTimeout(checkGoogleTranslate, 1000)
  }, [])

  return (
    <div className="flex items-center">
      {/* Contenedor Google Translate */}
      <div
        id="google_translate_element"
        className="google-translate-container"
        style={{
          display: isLoaded ? "block" : "none",
        }}
      />

      {/* Cargando idiomas */}
      {!isLoaded && (
        <div className="flex items-center gap-2 px-3 py-2 text-slate-500 bg-slate-50 rounded-lg border border-slate-200">
          <Globe className="w-4 h-4 animate-pulse" />
          <span className="text-sm">Cargando idiomas...</span>
        </div>
      )}

      {/* Estilos globales personalizados */}
      <style jsx global>{`
        .google-translate-container {
          font-family: inherit !important;
        }

        .google-translate-container .goog-te-gadget {
          font-size: 0 !important;
          color: transparent !important;
        }

        .goog-te-gadget-simple {
          background: white !important;
          border: 1px solid #cbd5e1 !important;
          border-radius: 0.75rem !important;
          padding: 0.75rem 1rem !important;
          font-size: 0.875rem !important;
          color: #475569 !important;
          cursor: pointer !important;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
          display: flex !important;
          align-items: center !important;
          gap: 0.5rem !important;
        }

        .goog-te-gadget-simple:hover {
          border-color: #f97316 !important;
          background: #fff7ed !important;
          box-shadow: 0 4px 8px rgba(249, 115, 22, 0.15) !important;
        }

        .goog-te-menu-value {
          color: #475569 !important;
          font-size: 0.875rem !important;
          font-weight: 500 !important;
          display: flex !important;
          align-items: center !important;
        }

        .goog-te-menu-value:before {
          content: "🌐" !important;
          margin-right: 0.25rem !important;
        }

        .goog-te-menu-frame {
          border-radius: 0.75rem !important;
          border: 1px solid #e2e8f0 !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
          z-index: 99999 !important;
        }

        .goog-te-menu2 {
          background: white !important;
          max-height: 300px !important;
          overflow-y: auto !important;
          padding: 0.5rem 0 !important;
        }

        .goog-te-menu2-item {
          padding: 0.75rem 1rem !important;
          font-size: 0.875rem !important;
          color: #475569 !important;
        }

        .goog-te-menu2-item:hover {
          background: #fff7ed !important;
          color: #ea580c !important;
        }

        .goog-te-menu2-item-selected {
          background: linear-gradient(135deg, #f97316, #ea580c) !important;
          color: white !important;
        }

        .goog-logo-link,
        .goog-te-banner-frame,
        .goog-te-balloon-frame {
          display: none !important;
        }

        .goog-te-gadget .goog-te-combo {
          margin: 0 !important;
        }

        @media (max-width: 640px) {
          .goog-te-gadget-simple {
            padding: 0.5rem 0.75rem !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </div>
  )
}

// Tipado extendido para evitar errores con InlineLayout
declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string
              includedLanguages: string
              layout: number
              autoDisplay: boolean
            },
            elementId: string
          ): void
          InlineLayout: {
            SIMPLE: number
            HORIZONTAL: number
            VERTICAL: number
          }
        }
      }
    }
    googleTranslateElementInit: () => void
  }
}
