const features = [
    {
        title: 'AI-powered journaling',
        desc: 'Write freely. Serene reads between the lines, surfaces recurring themes, and reflects patterns you might miss yourself.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-moss">
                <rect x="4" y="8" width="32" height="24" rx="4"
                    stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 18h16M12 22h10" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="30" cy="12" r="5" fill="#f5f2ec"
                    stroke="#c4714a" strokeWidth="1.3" />
                <path d="M28.5 12h3M30 10.5v3" stroke="#c4714a"
                    strokeWidth="1.2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Mood pattern tracking',
        desc: 'Your emotional data, visualized clearly over 7, 30, and 90 days. Spot your triggers before they escalate.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-moss">
                <path d="M8 28l6-8 5 4 5-10 6 6"
                    stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 32h24" stroke="currentColor"
                    strokeWidth="1.2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'CBT-based exercises',
        desc: 'Cognitive Behavioral Therapy techniques, distilled into 2–5 minute exercises. Clinically proven. No degree required.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-moss">
                <path d="M20 8v6M20 26v6M8 20h6M26 20h6"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="20" cy="20" r="2" fill="#c4714a" />
            </svg>
        ),
    },
    {
        title: 'Weekly review',
        desc: 'Every Sunday, a clear summary of your week — what drained you, what helped, and one focus area for the week ahead.',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-moss">
                <rect x="8" y="10" width="24" height="20" rx="3"
                    stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 18l4 4 8-8" stroke="#c4714a"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
]

export default function Features() {
    return (
        <section className="px-16 py-24 max-lg:px-8">
            <p className="text-xs tracking-widest uppercase text-clay mb-4">What's inside</p>
            <h2 className="font-serif text-4xl leading-tight mb-12">
                Built around{' '}
                <em className="italic text-clay">real science,</em>{' '}
                real life.
            </h2>

            <div className="grid grid-cols-2 gap-px bg-mist rounded-xl overflow-hidden
                      max-lg:grid-cols-1">
                {features.map(f => (
                    <div key={f.title} className="bg-cream p-10">
                        <div className="mb-5">{f.icon}</div>
                        <h3 className="font-serif text-xl mb-2 text-ink">{f.title}</h3>
                        <p className="text-soft text-sm leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}