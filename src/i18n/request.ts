export const locales = ['es', 'en'] as const;

export default async function getRequestConfig({ locale }: { locale: string }) {
  if (!locales.includes(locale as any)) {
    // Evitá usar `notFound()` si estás en el archivo de configuración
    throw new Error(`Locale no soportado: ${locale}`);
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
}
