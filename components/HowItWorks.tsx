const steps = [
    {
        n: '01',
        title: 'Daily check-in',
        desc: '3 quick questions about your mood, sleep, and stress level. No forms. No long surveys. Just a natural conversation.',
    },
    {
        n: '02',
        title: 'Personalized insight',
        desc: 'Serene detects patterns across your days and delivers one clear, actionable insight — grounded in CBT principles.',
    },
    {
        n: '03',
        title: 'Micro-action plan',
        desc: 'One tiny habit. Tailored to your schedule. Not a 30-day program — just today. Repeat tomorrow.',
    },
]

export default function HowItWorks() {
    return (
        <section className="px-16 py-24 max-lg:px-8">
            <p className="text-xs tracking-widest uppercase text-clay mb-4">How it works</p>
            <h2 className="font-serif text-4xl leading-tight mb-16">
                Three minutes.<br />Every day. That's it.
            </h2>

            <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-1">
                {steps.map(s => (
                    <div key={s.n}>
                        <div className="font-serif text-6xl text-mist leading-none mb-4 relative w-fit">
                            {s.n}
                            <span className="absolute top-2 left-9 w-7 h-7 bg-moss rounded-full
                               flex items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M6 2v8M2 6h8" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </div>
                        <h3 className="font-serif text-xl mb-2">{s.title}</h3>
                        <p className="text-soft text-sm leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}