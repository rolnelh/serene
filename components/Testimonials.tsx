const testimonials = [
    {
        quote: "I've tried Headspace, BetterHelp, all of it. Serene is the first thing that actually fits into my day without guilt. It's like a smart friend who remembers everything.",
        name: 'Sarah M.',
        role: 'UX Designer, Austin TX',
        bg: '#d4c5b0',
    },
    {
        quote: "I was skeptical. 3 minutes a day sounded too simple. But after two weeks, I noticed I was catching my anxiety spirals earlier. The pattern tracking is genuinely insightful.",
        name: 'Thomas R.',
        role: 'Software Engineer, Berlin',
        bg: '#b8c4b0',
    },
    {
        quote: "As a remote freelancer I have zero colleagues to vent to. Serene doesn't try to be my therapist — it helps me think more clearly. That's exactly what I needed.",
        name: 'Léa F.',
        role: 'Freelance Writer, Paris',
        bg: '#c4b8c0',
    },
]

export default function Testimonials() {
    return (
        <section className="bg-sand px-16 py-24 max-lg:px-8">
            <p className="text-xs tracking-widest uppercase text-clay mb-4">Early feedback</p>
            <h2 className="font-serif text-4xl leading-tight mb-12">
                What beta users<br />are saying.
            </h2>

            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
                {testimonials.map(t => (
                    <div key={t.name}
                        className="bg-cream border border-mist rounded-2xl p-8">
                        {/* Quote mark */}
                        <svg className="mb-5" width="24" height="18"
                            viewBox="0 0 24 18" fill="none">
                            <path d="M0 18V10.8C0 4.6 3.6 1.2 10.8 0l1.2 1.8C8.2 2.8 6 5
                       5.6 8.4H10V18H0zm13 0V10.8C13 4.6 16.6 1.2 23.8
                       0L25 1.8C21.2 2.8 19 5 18.6 8.4H23V18H13z"
                                fill="#c4714a" />
                        </svg>

                        <p className="text-sm text-ink leading-relaxed mb-6">"{t.quote}"</p>

                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full flex-shrink-0"
                                style={{ background: t.bg }} />
                            <div>
                                <p className="text-sm font-medium text-ink">{t.name}</p>
                                <p className="text-xs text-soft">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}