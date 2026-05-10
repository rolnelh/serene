'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { LogoIcon } from '@/components/icons/LogoIcon'

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                     px-16 py-6 bg-cream/90 backdrop-blur-md border-b border-mist
                     transition-shadow duration-300
                     ${scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.06)]' : ''}`}>
            <Link href="/" className="flex items-center gap-2 font-serif text-xl text-ink no-underline">
                <LogoIcon />
                Serene
            </Link>
            <Link
                href="#waitlist"
                className="text-xs font-medium tracking-widest uppercase text-cream
                   bg-moss px-5 py-2 rounded-full hover:bg-ink transition-colors"
            >
                Join Waitlist
            </Link>
        </nav>
    )
}