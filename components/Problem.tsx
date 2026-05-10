const stats = [
    { number: '58%', desc: 'of adults in the US & Europe report moderate to extreme daily stress.' },
    { number: '6 mo.', desc: 'average wait time to see a therapist in major US and European cities.' },
    { number: '$280B', desc: 'lost annually in productivity due to untreated anxiety and burnout.' },
]

export default function Problem() {
    return (
        <section className="bg-ink text-cream px-16 py-24 max-lg:px-8">
            <p className="text-xs tracking-widest uppercase text-clay mb-4">The reality</p>
            <h2 className="font-serif text-4xl leading-tight max-w-lg mb-3">
                Mental health care is broken.<br />We're building what comes next.
            </h2>
            <p className="text-cream/50 max-w-md text-sm leading-relaxed mb-12">
                The system wasn't designed for everyday stress. It was designed for crisis.
                Serene fills the gap.
            </p>

            <div className="grid grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden
                      max-lg:grid-cols-1">
                {stats.map(s => (
                    <div key={s.number}
                        className="bg-white/[0.03] px-8 py-10 relative
                          before:absolute before:top-0 before:left-0
                          before:w-[3px] before:h-full before:bg-clay">
                        <div className="font-serif text-5xl text-cream mb-2">{s.number}</div>
                        <p className="text-cream/50 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}