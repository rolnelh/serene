const plans = [
    {
        tier: 'Free', amount: '$0', period: 'forever', featured: false,
        features: ['Daily check-in (1/day)', 'Basic mood tracking', '7-day history'],
        cta: 'Start free',
    },
    {
        tier: 'Pro', amount: '$9', period: 'per month', featured: true,
        badge: 'Most popular',
        features: ['Unlimited check-ins', 'AI journaling + pattern analysis',
            '90-day mood history', 'CBT exercises library', 'Weekly insight report'],
        cta: 'Get early access — $5/mo',
    },
    {
        tier: 'Team', amount: '$6', period: 'per user / month', featured: false,
        features: ['Everything in Pro', 'Anonymized team wellness dashboard',
            'HR reporting + burnout alerts', 'Min. 10 users'],
        cta: 'Contact us',
    },
]

export default function Pricing() {
    return (
        <section className="px-16 py-24 max-lg:px-8">
            <p className="text-xs tracking-widest uppercase text-clay mb-4">Pricing</p>
            <h2 className="font-serif text-4xl leading-tight mb-12">
                Simple pricing.<br />No surprises.
            </h2>

            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
                {plans.map(p => (
                    <div key={p.tier}
                        className={`border rounded-xl p-9 relative transition-all duration-200
                           hover:-translate-y-1
                           ${p.featured
                                ? 'border-moss bg-moss text-cream'
                                : 'border-mist hover:border-moss'}`}>
                        {p.badge && (
                            <span className="absolute -top-px left-1/2 -translate-x-1/2 text-[10px]
                               font-medium tracking-widest uppercase bg-clay text-cream
                               px-3 py-1 rounded-b-lg">
                                {p.badge}
                            </span>
                        )}

                        <p className={`text-xs tracking-widest uppercase mb-3
                           ${p.featured ? 'text-cream/60' : 'text-soft'}`}>
                            {p.tier}
                        </p>
                        <div className={`font-serif text-5xl leading-none mb-1
                             ${p.featured ? 'text-cream' : 'text-ink'}`}>
                            {p.amount}
                        </div>
                        <p className={`text-xs mb-6 ${p.featured ? 'text-cream/60' : 'text-soft'}`}>
                            {p.period}
                        </p>

                        <ul className="space-y-3 mb-8">
                            {p.features.map(f => (
                                <li key={f} className={`flex items-start gap-2 text-sm
                                        ${p.featured ? 'text-cream/75' : 'text-soft'}`}>
                                    <svg className="flex-shrink-0 mt-0.5" width="14" height="14"
                                        viewBox="0 0 14 14" fill="none">
                                        <path d="M2.5 7l3 3 6-6"
                                            stroke={p.featured ? 'rgba(255,255,255,0.6)' : '#3d5a47'}
                                            strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-3 rounded-lg text-sm font-medium
                                transition-colors
                                ${p.featured
                                ? 'bg-cream text-moss hover:bg-sand'
                                : 'border border-mist hover:border-moss hover:text-moss'}`}>
                            {p.cta}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}