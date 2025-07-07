import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  // Esto asegura que redireccione `/` → `/es`
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/', '/(es|en)/:path*'],
};
