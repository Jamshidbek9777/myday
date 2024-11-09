import {Inter} from 'next/font/google';
import {ReactNode} from 'react';
import {
    AntdProvider,
    NextIntlProvider,
    StyledComponentsRegistry,
} from '@/providers';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {locales} from '@/config';

type LayoutProps = {
    params: { locale: string };
    children: ReactNode;
};

export async function generateMetadata({params: {locale}}: { params: { locale: string } }) {
    const t = await getTranslations({locale, namespace: 'meta.home'});

    return {other: {'apple-mobile-web-app-title': t('0'), 'application-name': t('0')}};
}

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

const inter = Inter({subsets: ['latin']});

export default function RootLayout({params: {locale}, children}: LayoutProps) {
    unstable_setRequestLocale(locale);

    return (
        <html lang={locale}>
        <meta name="image" property="og:image" content="{url}og-image.png"/>
        <meta name="og:image" content="{url}static/og-image.png"/>
        <meta name="og:image:secure_url" content="{url}static/og-image.png"/>
        <meta name="theme-color" content="#ffffff"/>
        <link rel="icon" href="/icons/logo.svg" type="svg" sizes="32x32"/>
        <link rel="apple-touch-icon" href="/images/logo-blue.png" type="png" sizes="32x32"/>

        <body className={inter.className}>
        <NextIntlProvider locale={locale}>
            <StyledComponentsRegistry>
                <AntdProvider>
                    {children}
                </AntdProvider>
            </StyledComponentsRegistry>
        </NextIntlProvider>
        </body>
        </html>
    );
}