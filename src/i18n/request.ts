export const locales = ['es', 'en'] as const;

export default async function getRequestConfig({ locale }: { locale?: string }) {
  const safeLocale = locale ?? 'es';

  if (!locales.includes(safeLocale as any)) {
    throw new Error(`Locale no soportado: ${safeLocale}`);
  }

  return {
    messages: (await import(`../messages/${safeLocale}.json`)).default,
  };
}

