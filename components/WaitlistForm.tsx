'use client'
import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function WaitlistForm() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<Status>('idle')
    const [message, setMessage] = useState('')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus('loading')

        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.error)

            setStatus('success')
            setMessage(data.already
                ? "You're already on the list — we'll reach out soon."
                : "You're in! We'll reach out when we launch.")

        } catch (err: any) {
            setStatus('error')
            setMessage(err.message || 'Something went wrong. Try again.')
            setTimeout(() => setStatus('idle'), 4000)
        }
    }

    if (status === 'success') {
        return (
            <div className="mt-10 flex items-center gap-3 p-4 max-w-md
                      bg-moss/10 border border-moss/20 rounded-lg">
                <div className="w-5 h-5 rounded-full bg-moss flex-shrink-0
                        flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="white"
                            strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <p className="text-sm text-moss font-medium">{message}</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="mt-10 flex gap-3 max-w-md relative">
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3 border border-mist rounded-lg text-sm
                   bg-cream text-ink placeholder:text-soft/50 outline-none
                   focus:border-moss transition-colors disabled:opacity-60"
            />
            <button
                type="submit"
                disabled={status === 'loading'}
                className="px-5 py-3 bg-moss text-cream text-sm font-medium rounded-lg
                   hover:bg-ink transition-colors whitespace-nowrap
                   disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {status === 'loading' ? 'Joining...' : 'Get Early Access'}
            </button>

            {status === 'error' && (
                <p className="absolute -bottom-6 left-0 text-xs text-clay">{message}</p>
            )}
        </form>
    )
}