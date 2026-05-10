import Link from 'next/link'
import { LogoIcon } from '@/components/icons/LogoIcon'

const links = ['Privacy', 'Terms', 'Contact', 'Blog']

export default function Footer() {
    return (
        <footer className="border-t border-mist px-16 py-10
                       flex items-center justify-between
                       max-lg:flex-col max-lg:gap-4 max-lg:text-center max-lg:px-8">
            <Link href="/"
                className="flex items-center gap-2 font-serif text-base
                       text-ink no-underline">
                <LogoIcon />
                Serene
            </Link>

            <nav className="flex gap-8">
                {links.map(l => (
                    <Link key={l} href="#"
                        className="text-xs text-soft hover:text-ink transition-colors">
                        {l}
                    </Link>
                ))}
            </nav>

            <p className="text-xs text-soft">© 2026 Serene. Built with care.</p>
        </footer>
    )
}