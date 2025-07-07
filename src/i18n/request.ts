export const locales = ['es', 'en'] as const;
export const defaultLocale = 'es';

export default async function getRequestConfig({ locale }: { locale?: string }) {
  const safeLocale = locale ?? defaultLocale;

  if (!locales.includes(safeLocale as (typeof locales)[number])) {
    return {
      locale: defaultLocale,
      messages: (await import(`../messages/${defaultLocale}.json`)).default,
    };
  }

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default,
  };
}
