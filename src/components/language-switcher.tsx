"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { Sun, Moon } from "lucide-react"
import { useTransition } from "react"

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLanguage = () => {
    const newLocale = locale === "es" ? "en" : "es"
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)

    startTransition(() => {
      router.push(newPath)
    })
  }

  return (
    <button
      onClick={switchLanguage}
      disabled={isPending}
      className={`flex items-center p-1 rounded-full focus:outline-none transition-colors duration-200 ${
        locale === "en" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
      } ${isPending ? "opacity-50" : ""}`}
      aria-label="Cambiar idioma"
    >
      {locale === "en" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      <span className="ml-2 text-sm font-medium">{locale === "en" ? "EN" : "ES"}</span>
    </button>
  )
}
