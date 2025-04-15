import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import '@/app/globals.css';
import { Link } from '@/i18n/navigation';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <div className='flex flex-col gap-4 items-center'>
          <div className='flex gap-4 w-max bg-amber-100 p-4 rounded-md'>
            <Link href="/about">About</Link>
            <Link href="/">Homepage</Link>
          </div>

          {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}