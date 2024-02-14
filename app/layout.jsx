import './globals.css'

import { routes } from '@/public/meta/meta'

import Navigation from './ui/navigation'
import Footer from './ui/footer'

export const metadata = {
    title: 'iceDeer工作室 | 提供极致的软件定制服务',
    description: '提供极致的软件定制服务',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body suppressHydrationWarning={true}>
                <Navigation pages={routes} />
                {children}
                <Footer />
            </body>
        </html>
    )
}